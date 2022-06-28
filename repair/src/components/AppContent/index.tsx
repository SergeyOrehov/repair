import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

// Pages

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import AnswersPage, { routeMain as routeAnswersPage } from "pages/AnswersPage";
import ContactsPage, { routeMain as routeContactsPage } from "pages/ContactsPage";
import GuaranteePage, { routeMain as routeGuaranteePage } from "pages/GuaranteePage";
import InfoPage, { routeMain as routeInfoPage } from "pages/InfoPage";
import LegalPage, { routeMain as routeLegalPage } from "pages/LegalPage";
import ServicesPage, { routeMain as routeServicesPage } from "pages/ServicesPage";

// Styles
import "./styles.scss";

const AppContent = () => {
   return (
      <div className='mainWrapper'>
         <Header />
         <main>
            <Switch>
               <Route exact path={routeMainPage()} component={MainPage} />
               <Route exact path={routeAnswersPage()} component={AnswersPage} />
               <Route exact path={routeContactsPage()} component={ContactsPage} />
               <Route exact path={routeGuaranteePage()} component={GuaranteePage} />
               <Route exact path={routeInfoPage()} component={InfoPage} />
               <Route exact path={routeLegalPage()} component={LegalPage} />
               <Route exact path={routeServicesPage()} component={ServicesPage} />
               <Redirect
                  to={{
                     pathname: routeMainPage(),
                  }}
               />
            </Switch>
         </main>
         <Footer />
      </div>
   );
};

export default AppContent;
