import React from "react";

//components
import MainMenu from "components/MainMenu";
import Button from "components/Button";
import Request from "components/Request";

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
  const power = require("assets/img/power.png");
  const waterDrop = require("assets/img/water-drop.png");
  const washingMachine1 = require("assets/img/washing-machine-1.png");
  const washingMachine2 = require("assets/img/washing-machine-2.png");
  const warning = require("assets/img/warning.png");
  const defectsImg = require("assets/img/25mins.png");
  const excellence_img1 = require("assets/img/excellence_img1.png");
  const excellence_img2 = require("assets/img/excellence_img2.png");

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
        <div className="wrapper__background"></div>
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

      <section className="defects">
        <div className="container">
          <div className="wrapper__background"></div>
          <p className="defects__text">
            Выполняем срочный ремонт поломки, которые мастер устранет за
            <span> 25 минут</span>
          </p>
          <div className="wrapper">
            <ul className="list">
              <li className="list__item">
                <div className="list__item-img">
                  <img src={power} alt="power"></img>
                </div>
                <div className="list__item-text">
                  <p>Не включается стиральная машина</p>
                </div>
              </li>
              <li className="list__item">
                <div className="list__item-img">
                  <img src={waterDrop} alt="waterDrop"></img>
                </div>
                <div className="list__item-text">
                  <p>Течет стиральная машина</p>
                </div>
              </li>
              <li className="list__item">
                <div className="list__item-img">
                  <img src={washingMachine1} alt="washingMachine2"></img>
                </div>
                <div className="list__item-text">
                  <p>Не открывается дверка</p>
                </div>
              </li>
              <li className="list__item">
                <div className="list__item-img">
                  <img src={washingMachine2} alt="washingMachine2"></img>
                </div>
                <div className="list__item-text">
                  <p>Не работает отжим в машинке</p>
                </div>
              </li>
              <li className="list__item">
                <div className="list__item-img">
                  <img src={warning} alt="warning"></img>
                </div>
                <div className="list__item-text">
                  <p>Не завершает процесс стирки</p>
                </div>
              </li>
            </ul>
            <div className="wrapper__img">
              <img src={defectsImg} alt="defectsImg" />
            </div>
          </div>
        </div>
      </section>

      <section className="excellence">
        <img
          className="excellence_img1"
          src={excellence_img1}
          alt="excellence_img1"
        />
        <img
          className="excellence_img2"
          src={excellence_img2}
          alt="excellence_img2"
        />
        <div className="container">
          <div className="offer">
            <p>не знаете что сломалось?</p>
            <a href="#">срочный вызов мастера на дом</a>
          </div>
          <p className="text">
            Качественно устраним любые поломки вашей стиральной машины
          </p>
          <div className="wrapper">
            <div className="plus">
              <ul className="list">
                <li className="list__item">Быстро</li>
                <li className="list__item">Дешево</li>
                <li className="list__item">Качественно</li>
              </ul>
              <div className="phone">
                <p>Прямой телефон</p>
                <a href="tel:+74957556983"> +7(495) 755 69 83 </a>
              </div>
            </div>
            <Request />
          </div>
        </div>
      </section>

      <section className="discount">
        <div className="container">
          <div className="wrapper">
            <p>не теряйте время и получите скидку 10%</p>
          </div>
          <p className="text">Мы работаем в Москве и в Московской области</p>
          <Request />
        </div>
      </section>
    </div>
  );
};

export { routeMain };
export default MainPage;
