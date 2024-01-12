import React from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Navigation, Pagination } from "swiper/modules";
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
    typetxt: "아메리카노한잔",
    imgtitle: "메가존 입사를 환영합니다.",
    imgtxt:
      "메가존 클라우드 카페 전용 쿠폰으로 \n 핫 또는 아이스 아메리카노를 즐길 수 있습니다.",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem01.png"),
    use: false,
    usename: "",
  },
  {
    id: 2,
    type: "Americano",
    typetxt: "아메리카노한잔",
    imgtitle: "방문해 주셔서 감사합니다.",
    imgtxt:
      "메가존 클라우드 카페 전용 쿠폰으로 \n 핫 또는 아이스 아메리카노를 즐길 수 있습니다.",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem01.png"),
    use: false,
    usename: "",
  },
  {
    id: 3,
    type: "Drink",
    typetxt: "음료한잔",
    imgtitle: "메가존 입사를 환영합니다.",
    imgtxt:
      "메가존 클라우드 카페 전용 쿠폰으로 \n 모든 음료를 즐길 수 있습니다.",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem02.png"),
    use: false,
    usename: "",
  },
  {
    id: 4,
    type: "Drink",
    typetxt: "음료한잔",
    imgtitle: "방문해 주셔서 감사합니다.",
    imgtxt:
      "메가존 클라우드 카페 전용 쿠폰으로 \n 모든 음료를 즐길 수 있습니다.",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem02.png"),
    use: false,
    usename: "",
  },
  {
    id: 5,
    type: "Drink",
    typetxt: "음료한잔",
    imgtitle: "메가존 입사를 환영합니다.",
    imgtxt:
      "메가존 클라우드 카페 전용 쿠폰으로 \n 모든 음료를 즐길 수 있습니다.",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem02.png"),
    use: true,
    usename: "사용완료",
  },
  {
    id: 2,
    type: "Americano",
    typetxt: "아메리카노한잔",
    imgtitle: "방문해 주셔서 감사합니다.",
    imgtxt:
      "메가존 클라우드 카페 전용 쿠폰으로 \n 핫 또는 아이스 아메리카노를 즐길 수 있습니다.",
    title: "입사환영쿠폰",
    issuer: "메가존.디지털",
    date: "무기한",
    image: require("../../../images/couponitem01.png"),
    use: true,
    usename: "기간만료",
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
        globalClass="coupon_tab"
      />
    </Layout>
  );
}
export default CouponPage;
