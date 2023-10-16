import React from "react";
import { Count } from "../../components/Count";

export default {
  title: "components/Count",
  component: Count,
  tags: ["autodocs"],
  argTypes: {
  },
};

export const Default = (args) => (
  <>
    <Count {...args}>
      {args.children}
    </Count>
  </>
);

