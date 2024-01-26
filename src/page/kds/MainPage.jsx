import React from "react";
import Layout from '../../layout/KDSDefaultLayout'
import KDSContentBox from "../../layout/KDSContentBox";
import { Icons } from "../../components/Icon";
import MenuSwiper from "./MenuSwiper";
import Nodata from "./NoOrder";

const TopOrderData = [
  {
    product: "아메리카노",
    opt: "ICE",
    num: 99,
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
   

// const OrderData = []


function MainPage() {
  return (
    <>
      <Layout pdnone={OrderData?.length > 0}>
        {OrderData?.length > 0 ? (
          <>
            <KDSContentBox top>
              <ul className="kds_main_top">
                {TopOrderData.map((toporder, index) => (
                  <li key={index}>
                    <div className="kds_main_list">
                      <div
                        className={`${"kds_main_opt mr_15"} ${
                          toporder.opt === "ICE" ? "ice" : ""
                        }  ${toporder.opt === "HOT" ? "hot" : ""}`}
                      >
                        <div className="kds_main_opt_txt">
                          <span>{toporder.opt}</span>
                          <span className="num mt_3">
                            <em>{toporder.num}</em>
                          </span>
                        </div>
                        <div className="kds_main_opt_bg">
                          {toporder.opt === "ICE" && (
                            <Icons.KDSOrder fill="#F2F4FF" stroke="#D9DEFF" />
                          )}
                          {toporder.opt === "HOT" && (
                            <Icons.KDSOrder fill="#FFF2F2" stroke="#FFD9D9" />
                          )}
                          {toporder.opt !== "ICE" && toporder.opt !== "HOT" && (
                            <Icons.KDSOrder fill="#F5F6F7" stroke="#C5C9CD" />
                          )}
                        </div>
                      </div>
                      <span className="kds_main_product">
                        {toporder.product}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </KDSContentBox>
            <KDSContentBox bottom>
              <MenuSwiper data={OrderData} />
            </KDSContentBox>
          </>
        ) : (
          <Nodata />
        )}
      </Layout>
    </>
  );
}

export default MainPage;
