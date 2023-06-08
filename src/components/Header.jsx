import React from "react";
import { menuItems } from "../header-nav-data.js";
import headerImg from "../assets/Header-img.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <a className="logo" href="#">
            <img src={headerImg} alt="Logo" />
          </a>
          <nav className="header-nav">
            <ul className="header-list">
              {menuItems.map((item) => {
                let { title, link, id } = item;
                return (
                  <li className="nav-item" key={id}>
                    <a href={link} className="nav-link">
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
