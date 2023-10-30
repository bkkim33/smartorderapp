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

function CouponSwiper () {
  const sliderRef = useRef(null);
  function SlideNextButton() {
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    return (
      <Button
        icon="Cup"
        iconStyle={{
          fill: "#000000",
          width: 24,
        }}
        none
        badge
        onClick={handleNext}
        size="icon_s"
        globalClass="pd_0"
      >
        장바구니 이동
      </Button>
    );
  }
  function SlidePrevButton() {
    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);

    return (
      <Button
        icon="Cup"
        iconStyle={{
          fill: "#000000",
          width: 24,
        }}
        none
        badge
        onClick={handlePrev}
        size="icon_s"
        globalClass="pd_0"
      >
        장바구니 이동
      </Button>
    );
  }
  const swiperParams = {
    pagination: {
      type: "fraction",
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    className: "mySwiper",
    ref: sliderRef,
    modules: [Navigation, Pagination],
  };
  return (
    <div className="pd_20">
    <div className="align end">
      <p>보유한 쿠폰 통 10장</p>
    </div>
      <>
        <Swiper
          {...swiperParams}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
      <div className="align mb_20">
        <SlidePrevButton />
        <SlideNextButton />
      </div>
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
