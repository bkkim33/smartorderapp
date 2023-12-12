import React from "react";

import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";

import { Icons } from "../../../components/Icon";

function OrderHistoryModal({ open, handleClose, data }) {
  const productprice = parseInt(data.price * data.productlength + data.density?.price);
  const productdiscount = data.discount ? data.discount?.reduce(
    (total, currentvalue) =>
      (total = total + parseInt(data.price * currentvalue.count * (currentvalue.percent / 100))),0
  ) : 0;
  const otherprice = data.other ? data.other?.reduce(
    (total, currentvalue) =>
      (total =
        total + parseInt(currentvalue.price * currentvalue.productlength)),0
  ) : 0;
  const otherdiscount = data.other
    ? data.other?.reduce(
        (total, currentvalue) =>
          (total =
            total +
            parseInt(
              currentvalue.price *
                currentvalue.discount?.reduce(
                  (total, currentvalue) =>
                    (total =
                      total +
                      parseInt(
                        currentvalue.count * (currentvalue.percent / 100)
                      )),
                  0
                )
            )),
        0
      )
    : 0;

  const pricesum = productprice + otherprice;
  const discountsum = productdiscount + otherdiscount;
  const Sum = pricesum - discountsum;
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
                fill: "var(--primary)",
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
          <div className="align">
            <p className="title3 color_t_99 ml_10">상세내역</p>
            <p className="title3 color_t_99 mr_10">금액</p>
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
                            {data.density?.price > 0 && (
                              <>(+{data.density?.price})</>
                            )}
                          </>
                        )}
                      </em>
                    </span>
                  </p>
                  <p className="body2">
                    {data.density?.price && (
                      <>
                        {(
                          data.price * data.productlength +
                          data.density?.price
                        ).toLocaleString()}
                      </>
                    )}
                    {!data.density?.price && (
                      <>{(data.price * data.productlength).toLocaleString()}</>
                    )}
                    원
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
                              {other.density?.price > 0 && (
                                <>(+{other.density?.price})</>
                              )}
                            </>
                          )}
                        </em>
                      </span>
                    </p>
                    <p className="body2">
                      {other.density?.price && (
                        <>
                          {(
                            other.price * other.productlength +
                            other.density?.price
                          ).toLocaleString()}
                        </>
                      )}
                      {!other.density?.price && (
                        <>
                          {(other.price * other.productlength).toLocaleString()}
                        </>
                      )}
                      원
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
                <ul className="receipt_list_sum_discount">
                  <li>
                    <p>
                      <strong className="body2 red">총 할인</strong>
                    </p>
                    <p className="body2 red">
                      -{discountsum.toLocaleString()}원
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <div className="receipt_list_sum mt_5">
                  <p>
                    <strong className="headline5">결제금액</strong>
                  </p>
                  <p className="headline5">{Sum.toLocaleString()}원</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="orderhistory_modal_toss mt_20 mb_40">
          <dl>
            <dt>판매자</dt>
            <dd>클라우드카페 역삼1호점</dd>
          </dl>
          <dl>
            <dt>카드번호</dt>
            <dd>12345678****123*</dd>
          </dl>
          <dl>
            <dt>결제수단</dt>
            <dd>하나카드</dd>
          </dl>
          <dl>
            <dt>할부개월</dt>
            <dd>일시불</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd>5,270원</dd>
          </dl>
          <dl>
            <dt>승인번호</dt>
            <dd>12345678</dd>
          </dl>
          <dl>
            <dt>승인일시</dt>
            <dd>2023-10-09 09:00:52</dd>
          </dl>
        </div>
      </MuiModal>
    </>
  );
}

export default OrderHistoryModal;
