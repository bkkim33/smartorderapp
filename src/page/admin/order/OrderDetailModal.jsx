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
      <div className="admin_order">
        <div className="admin_order_title">
          <p>메뉴명 / 할인내역</p>
          <p>금액</p>
        </div>
        <ul>
          <li>
            <div className="order_list_product">
              <p>
                <strong className="body2">아메리카노</strong>
                <span className="mt_5 body2">
                  <em>ICED</em> /
                  <em>연하게</em>
                </span>
              </p>
              <p className="body2">
                7,600원
              </p>
            </div>
            <ul className="order_list_discount">
              <li>
                <p className="body2">
                  <span>[쿠폰할인]</span>
                  <span>입사환영 아메리카노 1잔</span>
                </p>
                <p className="body2">- 3,800원</p>
              </li>
              <li>
                <p className="body2">
                  <span>[임직원할인]</span>
                  <span>아메리카노 할인</span>
                </p>
                <p className="body2">- 2,810원</p>
              </li>
            </ul>
          </li>
          <li>
            <div className="order_list_product">
              <p>
                <strong className="body2">아메리카노</strong>
                <span className="mt_5 body2">
                  <em>HOT</em> /
                  <em>진하게</em>
                </span>
              </p>
              <p className="body2">4,100원</p>
            </div>
            <ul className="admin_order_discount">
              <li>
                <p className="body2">
                  <span>[임직원할인]</span>
                  <span>아메리카노 할인</span>
                </p>
                <p className="body2">- 2,810원</p>
              </li>              
            </ul>
          </li>
          <li>
            <div className="admin_order_sum">
              <p><strong className="body2">합계금액</strong></p>
              <p className="body2">21,100원</p>
            </div>
            <ul className="admin_order_sum_discount">
              <li>
                <p><strong className="body2 red">총 할인</strong></p>
                <p className="body2 red">-16,820원</p>
              </li>
            </ul>
          </li>
          <li>
            <div className="admin_order_sum mt_5">
              <p><strong className="headline5">합계금액</strong></p>
              <p className="headline5">4,280원</p>
            </div>
          </li>
        </ul>
      </div>
      
      
    </MuiModal>
  );
}

export default OrderDetailModal;