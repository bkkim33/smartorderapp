import React from "react";
import Checkbox from "../../components/Checkbox";

export default {
  title: "components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <Checkbox {...args}>{args.children}</Checkbox>
  </>
);

export const DefaultChecked = () => (
  <>
    <Checkbox name="contact1" id="check1" value="text" defaultChecked txt="text"></Checkbox>
  </>
);

export const Disabled = () => (
  <>
    <Checkbox name="contact2" id="check2" value="text" disabled txt="text"></Checkbox>
  </>
);

export const DisabledChecked = () => (
  <>
    <Checkbox name="contact3" id="check3" value="text" defaultChecked disabled txt="text"></Checkbox>
  </>
);