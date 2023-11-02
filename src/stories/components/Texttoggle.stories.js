import React from "react";
import TextToggle from "../../components/TextToggle";

export default {
  title: "components/Texttoggle",
  component: TextToggle,
  tags: ["autodocs"],
  argTypes: {},
};

const btnlist = [
  { id: 1, title: "기본 (2샷)", option: null, defaultActive: true },
  { id: 2, title: "연하게 (1샷만)", option: null },
  { id: 3, title: "진하게 (1샷추가)", option: null },
  { id: 4, title: "메뉴명 4", option: null },
  { id: 5, title: "메뉴명 5", option: true },
];

const btnlist2 = [
  { id: 1, title: "1개월", option: null, defaultActive: true },
  { id: 2, title: "6개월", option: null },
  { id: 3, title: "12개월", option: null },
];

export const Default = (args) => (
  <>
    <TextToggle {...args} data={btnlist}></TextToggle>
  </>
);

export const LineBox = (args) => (
  <>
    <TextToggle {...args} data={btnlist2} type="linebox"></TextToggle>
  </>
);