import React, { useState } from "react";
import { MuiAlert } from "../../components/MuiAlert";
import { Button } from "../../components/Button";

export default {
  title: "components/Lib/MuiAlert",
  component: MuiAlert,
  tags: ["autodocs"],
  argTypes: {
  },
};

export const Default = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="point" onClick={handleOpen}>Open Alert</Button>
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
            <Button color="gray" line onClick={() => { }}>취소</Button>
            <Button color="point" onClick={() => { }}>확인</Button>
          </>
        }
        {...args}
      >
      </MuiAlert>
    </>
  );
}

export const AdminBlue = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="point" onClick={handleOpen}>Open Alert</Button>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        title={
          <>
            저장 하시겠습니까?
          </>
        }
        button={
          <>
            <Button color="gray" line size="small" onClick={() => { }}>취소</Button>
            <Button color="black" size="small" onClick={() => { }}>확인</Button>
          </>
        }
        {...args}
      >
      </MuiAlert>
    </>
  );
}

export const AdminRed = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="point" onClick={handleOpen}>Open Alert</Button>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={
          <>
            카테고리를 삭제 하시겠습니까?
          </>
        }
        desc={
          <>
            카테고리를 삭제하면<br />
            <span className="red_text">카테고리에 연결된 모든 상품 매장에 노출되지 않으며, <br />삭제된 카테고리는 복구되지 않습니다.</span>
          </>
        }
        button={
          <>
            <Button color="gray" line size="small"  onClick={() => { }}>취소</Button>
            <Button color="black" size="small"  onClick={() => { }}>확인</Button>
          </>
        }
        {...args}
      >
      </MuiAlert>
    </>
  );
}