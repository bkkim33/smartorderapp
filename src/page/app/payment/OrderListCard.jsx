import React from "react";

function OrderListCard({data}){
  return (
    <div className="orderlist mt_20">
      {data.map((orderlist) => (
        <div key={orderlist.id} className="orderlist_card mb_20">
          <div className="orderlist_card_img mr_15">
            <img src={orderlist.image} alt={orderlist.product} />
          </div>
          <div className="orderlist_card_info">
            <p className="align">
              <span className="title">{orderlist.product}</span>
              <span className="price">
                {orderlist.price.toLocaleString()}
                <em className="bold400 ml_2">원</em>
              </span>
            </p>
            <p className="align start mt_8">
              <span
                className={`${"hoticed"} ${
                  orderlist.hoticed === "hot" ? "hot" : "iced"
                }`}
              >
                {orderlist.hoticed}
              </span>
              {orderlist.density && (
                <span className="option">
                  <>
                    {orderlist.density?.opt}
                    {orderlist.density?.price > 0 && (
                      <> (+{orderlist.density?.price})</>
                    )}
                  </>
                </span>
              )}
            </p>
            <p className="align mt_12">
              <span className="total">
                {orderlist.amount}
                <em className="ml_2">개</em>
              </span>
              <span className="total">
                {(orderlist.price * orderlist.amount).toLocaleString()}
                <em className="ml_2">원</em>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );  
}

export default OrderListCard;