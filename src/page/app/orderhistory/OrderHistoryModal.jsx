import React, { useState } from "react";

import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";

import { Icons } from "../../../components/Icon";

function OrderHistoryModal({ open, handleClose, data }) {
  
  const density = data.density;
  console.log(density);
  return (
    <>
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
                fill: "var(--c99)",
              }}
            >
              Close
            </Button>
          </>
        }
      >
        <div className="orderhistory_modal_info">
          <i>
            <Icons.Logo width={"100%"} height={"100%"} />
          </i>
          <ul>
            <li>메가존</li>
            <li>
              <span>11-11111-1111111</span>
              <span>홍길동</span>
            </li>
            <li>010-0000-0000</li>
            <li>{data.locationname}</li>
          </ul>
        </div>
        <div className="orderhistory_modal_receipt">
          <div className="receipt_top mb_20 mt_5">
            <p className="headline5 mt_20">
              <span>주문번호</span>
              <span className="ml_5">{data.ordernum}</span>
            </p>
            <p className="mt_20">
              <span className="body3">{data.date}</span>
              <span className="body3 ml_4">{data.time}</span>
            </p>
          </div>
          <div className="receipt_bottom">
            <ul className="receipt_list">
              <li>
                <div className="receipt_list_product">
                  <p>
                    <strong className="body2">
                      {data.product} {data.productlength}개
                    </strong>
                    <span className="mt_5">
                      <em>{data.type}</em> / <em>{data.density?.opt}</em>
                    </span>
                  </p>
                  <p>{data.price * data.productlength}</p>
                </div>
                <ul className="receipt_list_discount">
                  {data.discount?.map((discount, index) => (
                    <li key={index}>
                      <p className="red">
                        <span>[할인]</span>
                        <span>
                          {discount.title}
                          {discount.count}
                        </span>
                      </p>
                      <p className="red">{discount.price}</p>
                    </li>
                  ))}
                </ul>
              </li>
              {data.other?.map((other, index) => (
                <li key={index}>
                  <div className="receipt_list_product">
                    <p>
                      <strong className="body2">
                        {other.product} {other.productlength}개
                      </strong>
                      <span className="mt_5">
                        <em>{other.type}</em> / <em>{other.density?.opt} (+{other.density?.price > 0 && other.density?.price})</em>
                      </span>
                    </p>
                    <p>{other.price * other.productlength}</p>
                  </div>
                  <ul className="receipt_list_discount">
                    {other.discount?.map((discount, index) => (
                      <li key={index}>
                        <p>
                          <span>[할인]</span>
                          <span>
                            {discount.title}
                            {discount.count}
                          </span>
                        </p>
                        <p>{discount.price}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MuiModal>
    </>
  );
}

export default OrderHistoryModal;
