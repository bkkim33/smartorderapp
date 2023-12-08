import React from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from "../../../components/MuiAlert";
import Button from "../../../components/Button";

function PayAlert({ open, handleClose }) {
  const navigate = useNavigate();
  return (
    <MuiAlert
      open={open}
      onClose={handleClose}
      title={
        <>
          주문 확인 후 <span className="red_text">취소가 불가합니다.</span>
        </>
      }
      desc={<>결제를 원하시면 확인을 눌러주세요</>}
      button={
        <>
          <Button line color="gray" onClick={handleClose} >
            취소
          </Button>
          <Button
            color="point"
            onClick={() => {
              navigate("/complete");
            }}
          >
            확인
          </Button>
        </>
      }
    ></MuiAlert>
  );
}
// ${ check ? "line" : "" }

export default PayAlert;