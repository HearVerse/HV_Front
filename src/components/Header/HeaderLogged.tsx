import React, { FC } from "react";
import MainNav2Logged from "./MainNav2Logged";

export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 bg-white dark:bg-neutral-900">
      {/* NAV */}
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
