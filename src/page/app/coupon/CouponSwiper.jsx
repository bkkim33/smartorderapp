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
    className: "couponswiper",
    // ref: sliderRef,
    modules: [Navigation, Pagination],
  };
  return (
    <div className="coupon_slidecard_box">
      <div className="align end mb_15">
        <p className="coupon_slidecard_info">
          <em>{countSlide}</em> / <span>{data.length}</span>
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
              <div className="coupon_slidecard">
                <div
                  className={`${"coupon_slidecard_img"} ${
                    Coupon.use === true ? "dimd" : ""
                  }`}
                >
                  {Coupon.use === true && <p>{Coupon.usename}</p>}
                  <img
                    src={Coupon.image}
                    alt={Coupon.title}
                    // className={`${styles.img}`}
                  />
                </div>
                <div className="coupon_slidecard_txt">
                  <dl>
                    <dt>쿠폰명</dt>
                    <dd className="ml_15">{Coupon.title}</dd>
                  </dl>
                  <dl>
                    <dt>발급처</dt>
                    <dd className="ml_15">{Coupon.issuer}</dd>
                  </dl>
                  <dl>
                    <dt>유효기간</dt>
                    <dd className="ml_15">{Coupon.date}</dd>
                  </dl>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div
            className={`${"swiper-pagination"} ${
              data[0].use === true ? "use" : "unuse"
            }`}
          ></div>
        </Swiper>

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
