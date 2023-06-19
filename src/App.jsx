import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";
import "./App.scss";
import Preloader from "./components/additional-features/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div className="wrapper">
      <>
        <Header />
        <div className="wrapper-content">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </>
      )
    </div>
  );
};

export default App;
