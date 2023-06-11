import React from "react";
import { Route, Routes } from "react-router-dom";
import  MainPage  from "./components/MainPage";
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  Catalog  from "./components/Catalog";
import  Contacts  from "./components/Contacts";
import "./App.scss";

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <div className="wrapper-content">
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/contacts" element={<Contacts/>} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
};
export default App;
