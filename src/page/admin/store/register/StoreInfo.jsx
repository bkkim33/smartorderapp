import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";
import ContactInfo from "../../../../components/ContactInfo";
import Select from "../../../../components/Select";
import Modal from "./AdrresModal";
import MuiAlert from "../../../../components/MuiAlert";

function StoreInfo() {
  const navigate = useNavigate();
  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);

  const handleOpenAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(true);
    } else if (alertNumber === 2) {
      setOpenAlert2(true);
    } 
  };
  const handleCloseAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(false);
    } else if (alertNumber === 2) {
      setOpenAlert2(false);
    } 
  };

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  // 운영시간
  const days = [
    { value: "mon-fri", label: "월 ~ 금" },
    { value: "mon-sat", label: "월 ~ 토" },
    { value: "mon-sun", label: "월 ~ 일" },
    { value: "sat-sun", label: "토 ~ 일" },
  ];

  const hours = Array.from({ length: 24 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  const minutes = Array.from({ length: 60 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  return (
    <div className="align column">
      
      <div className="align center gap_10">
        <Button onClick={() => handleOpenAlert(1)} type="pc" color="gray" line size="small">
          목록
        </Button>
        <Button onClick={() => handleOpenAlert(2)} type="pc" color="black" size="small">
          저장
        </Button>
      </div>
      <Modal open={open2} handleClose={handleClose2} />
      <MuiAlert
        open={openAlert1}
        onClose={() => handleCloseAlert(1)}
        type="admin"
        title={
          <>
            입력한 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={() => handleCloseAlert(1)} type="pc" color="gray" line size="small">
              취소
            </Button>
            <Button onClick={() => navigate("/admin/store")} type="pc" color="black" size="small">
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={openAlert2}
        onClose={() => handleCloseAlert(2)}
        type="admin"
        title={
          <>
            수정된 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={() => handleCloseAlert(2)} type="pc" color="gray" line size="small">
              취소
            </Button>
            <Button onClick={() => navigate("/admin/store")} type="pc" color="black" size="small">
              확인
            </Button>
          </>
        }
      />
    </div>
  );
}

export default StoreInfo;