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
    console.log('눌럿어', {setOpen})
  }
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <MuiModal propOpen={open}></MuiModal>
    </>
  );
}


