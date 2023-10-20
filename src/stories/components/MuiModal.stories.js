import React, { useState } from "react";
import { MuiModal } from "../../components/MuiModal";
import { Button } from "../../components/Button";


export default {
  title: "components/Lib/MuiModal",
  component: MuiModal,
  tags: ["autodocs"],
  argTypes: {},
};

 

export const Default = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>Title</h4>
            <Button
              icon="Delete"
              iconposition=""
              none
              onClick={handleClose}
              size="icon_s"
              iconStyle={{
                fill: "var(--c11)",
              }}
            >
              Close
            </Button>
          </>
        }
        button={
          <>
            <Button onClick={() => {}} line>취소</Button>
            <Button onClick={() => {}} globalClass="ml_10">
              확인
            </Button>
          </>
        }
      >
        컨텐츠
      </MuiModal>
    </>
  );
}


