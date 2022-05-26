import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import "./styles.scss";

const AppContent = () => {
   return (
      <div className='mainWrapper'>
         <Header />
         <main> Hello</main>
         <Footer />
      </div>
   );
};

export default AppContent;
