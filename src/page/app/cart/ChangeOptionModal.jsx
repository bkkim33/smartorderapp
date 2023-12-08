import React from "react";
import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";
import TextToggle from "../../../components/TextToggle";


function ChangeOptionModal({ open, handleClose }){
  return(
    <>
      <MuiModal
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>옵션 변경</h4>
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
        button={
          <>
            <Button onClick={handleClose} color="gray" txtColor="txtgray">옵션 초기화</Button>
            <Button onClick={handleClose} color="point" globalClass="ml_10">
              변경 완료
            </Button>
          </>
        }
      >
        <div className="modal_line">
          <p className="headline2">바닐라라떼</p>
        </div>
        <div>
          <p className="headline5 bold400 pb_17">HOT/ICE 선택</p>
          <TextToggle
            data={[
              {
                id: 1,
                option: null,
                title: "HOT",
              },
              {
                id: 2,
                option: null,
                title: "ICED",
                defaultActive: true,
              },
            ]}
          />
        </div>
        <div className="mt_20">
          <p className="headline5 bold400 pb_17">농도 선택</p>
          <TextToggle
            data={[
              {
                id: 1,
                option: null,
                title: "기본 (2샷)",
                defaultActive: true,
              },
              {
                id: 2,
                option: null,
                title: "연하게 (1샷만)",
              },
              {
                id: 3,
                option: true,
                title: "진하게 (1샷추가)",
              },
            ]}
          />
        </div>
      </MuiModal>
    </>
  );
}

export default ChangeOptionModal;