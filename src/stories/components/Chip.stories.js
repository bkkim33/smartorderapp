import React from "react";
import Chip from "../../components/Chip";

export default {
  title: "components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <Chip {...args}>{args.children}</Chip>
  </>
);


export const DefaulAdmin = () => (
  <>
    <Chip label="테스트염" onClick={() => {}}/>
  </>
);