import React from "react";

//components
import MainMenu from "components/MainMenu";
import Button from "components/Button";

// routes
import routeMain from "./routes";

// styles
import "./styles.scss";

const MainPage = () => {
  const imgItem_1 = require("assets/img/60-minutes.png");
  const imgItem_2 = require("assets/img/interactive.png");
  const imgItem_3 = require("assets/img/quality.png");
  const imgItem_4 = require("assets/img/guarantee.png");
  const washingMashine = require("assets/img/askprice.png");
  return (
    <div>
      <section className="mainSection">
        <div className="container">
          <div className="blockMenu">
            <MainMenu />
          </div>
          <div className="wrapper">
            <h1> Ремонт стиральных машин в Москве</h1>
            <ul className="list">
              <li className="list__item">Отличные цены на запчасти</li>
              <li className="list__item">Фирменная гарантия на все работы</li>
              <li className="list__item">Ремонт в день обращения</li>
            </ul>
            <Button text="Заказать ремонт" />
          </div>
          <div className="advantage">
            <div className="advantage__item">
              <div>
                <img src={imgItem_1} alt="time" />
              </div>
              <p>Выезд мастера в течение 60 мин.</p>
            </div>
            <div className="advantage__item">
              <div>
                <img src={imgItem_2} alt="interactive" />
              </div>
              <p>Бесплатная экспресс- диагностика</p>
            </div>
            <div className="advantage__item">
              <div>
                <img src={imgItem_3} alt="quality" />
              </div>
              <p>Ремонт оригинальными комплектующими</p>
            </div>
            <div className="advantage__item">
              <div>
                <img src={imgItem_4} alt="guarantee" />
              </div>
              <p>Гарантия каждому владельцу до 2-х лет</p>
            </div>
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="questions__img">
          <img src={washingMashine} alt="washing mashine"></img>
        </div>
        <div className="questions__text">
          <div>
            <p>
              Ответьте на вопросы и узнайте точную стоимость ремонта вашей
              машинки
            </p>
            <p className="text">
              Мы перезвоним Вам и подробно проконсультируем по всем вопросам по
              ремонту стиральной машинки
            </p>
            <Button text="Узнать стоимость" />
          </div>
        </div>
      </section>
    </div>
  );
};

export { routeMain };
export default MainPage;
