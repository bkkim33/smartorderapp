import React from "react";
import { MuiPage } from "../../components/MuiPage";

export default {
  title: "components/Lib/MuiPage",
  component: MuiPage,
  tags: ["autodocs"],
  argTypes: {
    
  },
};

export const Default = (args) => {
  return (
    <>
      <MuiPage {...args}/>
    </>
  );
}