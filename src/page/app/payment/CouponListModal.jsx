import React, { useState } from "react";
import MuiModal from "../../../components/MuiModal";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";

function CouponListModal({ open, handleClose, data }) {  
  return (
    <MuiModal 
      open={open} 
      onClose={handleClose} 
      header={
        <>
          <h4>쿠폰선택</h4>
          <Button 
            icon="Delete" 
            iconposition="" 
            none 
            onClick={handleClose} 
            size="icon_s" 
            iconStyle={{fill: "var(--c11)"}}
          >
            Close
          </Button>
        </>
      } 
      button={
        <>
          <Button onClick={handleClose}>사용하기</Button>
        </>
      }
    >
      <div className="couponlist">
        <p className="couponlist_total mb_10">
          <span>{data.length}</span>개 쿠폰
        </p>
        {data.map((couponlist, index) => (
          <div key={couponlist.id} className="mb_15">
            <div className={`${'couponlist_wrap'}`}>
              <Checkbox
                id={`check` + couponlist.id.toString()}
                name={couponlist.title.toString()}
              >
                <div className="couponlist_card">
                  <div className="couponlist_card_img mlr_10">
                    <img src={couponlist.image} alt={couponlist.title} />
                  </div>
                  <div className="couponlist_card_info">
                    <p className="issuer">{couponlist.issuer}</p>
                    <p className="title mt_10">{couponlist.title}</p>
                    <p className="date mt_16">{couponlist.date} 까지</p>
                  </div>
                </div>
              </Checkbox>
            </div>
          </div>
        ))}
      </div>
    </MuiModal>    
  )
}
// ${ check ? "line" : "" }

export default CouponListModal;