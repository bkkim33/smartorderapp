import React from "react";
import TextToggle from "../../components/TextToggle";

export default {
  title: "components/Texttoggle",
  component: TextToggle,
  tags: ["autodocs"],
  argTypes: {},
};

const TextToggleBtn = [
  { id: 1, title: "기본 (2샷)" },
  { id: 2, title: "연하게 (1샷만)" },
  { id: 3, title: "진하게 (1샷추가)" },
  { id: 4, title: "메뉴명 4" },
  { id: 5, title: "메뉴명 5" },
];

export const Default = (args) => (
  <>
    <TextToggle {...args} TextToggleBtn={TextToggleBtn}></TextToggle>
  </>
);