import React from "react";
import Radio from "../../components/Radio";
import RadioGroup from "../../components/RadioGroup";

export default {
  title: "components/Radio/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <RadioGroup {...args}>
      <Radio name="contact" value="EMAIL" defaultChecked>
        이메일
      </Radio>
      <Radio name="contact" value="PHONE">
        전화
      </Radio>
      <Radio name="contact" value="MAIL" disabled>
        우편
      </Radio>
    </RadioGroup>
  </>
);

// 

export const Vertical = () => (
  <RadioGroup vertical>
    <Radio name="contact1" id="radio1" value="EMAIL" defaultChecked>
      이메일
    </Radio>
    <Radio name="contact1" id="radio2" value="PHONE">
      전화
    </Radio>
    <Radio name="contact1" id="radio3" value="MAIL" disabled>
      우편
    </Radio>
  </RadioGroup>
);

