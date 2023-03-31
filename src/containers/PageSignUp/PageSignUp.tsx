import React, { FC, useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

export interface PageSignUpProps {
  className?: string;
}
interface RegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}
const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Password must contain at least one uppercase and one lowercase letter"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const methods = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: RegisterFormInputs) => {
    const newData = {
      email: data.email,
      password: data.password,
    };

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://3.144.250.121:3001/register",
        newData
      );

      if (response.data.success === true) {
        setIsLoading(false);
        navigate("/login", {
          state: {
            message: "sign up was successful , please login to your account",
          },
        });
      } else {
        setIsLoading(false);
        setError(response.data.error);
      }
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);

      setIsLoading(false);
    }
  };
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: string } }) => state.auth.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/account");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || Hearverse</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <h2 className="my-20 flex items-center text-lg leading-[115%] md:text-2xl md:leading-[115%] font-semibold text-red-500 dark:text-red-500 justify-center">
          {error}
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          {/* FORM */}
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                {...register("email", { required: true })}
                // type="email"
                placeholder="example@example.com"
                className="my-2"
              />
              {errors.email && (
                <span className="text-red-500 ">{errors.email.message}</span>
              )}
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                
              </span>
              <Input
                placeholder="at least 8 characters and uppercase and
                  lowercase letters"
                type="password"
                className="my-2"
                {...register("password", { required: true })}
              />

              {errors.password && (
                <span className="text-red-500 ">{errors.password.message}</span>
              )}
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Confirm Password
              </span>
              <Input
                type="password"
                className="my-2"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 ">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
            {isLoading === false ? (
              <ButtonPrimary type="submit">Continue</ButtonPrimary>
            ) : (
              <ButtonPrimary disabled type="submit">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </ButtonPrimary>
            )}
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login" className="text-green-600">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
