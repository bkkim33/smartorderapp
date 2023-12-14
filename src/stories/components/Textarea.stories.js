import React from "react";
import { Textarea } from "../../components/Textarea";

export default {
  title: "components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
  },
};

export const Default = (args) => (
  <>
    <Textarea {...args}>
      {args.children}
    </Textarea>
  </>
);

export const CountOn = () => (
  <>
    <Textarea counton>
    </Textarea>
  </>
);