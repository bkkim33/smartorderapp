import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import Layout from '../../../layout/AppDefaultLayout'
// import { Icons } from "../../../components/Icon";
import { Button } from "../../../components/Button"
import { Tabs } from "../../../components/Tabs";
// import { Checkbox } from "../../../components/Checkbox"
// import { Count } from "../../../components/Count"

// import Menuitem from "../../../images/item.png";

const CouponData = [
  {
    id: 1,
    type: "Americano",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem.png"),
    use: false,
  },
  {
    id: 2,
    type: "Americano",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem.png"),
    use: false,
  },
];

function CouponSwiper () {
  // const sliderRef = useRef(null);
  const swiperParams = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    className: "mySwiper",
    // ref: sliderRef,
    modules: [Navigation, Pagination],
  };
  return (
    <div className="pd_20">
      <>
        <Swiper {...swiperParams}>
          {CouponData.map((Coupon) => (
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
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </>
      {/* <div className="align mb_20">
        <SlidePrevButton />
        <SlideNextButton />
      </div> */}
    </div>
  );
  
}

function CouponPage() {
  return (
    <Layout Menu Back Title="쿠폰함">
      <hr />

      <Tabs
        TabsData={[
          {
            id: 1,
            title: "사용 가능한 쿠폰",
            defaultActive: true,
            content: (
              <>
                <CouponSwiper />
              </>
            ),
          },
          {
            id: 2,
            title: "쿠폰 히스토리",
            content: (
              <>
                {/* <FavoritesMenu /> */}
                사용리스트
              </>
            ),
          },
        ]}
        // globalClass="main_tab"
      />
    </Layout>
  );
}
export default CouponPage;
