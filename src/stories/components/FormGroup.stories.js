import React from "react";
import Radio from "../../components/Radio";
import Checkbox from "../../components/Checkbox";
import FormGroup from "../../components/FormGroup";

export default {
  title: "components/FormGroup",
  component: FormGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <FormGroup {...args}>{args.children}</FormGroup>
  </>
);

export const RadioDefault = () => (
  <FormGroup>
    <Radio name="contact0" id="radio1" value="EMAIL" defaultChecked>
      이메일
    </Radio>
    <Radio name="contact0" id="radio2" value="PHONE">
      전화
    </Radio>
    <Radio name="contact0" id="radio4" value="MAIL" disabled>
      우편
    </Radio>
  </FormGroup>
);

export const RadioVertical = () => (
  <FormGroup vertical>
    <Radio name="contact1" id="radio01" value="EMAIL" defaultChecked>
      이메일
    </Radio>
    <Radio name="contact1" id="radio02" value="PHONE">
      전화
    </Radio>
    <Radio name="contact1" id="radio03" value="MAIL" disabled>
      우편
    </Radio>
  </FormGroup>
);

export const CheckboxDefault = () => (
  <FormGroup>
    <Checkbox name="contact00" id="check1" value="EMAIL" defaultChecked>
      이메일
    </Checkbox>
    <Checkbox name="contact00" id="check2" value="PHONE">
      전화
    </Checkbox>
    <Checkbox name="contact00" id="check3" value="MAIL" disabled>
      우편
    </Checkbox>
  </FormGroup>
);

export const CheckboxVertical = () => (
  <FormGroup vertical>
    <Checkbox name="contact01" id="check01" value="EMAIL" defaultChecked>
      이메일
    </Checkbox>
    <Checkbox name="contact02" id="check02" value="PHONE">
      전화
    </Checkbox>
    <Checkbox name="contact03" id="check03" value="MAIL" disabled>
      우편
    </Checkbox>
  </FormGroup>
);

