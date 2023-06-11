import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../sliderData";
import { Autoplay, Pagination } from "swiper";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
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
    </>
  );
};

export default MainPage;
