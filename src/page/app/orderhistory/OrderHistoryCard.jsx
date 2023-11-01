import React, { useState } from "react";

import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";

function OrderHistoryCard({ Data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return Data.map((History) => (
    <>
      <div key={History.id} className="orderhistory_card">
        <div className="orderhistory_card_top">
          <div className="orderhistory_card_title">
            <p className="headline5 mr_8">주문완료</p>
            <p className="body3 mr_4">{History.date}</p>
            <p className="body3">{History.time}</p>
          </div>
          <div className="ml_10">
            <Button size="small" none onClick={handleOpen}>
              상세내역
            </Button>
          </div>
        </div>
        <div className="orderhistory_card_bottom">
          <div className="orderhistory_card_img mr_15">
            <img src={History.image} alt={History.product} />
          </div>
          <div>
            <p className="headline5">
              {History.product} {History.productlength}개{" "}
              {History.other === true ? "외" : ""}
            </p>
            <p className="mt_8 body2">{History.location}</p>
            <p className="mt_15 body0">{History.price.toLocaleString()}원</p>
          </div>
        </div>
      </div>
      <MuiModal
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>쿠폰 생성</h4>
            <Button
              icon="Delete"
              none
              onClick={handleClose}
              size="icon_s"
              iconStyle={{
                fill: "var(--c99)",
              }}
            >
              Close
            </Button>
          </>
        }
      >
        <div className="align top">
          <div className="lft" style={{ flex: 1 }}>
            <div style={{ width: "100%" }}>
              <h5 className="title3 mb_15">쿠폰 상세 내용</h5>
            </div>
          </div>
          <div className="rgt" style={{ width: 400, marginLeft: 15 }}>
            <div>
              <h5 className="title3 ">쿠폰 미리보기</h5>
              <p className="body2 mb_15 mt_10">
                고객에게 실제 보여지는 쿠폰 이미지 입니다.
              </p>
              <div style={{}}></div>
            </div>
          </div>
        </div>
      </MuiModal>
    </>
  ));
}

export default OrderHistoryCard;
