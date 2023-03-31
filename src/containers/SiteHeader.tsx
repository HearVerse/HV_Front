import React from "react";
import HeaderLogged from "components/Header/HeaderLogged";
import MainNav1 from "components/Header/MainNav1";
import { useSelector } from "react-redux";

const SiteHeader = () => {
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: string } }) => state.auth.isLoggedIn
  );

  if (isLoggedIn) {
    return <HeaderLogged />;
  } else {
    return <MainNav1 isTop={true} />;
  }
};

export default SiteHeader;
