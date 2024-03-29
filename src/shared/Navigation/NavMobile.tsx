import React, { useEffect, useState } from "react";
import ButtonClose from "shared/ButtonClose/ButtonClose";
import Logo from "shared/Logo/Logo";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "data/navigation";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SocialsList from "shared/SocialsList/SocialsList";
import { ChevronDownIcon } from "@heroicons/react/solid";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION_DEMO_2,
  onClickClose,
}) => {
  // const [wallet, setWallet] = useState("");
  const wallet = useAccount();
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: string } }) => state.auth.isLoggedIn
  );
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <NavLink
              end
              to={{
                pathname: i.href || undefined,
              }}
              className={({ isActive }) =>
                `flex px-4 py-2.5 dark:text-neutral-200 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-[2px] ${
                  isActive ? "text-secondary-500" : "text-neutral-900"
                }`
              }
            >
              <span
                className={!i.children ? "block w-full" : ""}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="block flex-grow"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <ChevronDownIcon
                      className="ml-2 h-4 w-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </NavLink>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <NavLink
          end
          className={({ isActive }) =>
            `flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg ${
              isActive ? "text-secondary-500" : ""
            }`
          }
          to={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? "block w-full" : ""}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <ChevronDownIcon
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  // useEffect(() => {
  //   const getWallet = async () => {
  //     if (window.ethereum) {
  //       const res = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setWallet(res[0]);
  //     }
  //   };
  //   getWallet();
  // }, []);

  // const onConnectWallet = () => {
  //   if (!wallet) {
  //     if (window?.ethereum) {
  //       window.ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then((res: any) => {
  //           setWallet(res[0]);
  //         });
  //     } else {
  //       alert("Install metamask extension!!");
  //     }
  //   } else {
  //     navigator.clipboard.writeText(wallet);
  //   }
  // };

  return (
    <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="flex justify-between items-center mt-4">
            <SocialsList itemClass="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl" />
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {data.map(_renderItem)}
      </ul>
      {isLoggedIn ? (
        <div className="flex items-center justify-between py-6 px-5 space-x-2">
          <ButtonPrimary href={"/page-upload-item"} className="!px-10">
            Create
          </ButtonPrimary>
          {/* <ButtonSecondary className="flex-1" onClick={() => onConnectWallet()}>
            {wallet
              ? wallet.slice(0, 5) + "..." + wallet.slice(38, 42)
              : "Connect Wallet"}
          </ButtonSecondary> */}
          <ConnectButton label="Connect through rainbow wallet"/>
        </div>
      ) : (
        <div className="flex items-center justify-between py-6 px-5 space-x-2">
          <ButtonPrimary href={"/login"} className="!px-10">
            Login
          </ButtonPrimary>
          <ButtonSecondary href={"/signup"} className="flex-1">
            Sign Up
          </ButtonSecondary>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
