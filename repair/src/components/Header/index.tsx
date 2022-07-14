import React from "react";

import Logo from "components/Logo";
import Social from "components/Social";
import WorkScedule from "components/WorkScedule";
import CallOrder from "components/CallOrder";

import "./styles.scss";
import "./mediaQueries.scss";

const Header = () => {
  return (
    <header className="mainHeader">
      <div></div>
      <Logo />
      <Social />
      <WorkScedule />
      <CallOrder />
    </header>
  );
};

export default Header;
