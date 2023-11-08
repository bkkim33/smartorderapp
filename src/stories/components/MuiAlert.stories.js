import React, { useState } from "react";
import { MuiAlert } from "../../components/MuiAlert";
import { Button } from "../../components/Button";


export default {
  title: "components/Lib/MuiAlert",
  component: MuiAlert,
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
      <Button onClick={handleOpen}>Open Alert</Button>
      <MuiAlert
        open={open}
        onClose={handleClose}
        title={
          <>
            주문 확인 후 <span className="red_text">취소가 불가합니다.</span>
          </>
        }
        desc={
          <>결제를 원하시면 확인을 눌러주세요</>
        }
        button={
          <>
            <Button onClick={() => { }} line>취소</Button>
            <Button onClick={() => { }}>확인</Button>
          </>
        }
      >
      </MuiAlert>
    </>
  );
}


