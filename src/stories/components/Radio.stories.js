import React from "react";
import  Radio  from "../../components/Radio";

export default {
  title: "components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <Radio {...args}>{args.children}</Radio>
  </>
);

export const DefaultChecked = () => (
  <>
    <Radio name="contact1" id="radio1" value="text" defaultChecked>
      text
    </Radio>
  </>
);

export const Disabled = () => (
  <>
    <Radio name="contact2" id="radio2" value="text" disabled>
      text
    </Radio>
  </>
);

export const DisabledChecked = () => (
  <>
    <Radio name="contact3" id="radio3" value="text" defaultChecked disabled>
      text
    </Radio>
  </>
);

