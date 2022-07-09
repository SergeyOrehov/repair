import React from "react";

//components

import "./styles.scss";

const Request = () => {
  return (
    <div className="request-form">
      <div className="text-consultation">
        <p>консультация специалиста и расчет стоимости ремонта</p>
      </div>
      <form action="#">
        <input type="tel" placeholder="ваш номер телефона" />
        <button className="btn-order" type="submit">
          Перезвоните мне
        </button>
        <p>Мастер перезвонит в течение 15 мин</p>
      </form>
    </div>
  );
};

export default Request;
