import React from "react";

import "./styles.scss";

const CallOrder = () => {
  const phone = require("assets/img/Vector.png");
  return (
    <div className="callOrder">
      <div className="callOreder__icon">
        <img src={phone}></img>
      </div>
      <div className="callOreder__number">
        <a href="tel:+74957556983"> +7(495) 755 69 83 </a>
      </div>
      <div className="callOreder__btn">
        <a>Заказать звонок</a>
      </div>
    </div>
  );
};

export default CallOrder;
