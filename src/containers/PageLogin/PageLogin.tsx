import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import axios from "axios";
import { loginSuccess, loginFailure } from "redux/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
export interface PageLoginProps {
  className?: string;
}
interface LoginFormInputs {
  email: string;
  password: string;
}

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(8, "Invalid")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "Invalid"),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: string } }) => state.auth.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/account");
    }
  }, [isLoggedIn, navigate]);
  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://3.144.250.121:3001/login",
        data
      );
      if (response.data.success === true) {
        setIsLoading(false);

        dispatch(loginSuccess(response.data.userId));
        navigate("/account");
      } else {
        setIsLoading(false);
        dispatch(loginFailure());
        setError(response.data.error);
      }
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);

      setIsLoading(false);
      dispatch(loginFailure());
    }
  };
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Hearverse</title>
        
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>

        {location.state?.message && (
          <h2 className="my-20 flex items-center text-lg leading-[115%] md:text-2xl md:leading-[115%] font-semibold text-green-500 dark:text-green-500 justify-center">
            {location.state?.message}
          </h2>
        )}
        {error && (
          <h2 className="my-20 flex items-center text-lg leading-[115%] md:text-2xl md:leading-[115%] font-semibold text-red-500 dark:text-red-500 justify-center">
            {error}
          </h2>
        )}
        <div className="max-w-md mx-auto space-y-6">
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
                type="password"
                className="mt-1"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 ">{errors.password.message}</span>
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
            New user? {` `}
            <Link to="/signup" className="text-green-600">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
