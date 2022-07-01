import React from "react";

import Logo from "components/Logo";
import MainMenu from "components/MainMenu";
import Social from "components/Social";
import WorkScedule from "components/WorkScedule";
import CallOrder from "components/CallOrder";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <nav>
          <Logo />
          <MainMenu />
        </nav>
        <div className="socialIcon">
          <p>Мы в социальных сетях</p>
          <Social />
        </div>
        <div className="footerInfo">
          <WorkScedule />
          <div className="copyright">
            <p>© 2021 sitename.ru</p>
            <p>Все права защищены</p>
          </div>
          <CallOrder />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
