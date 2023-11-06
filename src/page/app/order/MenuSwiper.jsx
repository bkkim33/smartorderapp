import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import Menuimg from "../../../images/coffee_img.png";

function MenuSwiper() {
  const swiperParams = {
    pagination: {
      el: `${".swiper-pagination"}`,
      clickable: true,
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    modules: [Pagination],
  };
  return (
    <Swiper
      {...swiperParams}
    >
      <SwiperSlide>
        <img src={Menuimg} alt="커피 이미지" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Menuimg} alt="커피 이미지" />
      </SwiperSlide>
      <div className={`${"swiper-pagination"} ${"menudetail"}`}></div>
    </Swiper>
  );

}

export default MenuSwiper;