import React from "react";
import NoData from "../../components/NoData";

export default {
  title: "components/NoData",
  component: NoData,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <NoData {...args} />
  </>
);
