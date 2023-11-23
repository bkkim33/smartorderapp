import React from "react";
import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";

function OrderDetailModal({ open, handleClose }){
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      header={
        <>
          <h4>주문 상세내역</h4>
          <Button
            icon="Delete"
            none
            onClick={handleClose}
            size="icon_s"
            iconStyle={{
              fill: "var(--primary)",
            }}
          >
            Close
          </Button>
        </>
      }
    >      
    <div className="admin_orderhistory_modal_receipt">
      <div className="align">
        <p className="title3 color_t_99 ml_10">메뉴명 / 할인내역</p>
        <p className="title3 color_t_99 mr_10">금액</p>
      </div>
      <div className="receipt_bottom">
        <ul className="receipt_list">
          <li>
            <div className="receipt_list_product">
              <p>
                <strong className="body2">
                  아메리카노 2개
                </strong>
                <span className="mt_5 body2 ml_3">
                  <em>ICED</em>&nbsp;/&nbsp;
                  <em>연하게</em>
                </span>
              </p>
              <p className="body2"> 7,600원</p>
            </div>
            <ul className="receipt_list_discount">
              <li>
                <p className="body2">
                  <span>[쿠폰할인]</span>
                  <span className="ml_3">입사환영 아메리카노 1잔</span>
                </p>
                <p className="body2">-3,800원</p>
              </li>
              <li>
                <p className="body2">
                  <span>[임직원할인]</span>
                  <span className="ml_3">아메리카노 할인</span>
                </p>
                <p className="body2">-2,810원</p>
              </li>
            </ul>
          </li>
          <li>
            <div className="receipt_list_product">
              <p>
                <strong className="body2">
                  플레인요거트스무디 1개
                </strong>
                <span className="mt_5 body2 ml_3">
                  <em>ICED Only</em>
                </span>
              </p>
              <p className="body2">4,200원</p>
            </div>
            <ul className="receipt_list_discount">
              <li>
                <p className="body2">
                  <span>[할인]</span>
                  <span className="ml_3">입사쿠폰 모든음료1</span>
                </p>
                <p className="body2">-4,200원</p>
              </li>
            </ul>
          </li>
          <li>
            <div className="receipt_list_sum">
              <p>
                <strong className="body2">합계금액</strong>
              </p>
              <p className="body2">21,100원</p>
            </div>
            <ul className="receipt_list_sum_discount">
              <li>
                <p>
                  <strong className="body2 red">총 할인</strong>
                </p>
                <p className="body2 red">-16,820원</p>
              </li>
            </ul>
          </li>
          <li>
            <div className="receipt_list_sum mt_5">
              <p>
                <strong className="headline5">결제금액</strong>
              </p>
              <p className="headline5">4,280원</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </MuiModal>
  );
}

export default OrderDetailModal;