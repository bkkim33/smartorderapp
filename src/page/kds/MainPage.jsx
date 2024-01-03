import React from "react";
import Layout from '../../layout/KDSDefaultLayout'
import ContentBox from "../../layout/ContentBox";
import MenuSwiper from "./MenuSwiper";

const OrderData = [
  {
    id: "D011",
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
        product: "배도라지모과차",
        opt: "HOT",
        detopt: "",
        num: 2,
      },
      {
        product: "한라봉 스무디",
        opt: "",
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
        opt: "",
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
    id: "P012",
    ordertime: "08:34:37",
    ProductData: [
      {
        product: "아메리카노",
        opt: "ICE",
        detopt: "",
        num: 2,
      },
      {
        product: "배도라지모과차",
        opt: "HOT",
        detopt: "",
        num: 1,
      },
      {
        product: "블루베리 요거트 스무디",
        opt: "",
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
    id: "S013",
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
    id: "S013",
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
    id: "S013",
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
    <Layout>
      <ContentBox top>
        <ul>
          <li>
            <span>1</span>
            <div>ice</div>
            <div>
              <p>아메리카노</p>
              <span>
                <em>9</em>잔
              </span>
            </div>
          </li>
          <li>
            <span>1</span>
            <div>ice</div>
            <div>
              <p>아메리카노</p>
              <span>
                <em>9</em>잔
              </span>
            </div>
          </li>
          <li>
            <span>1</span>
            <div>ice</div>
            <div>
              <p>아메리카노</p>
              <span>
                <em>9</em>잔
              </span>
            </div>
          </li>
          <li>
            <span>1</span>
            <div>ice</div>
            <div>
              <p>아메리카노</p>
              <span>
                <em>9</em>잔
              </span>
            </div>
          </li>
        </ul>
      </ContentBox>
      <ContentBox>
        <MenuSwiper data={OrderData} />
      </ContentBox>
    </Layout>
  );
}

export default MainPage;
