import React from "react";
import Tabs from "../../components/Tabs";

export default {
  title: "components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
};

const TabsBtn = [
  { id: 1, title: "메뉴명1" },
  { id: 2, title: "메뉴명2" },
  { id: 3, title: "메뉴명3" },
];

export const Default = (args) => (
  <>
    <Tabs {...args} TabsData={TabsBtn}></Tabs>
  </>
);

export const Round = (args) => (
  <>
    <Tabs {...args} TabsData={TabsBtn} type="round"></Tabs>
  </>
);