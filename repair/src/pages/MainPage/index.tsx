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
  const price1 = require("assets/img/price1.png");
  const price2 = require("assets/img/price2.png");
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
      <section className="price">
        <div className="container">
          <h2>Стоимость услуг</h2>
          <div className="diagnostics">
            <h3 className="title">Диагностика</h3>
            <div className="options">
              <div className="options__item">
                <div className="options__item__img">
                  <img src={price1} alt="price 1" />
                  <div className="options__item__block">
                    <div>
                      <span>0</span>
                      <p>руб</p>тзь
                    </div>
                  </div>
                </div>
                <p className="options__item__text">
                  Диагностика при последующем ремонте
                </p>
              </div>
              <div className="options__item">
                <div className="options__item__img">
                  <img src={price2} alt="price 2" />
                  <div className="options__item__block">
                    <div>
                      <span>400</span>
                      <p>руб</p>
                    </div>
                  </div>
                </div>
                <p className="options__item__text">
                  Диагностика без последующего ремонта
                </p>
              </div>
            </div>
          </div>
          <div className="priceRepair">
            <h3 className="title">Цены на ремонт</h3>
            <div className="tableRepair">
              <div className="tableRepair__item">
                <div className="tableRepair__item_cause">
                  <p>Течет стиральная машина</p>
                </div>
                <div className="tableRepair__item_prise">
                  <p>
                    Ремонт от <span>100 руб</span>
                  </p>
                </div>
                <Button text="Заказать мастера" />
              </div>
              <div className="tableRepair__item">
                <div className="tableRepair__item_cause">
                  <p>Не открывается люк</p>
                </div>
                <div className="tableRepair__item_prise">
                  <p>
                    Ремонт от <span>120 руб</span>
                  </p>
                </div>
                <Button text="Заказать мастера" />
              </div>
              <div className="tableRepair__item">
                <div className="tableRepair__item_cause">
                  <p>Не греет воду</p>
                </div>
                <div className="tableRepair__item_prise">
                  <p>
                    Ремонт от <span>300 руб</span>
                  </p>
                </div>
                <Button text="Заказать мастера" />
              </div>
              <div className="tableRepair__item">
                <div className="tableRepair__item_cause">
                  <p>Стиральная машина не отжимает</p>
                </div>
                <div className="tableRepair__item_prise">
                  <p>
                    Ремонт от <span>250 руб</span>
                  </p>
                </div>
                <Button text="Заказать мастера" />
              </div>
              <div className="tableRepair__item">
                <div className="tableRepair__item_cause">
                  <p>Не работает слив в стиральной машине</p>
                </div>
                <div className="tableRepair__item_prise">
                  <p>
                    Ремонт от <span>500 руб</span>
                  </p>
                </div>
                <Button text="Заказать мастера" />
              </div>
              <div className="tableRepair__item">
                <div className="tableRepair__item_cause">
                  <p>Не вращается барабан</p>
                </div>
                <div className="tableRepair__item_prise">
                  <p>
                    Ремонт от <span>800 руб</span>
                  </p>
                </div>
                <Button text="Заказать мастера" />
              </div>
              <div className="tableRepair__last">
                <a href="#" className="tableRepair__last_link">
                  Подробные цены на ремонт стиральных машин
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { routeMain };
export default MainPage;
