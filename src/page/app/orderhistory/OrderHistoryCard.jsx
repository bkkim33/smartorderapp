import React, { useState } from "react";

import Modal from "./OrderHistoryModal";
import Button from "../../../components/Button";

function OrderHistoryCard({ Data }) {
  const [open, setOpen] = useState(false);
  const [modalindex, setModalindex] = useState([]);
  const handleOpen = (index) => {
    setOpen(true);
    setModalindex(Data[index]);
  };

   const handleClose = () => {
     setOpen(false);
   };

  return (
    <>
      {Data.map((History, index) => (
        <div key={History.id} className="orderhistory_card mb_20">
          <div className="orderhistory_card_top">
            <div className="orderhistory_card_title">
              <p className="headline5 mr_8">주문완료</p>
              <p className="body3 mr_4">{History.date}</p>
              <p className="body3">{History.time}</p>
            </div>
            <div className="ml_10">
              <Button size="xsmall" none onClick={() => handleOpen(index)}>
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
                {History.other ? "외" : ""}
              </p>
              <p className="mt_8 body2">{History.location}</p>
              <p className="mt_15 body0">{History.price.toLocaleString()}원</p>
            </div>
          </div>
        </div>
      ))}
      <Modal open={open} handleClose={handleClose} data={modalindex} />
    </>
  );
}

export default OrderHistoryCard;
