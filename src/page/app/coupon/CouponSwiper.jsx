import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";


function CouponSwiper ({data}) {
  const [countSlide, setCountSlide] = useState('1');
  const swiperParams = {
    pagination: {
      el: `${".swiper-pagination"}${data[0].use === true ? ".use" : ".unuse"}`,
      clickable: true,
    },
    navigation: {
      nextEl: `${".swiper-button-next"}${
        data[0].use === true ? ".use" : ".unuse"
      }`,
      prevEl: `${".swiper-button-prev"}${
        data[0].use === true ? ".use" : ".unuse"
      }`,
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    // className: "mySwiper",
    // ref: sliderRef,
    modules: [Navigation, Pagination],
  };
  return (
    <div className="pd_20">
      <div className="align end">
        <p>
          <em>{countSlide}</em> / {data.length}
        </p>
      </div>
      <>
        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => setCountSlide(swiper.activeIndex + 1)}
          {...swiperParams}
        >
          {data.map((Coupon) => (
            <SwiperSlide key={Coupon.id}>
              <div>
                <img
                  src={Coupon.image}
                  alt={Coupon.title}
                  // className={`${styles.img}`}
                />
                <div>
                  <dl>
                    <dt>쿠폰명</dt>
                    <dd>{Coupon.title}</dd>
                  </dl>
                  <dl>
                    <dt>발급처</dt>
                    <dd>{Coupon.issuer}</dd>
                  </dl>
                  <dl>
                    <dt>유효기간</dt>
                    <dd>{Coupon.date}</dd>
                  </dl>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`${"swiper-pagination"} ${
            data[0].use === true ? "use" : "unuse"
          }`}
        ></div>

        <div
          className={`${"swiper-button-next"} ${
            data[0].use === true ? "use" : "unuse"
          }`}
        ></div>
        <div
          className={`${"swiper-button-prev"} ${
            data[0].use === true ? "use" : "unuse"
          }`}
        ></div>
      </>
    </div>
  );
  
}

export default CouponSwiper;
