import React , { useState } from "react";
import Layout from '../../../layout/AppDefaultLayout'
import { Icons } from "../../../components/Icon";
import { Button } from "../../../components/Button"
import { Checkbox } from "../../../components/Checkbox"
import { Count } from "../../../components/Count"

import Menuitem from "../../../images/item.png";

function CartPage({ isHotIce }) {

  return (
    <Layout>
      <div className="cartcontainer">
        <div className="location inner align">
          <div className="lft align start">
            <Icons.Location width={20} height={20} fill="#495EEC" />
            <p><b>클라우드카페 역삼점</b>의 메뉴입니다.</p>
          </div>
          <Button 
            onClick={() => {}} 
            size="xsmall" 
            btntype="change" 
            globalClass="rgt"
          >
            변경
          </Button>
        </div>  
        <hr />
        <div className="checkout inner align">
          <Checkbox className="selectall lft">전체 선택</Checkbox>
          <Button
            onClick={() => {}}
            none
            globalClass="rgt select"
            >
            선택삭제
          </Button>
        </div>
        <hr />
        <div className="shoppingcart inner">
          {/* 장바구니 내용 */}
          <div className="menucontainer align">
            <div className="align top start">
              <Checkbox>{""}</Checkbox>
              <div className="menuimg ml_10 mr_15">
                <div className="menuimg_img_box">
                  <img className="img" src={Menuitem} alt="Menu Item"/>
                </div>
              </div>
              <div className="menuitem">
                <p className="title mb_8">아메리카노</p>
                <p className="price mb_16">
                  3,800<span>원</span>
                </p>
                <div className="menudescription align">
                  <div className={isHotIce ? "hot" : "iced"}>ICED</div>
                  <span className="bar mlr_6" />
                  <div className="option">연하게</div>
                </div>
              </div>
            </div>
            <div className="menuright align column bottom">
              <Icons.Trash
                width={20}
                height={20}
                fill="var(--primary)"
                className="mb_20"
              />
              <Button 
                onClick={() => {}} 
                none 
                globalClass="pd_0 bottom"
                >
                옵션변경
              </Button>
            </div>
          </div>
          <div>
            <Count />
            <p>999,999,999원</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default CartPage;
