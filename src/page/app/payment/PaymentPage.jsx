import React, { useState } from "react";
import Layout from "../../../layout/AppDefaultLayout";
import MuiTooltip from "../../../components/MuiTooltip";
import Tabs from "../../../components/Tabs";
import TextToggle from "../../../components/TextToggle";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import OrderListCard from "./OrderListCard";
import CouponListModal from "./CouponListModal";
import PayAlert from "./PayAlert";


const OrderListData = [
  {
    id: 1,
    image: require("../../../images/item.png"),
    product: "아메리카노",
    price: 3800,
    hoticed: "iced",
    density: {
      opt: "연하게",
      price: 0,
    },
    amount: 2,
    discount: [
      {
        title: "입사쿠폰 아메리카노",
        percent: 100,
        count: 1,
      },
      {
        title: "임직원가 적용",
        percent: 73.95,
        count: 1,
      },
    ],
  },
  {
    id: 2,
    image: require("../../../images/item01.png"),
    product: "카페라떼",
    price: 5200,
    hoticed: "hot",
    option: "진하게",
    amount: 1,
    density: {
      opt: "진하게",
      price: 500,
    },
    discount: [
      {
        title: "입사쿠폰 모든음료",
        percent: 100,
        count: 1,
      },
    ],
  },
  {
    id: 3,
    image: require("../../../images/item01.png"),
    product: "바닐라라떼",
    price: 4700,
    hoticed: "iced",
    density: {
      opt: "기본",
      price: 0,
    },
    amount: 2,
    discount: [
      {
        title: "임직원가 적용",
        percent: 73.95,
        count: 2,
      },
    ],
  },
];
const CouponListData = [
  {
    id: 1,
    image: require("../../../images/item.png"),
    issuer: "MEGAZONE",
    title: "방문자 환영 쿠폰 아메리카노 1잔",
    date: "2023.10.31",
  },
  {
    id: 2,
    image: require("../../../images/item.png"),
    issuer: "MEGAZONE",
    title: "방문자 환영 쿠폰 아메리카노 1잔",
    date: "2023.10.31",
  },
  {
    id: 3,
    image: require("../../../images/item.png"),
    issuer: "MEGAZONE",
    title: "방문자 환영 쿠폰 아메리카노 1잔",
    date: "2023.10.31"
  },
]

