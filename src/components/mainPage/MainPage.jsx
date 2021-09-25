import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Images from "../images/Images";
import Sidebar from "../sidebar/Sidebar";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="page">
      <div className="page__sidebar">
        <div className="page__sidebar__items">
          <aside>
            <Sidebar />
          </aside>
        </div>
      </div>
      <div className="page__content">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Images />
            </Route>
            <Route path="/cats/:page/:id">
              <Images />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default MainPage;
