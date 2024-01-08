import React from "react";
import { useNavigate } from "react-router-dom";
import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";
import DaumPostcode from "react-daum-postcode";

function AdrresModal({ open, handleClose, props }) {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    // position: "absolute",
    // top: "10%",
    width: "100%",
    height: "600px",
    padding: "7px",
  };
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      header={
        <>
          <h4>주소 찾기</h4>
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
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
    </MuiModal>
  );
}

export default AdrresModal;