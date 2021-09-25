import React from "react";
import Images from "../images/Images";
import Sidebar from "../sidebar/Sidebar";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="page">
      <div className="page__sidebar">
        <aside>
          <Sidebar />
        </aside>
      </div>
      <div className="page__content">
        <Images />
      </div>
    </div>
  );
};

export default MainPage;
