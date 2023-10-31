import React, { useState } from "react";
import Layout from "../../../layout/AppDefaultLayout";
import Menuimg from "../../../images/coffee_img.jpg";
import Button from "../../../components/Button";
import TextToggle from "../../../components/TextToggle";
import Count from "../../../components/Count";

function MenuDetailPage() {
  const [isOn, setIsOn] = useState(false);
  const toggleHandler = () => {
    setIsOn(!isOn)
  };

  return (
    <Layout Back Menu Cart Title="주문하기">
      <div className="order">
        <div className="order_visual">
          <img src={Menuimg} alt="커피 이미지" />
          {isOn ?
            <Button
              icon="LikeOff"
              none
              onClick={toggleHandler}
              size="icon_s"
            >
              즐겨찾기off
            </Button>
            :
            <Button
              icon="Like"
              none
              onClick={toggleHandler}
              size="icon_s"
            >
              즐겨찾기on
            </Button>
          }
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
            btntype="gray"
            size="full"
          >
            장바구니 담기
          </Button>
          <Button
            size="full"
          >
            구매하기
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default MenuDetailPage;