function PaymentPage() {
  
  const [menuOn, setMenuOn] = useState(true);
  const menuToggle = () => {
    setMenuOn(!menuOn);
  }
  const [discountOn, setDiscountOn] = useState(true);
  const discountToggle = () => {
    setDiscountOn(!discountOn);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [AlertOpen, setalertOpen] = useState(false);
  const AlerthandleOpen = () => {
    setalertOpen(true);
  };
  const AlerthandleClose = () => {
    setalertOpen(false);
  };

  const pricesum = OrderListData.reduce(
    (total, currentvalue) =>
      (total = total + parseInt(currentvalue.price * currentvalue.amount)),
    0
  );
  return (
    <Layout Back Title="결제하기">
      <div className="payment">
        <div className="inner">
          <p className="headline4 mb_20">주문매장</p>
          <p className="bold500 body0">클라우드카페 역삼점(역삼1호점)</p>
        </div>
        <hr />
        <div className="inner">
          <div className="align">
            <p className="headline4">주문메뉴</p>
            <button
              className={`togglebtn ${menuOn ? "open" : ""}`}
              onClick={menuToggle}
            >
              <i className="arrow"></i>
            </button>
          </div>
          {menuOn ? <OrderListCard data={OrderListData} /> : ""}
        </div>
        <hr />
        <div className="inner">
          <div className="align start mb_20">
            <p className="headline4 mr_4">수령 방법을 선택해 주세요</p>
            <MuiTooltip
              iconSize={{ width: 16, height: 16, fill: "var(--c99)" }}
              placements="bottom-start"
              arrow
            >
              <dl>
                <dt className="bold500">[본인 픽업]</dt>
                <dd className="mt_8">카운터에서 직접 수령합니다.</dd>
              </dl>
              <dl className="mt_16">
                <dt className="bold500">[테이블 수령]</dt>
                <dd className="mt_8">입력하신 테이블로 서빙해 드립니다.</dd>
              </dl>
              <dl className="mt_16">
                <dt className="bold500">[배달 요청]</dt>
                <dd className="mt_8">- 입력해 주신 곳으로 배달해 드립니다.</dd>
                <dd className="mt_5">- 건물 외부로 배달은 불가합니다.</dd>
              </dl>
            </MuiTooltip>
          </div>
          {/* <TextToggle
            data={[
              {
                defaultActive: true,
                id: 1,
                option: null,
                title: "본인픽업",
              },
              {
                id: 2,
                option: null,
                title: "테이블수령",
              },
              {
                id: 3,
                option: null,
                title: "배달요청",
              },
            ]}
            type="linebox"
          /> */}
          <Tabs
            type="linebox"
            TabsData={[
              {
                id: 0,
                title: "본인픽업",
                defaultActive: true,
                content: <></>,
              },
              {
                id: 1,
                title: "테이블수령",
                content: (
                  <div style={{ width: "100%" }}>
                    <div className="align gap_10 mt_15">
                      <Input
                        height="large"
                        defaultValue=""
                        placeholder="테이블 번호를 입력해 주세요."
                      />
                      <Button
                        size="large"
                        color="black"
                        line
                        onClick={() => {}}
                      >
                        입력
                      </Button>
                    </div>
                    <p className="mt_10 body1">
                      <strong>23</strong>번 테이블로 서빙해 드립니다.
                    </p>
                  </div>
                ),
              },
              {
                id: 2,
                title: "배달요청",
                content: (
                  <div style={{ width: "100%" }}>
                    <div className="align gap_10 mt_15">
                      <Input
                        height="large"
                        defaultValue=""
                        placeholder="배달 위치를 입력해 주세요."
                      />
                      <Button
                        size="large"
                        color="black"
                        line
                        onClick={() => {}}
                      >
                        입력
                      </Button>
                    </div>
                    <p className="mt_10 body1">
                      <strong>5층 CX 운영팀</strong>으로 배달해 드립니다.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <hr />
        <div className="inner">
          <p className="headline4 mb_20">쿠폰사용</p>
          <div className="align coupon gap_10">
            <Input
              height="large"
              defaultValue=""
              placeholder="쿠폰을 선택해 주세요."
              readonly
            />
            <Button size="large" color="black" line onClick={handleOpen}>
              조회
            </Button>
          </div>
        </div>
        <hr />
        <div className="inner payment_info">
          <p className="headline4 mb_20">결제정보</p>
          <ul className="payment_info_list">
            <li className="align mb_20">
              <p>메뉴금액</p>
              <p>
                <span>{pricesum.toLocaleString()}</span>원
              </p>
            </li>
            <li>
              <div className="align mb_14">
                <p className="align start red_text">
                  할인금액
                  <button
                    className={`togglebtn ml_4 ${discountOn ? "open" : ""}`}
                    onClick={discountToggle}
                  >
                    <i className="arrow red"></i>
                  </button>
                </p>
                <p className="align end red_text">
                  <span>- 17,210</span> 원
                </p>
              </div>
              {discountOn ? (
                <ul className="discount">
                  <li>
                    <p className="red_text">쿠폰할인</p>
                    <p className="red_text">
                      <span>9,000</span>원
                    </p>
                  </li>
                  <li className="detail">
                    <p>[입사환영] 아메리카노 1잔</p>
                    <p>
                      <span>3,800</span> 원
                    </p>
                  </li>
                  <li className="detail">
                    <p>[입사환영] 모든음료 1잔</p>
                    <p>
                      <span>5,200</span> 원
                    </p>
                  </li>
                  <li>
                    <p className="red_text">임직원할인</p>
                    <p className="red_text">
                      <span>8,210</span> 원
                    </p>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
          </ul>
          <div className="payment_info_total align">
            <p className="headline3">총 결제금액</p>
            <p className="red_text headline1">
              <span className="pr_2">4,990</span>원
            </p>
          </div>
        </div>
        <hr />
        <div className="inner">
          <p className="headline4 mb_20">유의사항</p>
          <ul className="bullet_list gray">
            <li>유의사항 영역입니다.</li>
            <li>유의사항 영역입니다.</li>
            <li>유의사항 영역입니다.</li>
          </ul>
        </div>
        <hr />
        <div className="inner">
          <Checkbox txt={"개인정보 수집 및 이용동의"} />
          <Button
            color="point"
            size="full"
            globalClass="mt_20"
            onClick={AlerthandleOpen}
          >
            <p className="align gap_4">
              <span>총</span>
              <span>
                4,990<em>원</em>
              </span>
              <span>결제하기</span>
            </p>
          </Button>
        </div>
      </div>
      <CouponListModal
        open={open}
        handleClose={handleClose}
        data={CouponListData}
      />
      <PayAlert open={AlertOpen} handleClose={AlerthandleClose} />
    </Layout>
  );
}

export default PaymentPage;