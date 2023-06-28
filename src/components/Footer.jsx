import React from "react";
import { array } from "../data.jsx";
import google from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import { copyright } from "../data.jsx";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__menu">
          {array.map((arr,index) => {
            const { titleMain, info } = arr;
            return (
              <ul key={index} className="footer__menu-list">
                <h3 className="footer__menu-title">{titleMain}</h3>
                {Object.values(info).map((item,index) => {
                  return (
                    <li className="footer__menu-item" key={index}>
                      <a className="footer__menu-link" href="#">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </nav>
        <ul className="app">
          <li className="app__item">
            <a className="app__item-link" href="#">
              <img className="app__item-img" src={google} alt="" />
            </a>
          </li>
          <li className="app__item">
            <a className="app__item-link" href="#">
              <img className="app__item-img" src={appStore} alt="" />
            </a>
          </li>
        </ul>
        <div className="footer__copy">
          <p className="footer__copy-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae rem consectetur, cum numquam ipsa omnis. Delectus obcaecati, alias ullam, molestias possimus dicta porro quia nemo nobis temporibus nulla ut facilis labore suscipit? Odio doloremque illo aut? Quidem eius porro iure. In, eius. Eos laudantium aut tempora aspernatur velit ut repudiandae!
          </p>
          <p className="footer__copy-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi
            reiciendis eligendi illo autem. Dicta?
          </p>
        </div>
        <nav className="copy__nav">
          <ul className="copy__nav-list">
            {copyright.map((item) => {
              const { id, title, link } = item;
              return (
                <li key={id} className="copy__nav-item">
                  <a href={link} className="copy__nav-link">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
