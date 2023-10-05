import React from "react";
import { Button } from "../../components/Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { children: { control: "text" } },
};

export const Default = (argTypes) => (
  <>
    <Button>{argTypes.children}</Button>
  </>
);

export const Line = () => (
  <>
    <Button>버튼이다</Button>
  </>
);

