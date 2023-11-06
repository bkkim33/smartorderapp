import React from "react";
import { Input } from "../../components/Input";

export default {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
      
  },
};

export const TypeText = (args) => (
  <>
    <Input type="text" {...args}></Input>
  </>
);

export const TypePassword = () => (
  <>
    <Input
      type="password"
      placeholder="비밀번호를 입력해 주세요."
    >
    </Input>
  </>
);

export const TypeNumber = () => (
  <>
    <Input
      type="number"
      placeholder="123(원)"
    >
    </Input>
  </>
);

export const TypeSearch = () => (
  <>
    <Input
      type="search"
      placeholder="검색어를 입력하세요."
    >
    </Input>
  </>
);

export const Timer = () => (
  <>
    <Input
      type="text"
      placeholder="내용을 입력해 주세요."
      timer
    >
    </Input>
  </>
);