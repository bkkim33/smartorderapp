import React, { useState } from "react";
import Layout from "../../../layout/AppDefaultLayout";
import MuiTooltip from "../../../components/MuiTooltip";
import TextToggle from "../../../components/TextToggle";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import OrderListCard from "./OrderListCard";
import Modal from "./CouponListModal";

const OrderListData = [
  {
    id: 1,
    image: require("../../../images/item.png"),
    product: "아메리카노",
    price: 3800,
    hoticed: "iced",
    option: "연하게",
    amount: 2,
  },
  {
    id: 2,
    image: require("../../../images/item01.png"),
    product: "카페라떼",
    price: 5200,
    hoticed: "hot",
    option: "진하게 (+500)",
    amount: 1,
  },
  {
    id: 3,
    image: require("../../../images/item01.png"),
    product: "바닐라라떼",
    price: 4700,
    hoticed: "iced",
    option: "기본",
    amount: 2,
  }
]
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
  const [isOpen, setIsOpen] = useState(true);
  const toggleHandler = () => {
    setIsOpen(!isOpen)
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <button className={`togglebtn ${isOpen ? "open" : ""}`} onClick={toggleHandler}>
              <i className="arrow"></i>
            </button>
          </div>
          {isOpen ? 
            <OrderListCard 
              data={OrderListData}
            />
          : 
            ""
          }          
        </div>
        <hr />
        <div className="inner">
          <div className="align start mb_20">
            <p className="headline4 mr_4">수령 방법을 선택해 주세요</p>
            <MuiTooltip
              iconSize={{ width: 16, height: 16, fill: "var(--c99)", }}
              placements="bottom-start"
              arrow
            >
              수령 방법 툴팁 텍스트
            </MuiTooltip>
          </div>
          <TextToggle          
            data={[
              {
                defaultActive: true,
                id: 1,
                option: null,
                title: '본인픽업'
              },
              {
                id: 2,
                option: null,
                title: '테이블수령'
              },
              {
                id: 3,
                option: null,
                title: '배달요청'
              }
            ]}
            type="linebox"
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
            <Button
              line
              size="small"
              onClick={handleOpen}
            >
              조회
            </Button>
          </div>
        </div>
        <hr />
        <div className="inner">
          <p className="headline4 mb_20">결제정보</p>

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
          <Checkbox>
            개인정보 수집 및 이용동의            
          </Checkbox>
          <Button            
            size="full"
            globalClass="mt_20"
            onClick={() => { }}
          >
            <p className="align gap_4">
              <span>총</span>
              <span>4,990<em>원</em></span>
              <span>결제하기</span>
            </p>
          </Button>
        </div>
      </div>
      <Modal open={open} handleClose={handleClose} data={CouponListData} />
    </Layout>
  );
}

export default PaymentPage;