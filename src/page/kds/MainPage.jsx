import React from "react";
import Layout from '../../layout/KDSDefaultLayout'
import KDSContentBox from "../../layout/KDSContentBox";
import MenuSwiper from "./MenuSwiper";

const TopOrderData = [
  {
    product: "아메리카노",
    opt: "ICE",
    num: 9999,
  },
  {
    product: "배도라지 모과차",
    opt: "HOT",
    num: 10,
  },
  {
    product: "블루베리 요거트 스무디",
    opt: "ETC",
    num: 9,
  },
  {
    product: "바닐라라떼",
    opt: "HOT",
    num: 3,
  },
];

const OrderData = [
  {
    id: "011",
    pickup: "D",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "진하게",
        num: 4,
      },
      {
        product: "아메리카노",
        opt: "HOT",
        detopt: "연하게",
        num: 1,
      },
      {
        product: "배도라지 모과차",
        opt: "HOT",
        detopt: "",
        num: 2,
      },
      {
        product: "한라봉 스무디",
        opt: "ETC",
        detopt: "",
        num: 1,
      },
      {
        product: "바닐라라떼",
        opt: "ICE",
        detopt: "",
        num: 2,
      },
      {
        product: "캐모마일티",
        opt: "HOT",
        detopt: "",
        num: 1,
      },
      {
        product: "딸기 요거트 스무디",
        opt: "ETC",
        detopt: "",
        num: 1,
      },
      {
        product: "초코라떼",
        opt: "ICE",
        detopt: "",
        num: 1,
      },
      {
        product: "녹차라떼",
        opt: "ICE",
        detopt: "",
        num: 1,
      },
    ],
  },
  {
    id: "012",
    pickup: "P",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "",
        num: 2,
      },
      {
        product: "배도라지 모과차",
        opt: "HOT",
        detopt: "",
        num: 1,
      },
      {
        product: "블루베리 요거트 스무디",
        opt: "ETC",
        detopt: "",
        num: 1,
      },
      {
        product: "바닐라라떼",
        opt: "HOT",
        detopt: "",
        num: 1,
      },
      {
        product: "유자차",
        opt: "HOT",
        detopt: "",
        num: 1,
      },
    ],
  },
  {
    id: "013",
    pickup: "S",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "진하게",
        num: 4,
      },
      {
        product: "아메리카노",
        opt: "HOT",
        detopt: "연하게",
        num: 1,
      },
    ],
  },
  {
    id: "013",
    pickup: "S",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "진하게",
        num: 4,
      },
      {
        product: "아메리카노",
        opt: "HOT",
        detopt: "연하게",
        num: 1,
      },
    ],
  },
  {
    id: "013",
    pickup: "S",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "진하게",
        num: 4,
      },
      {
        product: "아메리카노",
        opt: "HOT",
        detopt: "연하게",
        num: 1,
      },
    ],
  },
  {
    id: "013",
    pickup: "S",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "진하게",
        num: 4,
      },
      {
        product: "아메리카노",
        opt: "HOT",
        detopt: "연하게",
        num: 1,
      },
    ],
  },
  {
    id: "013",
    pickup: "S",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "진하게",
        num: 4,
      },
      {
        product: "아메리카노",
        opt: "HOT",
        detopt: "연하게",
        num: 1,
      },
    ],
  },
];
   
function MainPage() {
  return (
    <Layout pdnone>
      <KDSContentBox top>
        <ul className="kds_main_top">
          {TopOrderData.map((toporder, index) => (
            <li key={index}>
              <div className="kds_main_list">
                <span className="kds_main_opt mr_15">{toporder.opt}</span>
                <span className="kds_main_product">{toporder.product}</span>
                <span
                  className={`${"kds_main_num ml_20"} ${
                    toporder.opt === "ICE" ? "blue" : ""
                  }  ${toporder.opt === "HOT" ? "red" : ""}`}
                >
                  <em>{toporder.num}</em>잔
                </span>
              </div>
            </li>
          ))}
        </ul>
      </KDSContentBox>
      <KDSContentBox bottom>
        <MenuSwiper data={OrderData} />
      </KDSContentBox>
    </Layout>
  );
}

export default MainPage;
