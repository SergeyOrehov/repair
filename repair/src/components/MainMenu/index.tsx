import React from "react";

// nav
import { NavLink } from "react-router-dom";

// pages
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeServicesPage } from "pages/ServicesPage";
import { routeMain as routeGuaranteePage } from "pages/GuaranteePage";
import { routeMain as routeLegalPage } from "pages/LegalPage";
import { routeMain as routeContactsage } from "pages/ContactsPage";
import { routeMain as routeAnswersPage } from "pages/AnswersPage";
import { routeMain as routeInfoPage } from "pages/InfoPage";

import "./styles.scss";

const MainMenu = () => {
  return (
    <ul className="menu">
      <li>
        <NavLink to={routeMainPage}>Главная</NavLink>
      </li>
      <li>
        <NavLink to={routeServicesPage}>Услуги и цены</NavLink>
      </li>
      <li>
        <NavLink to={routeGuaranteePage}>Гарантия</NavLink>
      </li>
      <li>
        <NavLink to={routeLegalPage}>Юр.лица</NavLink>
      </li>
      <li>
        <NavLink to={routeContactsage}>Контакты</NavLink>
      </li>
      <li>
        <NavLink to={routeAnswersPage}>Вопрос-ответ</NavLink>
      </li>
      <li>
        <NavLink to={routeInfoPage}>Полезная информация</NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
