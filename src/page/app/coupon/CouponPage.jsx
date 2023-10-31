import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import Layout from '../../../layout/AppDefaultLayout'
// import { Icons } from "../../../components/Icon";
// import { Button } from "../../../components/Button"
import { Tabs } from "../../../components/Tabs";
import CouponSwiper from "./CouponSwiper";
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
    use: true,
  },
  {
    id: 3,
    type: "Drink",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem.png"),
    use: true,
  },
  {
    id: 4,
    type: "Americano",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem.png"),
    use: false,
  },
  {
    id: 5,
    type: "Drink",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem.png"),
    use: false,
  },
];

const UnUse = CouponData.filter(
  (CouponData) => CouponData.use === false
);

const Use = CouponData.filter(
  (CouponData) => CouponData.use === true
);

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
                <CouponSwiper data={UnUse} />
              </>
            ),
          },
          {
            id: 2,
            title: "쿠폰 히스토리",
            content: (
              <>
                <CouponSwiper data={Use} />
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
