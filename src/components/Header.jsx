import React, {useState} from "react";
import { menuItems } from "../data";
import headerImg from "../assets/Header-img.png";
import { NavLink, useLocation } from "react-router-dom";
import { RiMenuLine } from "react-icons/Ri";
import ThemeToggle from "../components/additional-features/ThemeToggle";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); 

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className={`header ${isHomePage ? "header-main" : ""}`}>
      <div className="header-container">
      

        <div className="header-inner">
        <ThemeToggle/>

          <NavLink exact to="/" className="logo">
            <img className="logo-img" src={headerImg} alt="Logo" />
          </NavLink>
          <nav className="header-nav">
            <button onClick={() => setShowMenu(!showMenu)} className="menu-btn" style={{ display: "none" }}>
              <span className="menu-btn-icon"><RiMenuLine /></span>
            </button>
            <ul className={`header-list ${showMenu ? "header-list-active" : ""}`}>
              {menuItems.map((item) => {
                let { title, link, id } = item;
                return (
                  <li className="nav-item" key={id}>
                    <NavLink
                      exact
                      to={link}
                      className="nav-link"
                      activeClassName="active"
                      onClick={() => setShowMenu(!showMenu)}
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
