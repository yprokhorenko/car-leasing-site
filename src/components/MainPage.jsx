import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../sliderData";
import {
  WhyLeaseSectionData,
  howDoesSectionData,
  importantSectionData,
} from "../oneTwo.jsx";

import { Autoplay, Pagination, EffectFade } from "swiper";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { BackToTopButton } from "./additional-features/BackToTopButton";

const MainPage = () => {
  return (
    <>
      <section className="top">
        <div className="container">
          <h1 className="top__title">Leasing with us</h1>
          <a href="#" className="top__link">
            FIND A CAR
          </a>
        </div>
      </section>
      <div className="slider">
        <div className="swiper">
          <div className="swiper-wrapper">
            <Swiper
              navigation={true}
              className="mySwiper"
              pagination={{
                dynamicBullets: false,
                clickable: true,
              }}
              effect={"fade"}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, EffectFade]}
            >
              {sliderData.map((picture) => {
                const { id, url } = picture;
                return (
                  <SwiperSlide key={id}>
                    <div className="swiper-slide">
                      <div className="swiper-slide-overlay"></div>
                      <img src={url} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>

      <section className="why-lease">
        <div className="container">
          <h2 className="why-lease__title">Why Lease with D&M?</h2>

          <ul className="why-lease__list">
            {WhyLeaseSectionData.map((item) => {
              const { id, icon, title, description } = item;
              return (
                <li className="why-lease__item" key={id}>
                  <div className="why-lease__item-img">
                    <span className="">{icon}</span>
                  </div>
                  <h3 className="why-lease__item-title">{title}</h3>
                  <p className="why-lease__item-text">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="how-does">
        <div className="container">
          <div className="how-does__title">How Does Leasing Work?</div>
          <div className="how-does_desc">
            Leasing a vehicle is essentially entering into a long term rental
            agreement for that vehicle. Unlike a traditional car purchase, you
            don’t actually own the vehicle. Instead, a leasing company purchases
            the vehicle from the dealer on your behalf and then you make monthly
            payments to the leasing company for the duration of your lease. Some
            leases however, do provide the option to purchase the vehicle at the
            end of the lease.
          </div>
          <h3 className="details-title">
            Similar to a short term car rental, there are rules that define:
          </h3>
          <div className="how-does__details">
            {howDoesSectionData.map((item) => {
              const { id, desc } = item;
              return (
                <div className="how-does__detail" key={id}>
                  <span className="detail-number">{id}</span>
                  <span className="detail-desc__container">
                    <p className="detail-desc">{desc}</p>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="how-does_desc">
            Lease contracts are a commitment and ending them early can be
            difficult and expensive so it is important to consider your
            circumstances carefully before you decide.
          </div>
        </div>
      </section>

      <section className="vid-section">
        <div className="container">
          <h2 className="vid-section__title">WELCOME TO D&M LEASING</h2>
          <p className="vid-section__sub-title">
            Find out how easy it is to lease from D&M
          </p>
          <iframe
            className="main-video"
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/US05CFZ_JQI?controls=0"
            title="YouTube video player"
            frameborder="0"
          ></iframe>
        </div>
      </section>

      <section className="important">
        <div className="container">
          <h2 className="important__title">Important Things to Consider</h2>
          <p className="important__text">
            Depending on your circumstances and what is important to you, a
            lease could be a great option for your next vehicle. Below are some
            important factors that may influence your decision.
          </p>
          <ul className="important__list">
            {importantSectionData.map((item) => {
              const { id, image, desc } = item;
              return (
                <li className="important__item" key={id}>
                  <img
                  src={image}
                    alt="image"
                    className="important__item-img"
                  />
                  <p className="important__item-desc">{desc}</p>
                </li>
              );
            })}
          </ul>
          <BackToTopButton/>
        </div>
      </section>
    </>
  );
};

export default MainPage;
