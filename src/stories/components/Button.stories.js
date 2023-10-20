import React from "react";
import Button  from "../../components/Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    size: { control: "select" },
    // icon: { control: "text" },
    icon: { 
      control: "select", 
      options: ["Heart", "Delete", "Search", "Google", "Home", "Cart", "Cup", "Like", "LogoOnly", "Location", "MenuOrder", "MenuLike", "MenuOrderdetails", "MenuCoupon", "MenuPrivacy", "MenuNotice", "Infomation", "Question", "Trash", "Logout", "OrderComplete", "Coupon", "Back", "ArrowBg", "" ] },
    iconStyle: {
      control: "object",
    },
    color: {
      control: {
        type: "select",
        options: ["", "gray", "lime","change"],
      },
    },
  },
};

export const Default = (args) => (
  <>
  <Button {...args}>{args.children}</Button>
  </>
);

export const AppPrimary = (args) => (
  <>
    <Button onClick={() => {}} size="full">확인</Button>
  </>
);

export const AppOutline= (args) => (
  <>
    <Button onClick={() => {}} size="full" line>메뉴 더 담기</Button>
  </>
);

export const AppGray = () => (
  <>
    <Button onClick={() => {}} size="medium" color="gray">장바구니 담기</Button>
  </>
);

export const AppLime = () => (
  <>
    <Button onClick={() => {}} size="medium" color="lime">홈</Button>
  </>
);

export const AppSecondary = () => (
  <>
    <Button onClick={() => {}} size="xsmall" color="change" line>변경</Button>
  </>
);
