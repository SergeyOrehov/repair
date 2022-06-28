import React from "react";

import Logo from "components/Logo";

import "./styles.scss";
import MainMenu from "components/MainMenu";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <nav>
          <Logo />
          <MainMenu />
        </nav>
        <div className="social">
          <p>Мы в социальных сетях</p>
          {/*<SocialNetworks />*/}
        </div>
        <div className="footerInfo">
          {/*<WorkScedule />*/}
          {/* <Copyright />*/}
          {/* <CallOrder />*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
