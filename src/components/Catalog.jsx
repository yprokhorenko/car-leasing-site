import React, { useState, useContext } from "react";
import  {carsCatalog}  from "../data";
import { ThemeContext } from "./additional-features/ThemeContext";


const brands = ["All", ...new Set(carsCatalog.map((item) => item.brand))];
console.log(brands);

const Catalog = () => {

  const [menuItems, setMenuItems] = useState(carsCatalog);
  
 

  const filterItems = (brand) => {
    if (brand === "All") {
      setMenuItems(carsCatalog);
      return;
    }
    const carsItem = carsCatalog.filter((car) => car.brand === brand);
    setMenuItems(carsItem);
  };

    
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`catalog ${theme}`} > 
      <div className="container">
        <div className="catalog__title">Choose your car</div>
        <div className="catalog__buttons">
          {brands.map((brand, index) => {
            return (
              <button
              key={index}
              className={`catalog__btn ${theme === "light" ? "light" : "dark"}`}
              onClick={() => filterItems(brand)}
              >
                {brand}
              </button>
            );
          })}
        </div>

        <ul className="catalog__cars">
          {menuItems.map((car) => {
            const {
              img,
              brand,
              model,
              paymentPerMonth,
              engine,
              horsepower,
              transmission,
              fuelConsumption,
            } = car;
            const carClassName =  theme ==="dark" ? "catalog__car dark-theme" : "catalog__car";

            return (
              <li className={carClassName} key={model}>
                <div className="car__img">
                  <img src={img} alt="model" className="car__img-link" />
                </div>
                <div className="car__info">
                  <p className="car__model">
                    {brand} {model}
                  </p>
                  <p className="car__price">${paymentPerMonth}/mo</p>
                  <span className="car__info-overlay">
                    <span>
                      <span>Engine:</span> <span>{engine}</span>
                    </span>
                    <span>
                      <span>Horsepower:</span>
                      <span>{horsepower}</span>
                    </span>
                    <span>
                      <span>Transmission:</span>
                      <span>{transmission}</span>
                    </span>
                    <span>
                      <span>Fuel Consumption:</span>
                      <span>{fuelConsumption}</span>
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
