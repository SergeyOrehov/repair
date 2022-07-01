import React from "react";

import "./styles.scss";

const WorkScedule = () => {
  const clock = require("assets/img/clock.png");
  return (
    <div className="workScedule">
      <div className="workScedule__img">
        <img src={clock} alt="clock"></img>
      </div>
      <p className="workScedule__text"> Режим работы</p>
      <div className="workScedule__time">
        <p>ПН-ПТ с 07:00 до 24:00</p>
        <p>Сб, ВС: с 07:00 до 24:00</p>
      </div>
    </div>
  );
};

export default WorkScedule;
