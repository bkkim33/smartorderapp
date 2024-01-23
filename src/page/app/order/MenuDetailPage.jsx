import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppDefaultLayout";
import Button from "../../../components/Button";
import TextToggle from "../../../components/TextToggle";
import Count from "../../../components/Count";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MenuSwiper from "./MenuSwiper";

const ProductData = [
  {
    id: 1,
    title: "바닐라라떼1",
    image: require("../../../images/item01.png"),
    sales: true,
    salesname: "",
  },
  {
    id: 2,
    title: "바닐라라떼2",
    image: require("../../../images/item01.png"),
    sales: false,
    salesname: "품절",
  },
  {
    id: 3,
    title: "바닐라라떼3",
    image: require("../../../images/item01.png"),
    sales: false,
    salesname: "판매중지",
  },
];

function MenuDetailPage({QR}) {
  const [isOn, setIsOn] = useState(false);
  const toggleHandler = () => {
    setIsOn(!isOn)
  };
  const navigate = useNavigate();

  return (
    <Layout Back Menu Cart Title="주문하기">
      <div className="order">
        <div className="order_visual">
          <MenuSwiper data={ProductData}/>
          {!QR && (
            <>
              {isOn ? (
                <Button icon="Like" none onClick={toggleHandler} size="icon_s">
                  즐겨찾기on
                </Button>
              ) : (
                <Button
                  icon="LikeOff"
                  none
                  onClick={toggleHandler}
                  size="icon_s"
                >
                  즐겨찾기off
                </Button>
              )}
            </>
          )}
        </div>
        <div className="align inner">
          <p className="headline2">바닐라라떼</p>
          <p className="item gap_1">
            <span className="headline2">4,300</span>
            <span className="headline5 pt_2">원</span>
          </p>
        </div>
        <hr />
        <div className="order_content">
          <div className="inner">
            <div className="pb_20">
              <p className="headline5 bold400 pb_17">HOT/ICE 선택</p>
              <TextToggle
                data={[
                  {
                    id: 1,
                    option: null,
                    title: "HOT",
                  },
                  {
                    id: 2,
                    option: null,
                    title: "ICED",
                    defaultActive: true,
                  },
                ]}
              />
            </div>
            <div className="pb_20">
              <p className="headline5 bold400 pb_17">농도 선택</p>
              <TextToggle
                data={[
                  {
                    id: 1,
                    option: null,
                    title: "기본 (2샷)",
                    defaultActive: true,
                  },
                  {
                    id: 2,
                    option: null,
                    title: "연하게 (1샷만)",
                  },
                  {
                    id: 3,
                    option: true,
                    title: "진하게 (1샷추가)",
                  },
                ]}
              />
            </div>
          </div>
          <hr />
          <div className="align inner pb_10 gap_9">
            <div className="lft">
              <Count />
            </div>
            <div className="rgt align">
              <p className="align gap_2 end">
                <span className="red_text headline1">999,999</span>
                <span className="red_text headline2">원</span>
              </p>
            </div>
          </div>
        </div>
        <div className="align inner gap_9">
          <Button 
            color="gray"
            size="full"
            txtColor="txtgray"
            onClick={() => {
              // navigate("/payment");
              document.querySelector(".order_floating").classList.add("show");
            }}
          >
            장바구니 담기
          </Button>
          <Button
            size="full"
            color="point"
            onClick={() => {
              navigate("/payment");
            }}
          >
            주문하기
          </Button>
        </div>
        <div className="order_floating inner">
          <div className="sign align mt_5 mb_24">
            <p className="">장바구니 추가 되었습니다.</p>
            <button 
              className="closebutton"
              onClick={() => {
                document.querySelector(".order_floating").classList.remove("show");
              }}
            >닫기</button>
          </div>
          <div className="align gap_9">
            <Button line size="full">
              장바구니 가기
            </Button>
            <Button
              line
              size="full"
              onClick={() => {
                navigate("/main");
              }}
            >
              다른메뉴 보기
            </Button>
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenuDetailPage;