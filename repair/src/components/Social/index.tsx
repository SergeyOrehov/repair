import React from "react";

import "./styles.scss";

const Social = () => {
  const instagram = require("assets/img/instagram.png");
  const vk = require("assets/img/vk.png");
  const telegram = require("assets/img/telegram.png");
  const whatsapp = require("assets/img/whatsapp.png");
  return (
    <div className="social">
      <div className="social__item">
        <a href="">
          <img src={instagram} alt="instagramm"></img>
        </a>
      </div>
      <div className="social__item">
        <a href="">
          <img src={vk} alt="vk"></img>
        </a>
      </div>
      <div className="social__item">
        <a href="">
          <img src={telegram} alt="telegram"></img>
        </a>
      </div>
      <div className="social__item">
        <a href="">
          <img src={whatsapp} alt="whatsapp"></img>
        </a>
      </div>
    </div>
  );
};

export default Social;
