import React from "react";
import Loading from "../../components/Loading";

export default {
  title: "components/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: {},
}

export const Default = (args) => (
  <> 
    <Loading {...args} />
  </>
);