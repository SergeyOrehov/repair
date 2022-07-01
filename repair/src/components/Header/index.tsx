import React from "react";

import Logo from "components/Logo";
import Social from "components/Social";
import WorkScedule from "components/WorkScedule";
import CallOrder from "components/CallOrder";

import "./styles.scss";

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="container">
        <Logo />
        <Social />
        <WorkScedule />
        <CallOrder />
      </div>
    </header>
  );
};

export default Header;
