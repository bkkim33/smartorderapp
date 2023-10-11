import React from "react";
import Radio from "../../components/Radio";
import Checkbox from "../../components/Checkbox";
import FromGroup from "../../components/FromGroup";

export default {
  title: "components/FromGroup",
  component: FromGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <FromGroup {...args}>{args.children}</FromGroup>
  </>
);

// 

export const RadioDefault = () => (
  <FromGroup>
    <Radio name="contact0" id="radio1" value="EMAIL" defaultChecked>
      이메일
    </Radio>
    <Radio name="contact0" id="radio2" value="PHONE">
      전화
    </Radio>
    <Radio name="contact0" id="radio4" value="MAIL" disabled>
      우편
    </Radio>
  </FromGroup>
);

export const RadioVertical = () => (
  <FromGroup vertical>
    <Radio name="contact1" id="radio01" value="EMAIL" defaultChecked>
      이메일
    </Radio>
    <Radio name="contact1" id="radio02" value="PHONE">
      전화
    </Radio>
    <Radio name="contact1" id="radio03" value="MAIL" disabled>
      우편
    </Radio>
  </FromGroup>
);

export const CheckboxDefault = () => (
  <FromGroup>
    <Checkbox name="contact00" id="check1" value="EMAIL" defaultChecked>
      이메일
    </Checkbox>
    <Checkbox name="contact00" id="check2" value="PHONE">
      전화
    </Checkbox>
    <Checkbox name="contact00" id="check3" value="MAIL" disabled>
      우편
    </Checkbox>
  </FromGroup>
);

export const CheckboxVertical = () => (
  <FromGroup vertical>
    <Checkbox name="contact01" id="check01" value="EMAIL" defaultChecked>
      이메일
    </Checkbox>
    <Checkbox name="contact02" id="check02" value="PHONE">
      전화
    </Checkbox>
    <Checkbox name="contact03" id="check03" value="MAIL" disabled>
      우편
    </Checkbox>
  </FromGroup>
);

