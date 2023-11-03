import React, { useState } from "react";

import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";

import { Icons } from "../../../components/Icon";

function OrderHistoryModal({ open, handleClose, data }) {
  const productprice = parseInt(data.price * data.productlength);
  const otherprice = [data.other?.map((other) =>
    parseInt(other.price * other.productlength),
  )]; 
  
  console.log(otherprice);
  // const otherpricesum = parseInt(+otherprice);
  const otherpricesum = otherprice.reduce((a, b, i) => {
    console.log(a, b, i);
    return parseInt(a + b);
  }, 0);
  console.log(otherpricesum);
  const pricesum = productprice + otherpricesum;
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
            <i className="bg_icon">
              <Icons.LogoIcon />
            </i>
            <ul className="receipt_list">
              <li>
                <div className="receipt_list_product">
                  <p>
                    <strong className="body2">
                      {data.product} {data.productlength}개
                    </strong>
                    <span className="mt_5 body2">
                      <em>{data.type} </em>
                      <em>
                        {data.density && (
                          <>
                            / {data.density?.opt}
                            (+
                            {data.density?.price > 0 && data.density?.price})
                          </>
                        )}
                      </em>
                    </span>
                  </p>
                  <p className="body2">
                    {(data.price * data.productlength).toLocaleString()}원
                  </p>
                </div>
                <ul className="receipt_list_discount">
                  {data.discount?.map((discount, index) => (
                    <li key={index}>
                      <p className="body2">
                        <span>[할인]</span>
                        <span>
                          {discount.title}
                          {discount.count}
                        </span>
                      </p>
                      <p className="body2">
                        -
                        {Math.round(
                          data.price * discount.count * (discount.percent / 100)
                        ).toLocaleString()}
                        원
                      </p>
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
                      <span className="mt_5 body2">
                        <em>{other.type}</em>
                        <em>
                          {other.density && (
                            <>
                              / {other.density?.opt}
                              (+
                              {other.density?.price > 0 && other.density?.price}
                              )
                            </>
                          )}
                        </em>
                      </span>
                    </p>
                    <p className="body2">
                      {(other.price * other.productlength).toLocaleString()}원
                    </p>
                  </div>
                  <ul className="receipt_list_discount">
                    {other.discount?.map((discount, index) => (
                      <li key={index}>
                        <p className="body2">
                          <span>[할인]</span>
                          <span>
                            {discount.title}
                            {discount.count}
                          </span>
                        </p>
                        <p className="body2">
                          -
                          {Math.round(
                            other.price *
                              discount.count *
                              (discount.percent / 100)
                          ).toLocaleString()}
                          원
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <div className="receipt_list_sum">
                  <p>
                    <strong className="body2">합계금액</strong>
                  </p>
                  <p className="body2">{pricesum.toLocaleString()}원</p>
                </div>
              </li>
              <li>
                <div className="receipt_list_sum">
                  <p>
                    <strong className="body2 red">총 할인</strong>
                  </p>
                  {/* <p className="body2 red">{Sum}</p> */}
                </div>
              </li>
              <li>
                <div className="receipt_list_sum mt_5">
                  <p>
                    <strong className="headline5">합계금액</strong>
                  </p>
                  {/* <p className="headline5">{Sum}</p> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </MuiModal>
    </>
  );
}

export default OrderHistoryModal;
