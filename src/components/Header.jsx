import React from "react";
import { menuItems } from "../data";
import headerImg from "../assets/Header-img.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={`header ${isHomePage ? "header-main" : ""}`}>
      <div className="header-container">
        <div className="header-inner">
          <NavLink exact to="/" className="logo">
            <img className="logo-img" src={headerImg} alt="Logo" />
          </NavLink>
          <nav className="header-nav">
            <ul className="header-list">
              {menuItems.map((item) => {
                let { title, link, id } = item;
                return (
                  <li className="nav-item" key={id}>
                    <NavLink
                      exact
                      to={link}
                      className="nav-link"
                      activeClassName="active"
                    >
                      {title}
                    </NavLink>
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
