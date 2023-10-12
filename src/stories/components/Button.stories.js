import React from "react";
import  Button  from "../../components/Button";
// import { Icons } from "../../components/Icon";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    size: { control: "select" },
    // icon: { control: "text" },
    icon: { control: "select", options: ["Heart", "Deletecir", ""] },
    iconStyle: {
      control: "object",
    },
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

