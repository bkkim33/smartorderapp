import React from "react";
import { Button } from "../../components/Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    size: { control: "radio" },
    round: { control: { type: "boolean" } },
  },
};

export const Default = (args) => (
  <>
    <Button {...args}>
      {args.children}
    </Button>
  </>
);

// 

// export const Full = () => (
//   <>
//     <Button size="full">버튼이다</Button>
//   </>
// );

