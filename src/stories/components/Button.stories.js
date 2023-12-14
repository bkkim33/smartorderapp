import React from "react";
import Button from "../../components/Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    txtColor: {
      control: {
        type: "select",
        option: ["", "txtgray", "txtwhite", ],
      },
    },
    color: {
      control: {
        type: "select",
        option: ["", "point", "black", "gray", "red", "blue", "trans", ],
      },
    },
    size: {
      control: {
        type: "select",
        option: ["", "full", "xlarge", "medium", "small", "xsmall", "xxsmall", "icon_l", "icon_m", "icon_s", ],
      },
    },
    icon: {
      control: "select",
      options: ["Heart", "Delete", "Search", "Google", "Home", "Cart", "Cup", "Like", "LikeOff", "LogoOnly", "Location", "MenuOrder", "MenuLike", "MenuOrderdetails", "MenuCoupon", "MenuPrivacy", "MenuNotice", "Infomation", "Question", "Trash", "Logout", "OrderComplete", "Coupon", "Back", "ArrowBg", "Plus", "Setting", "Download", "Hamburger", "Refresh", "" ]
    },
    iconStyle: {
      control: "object",
    },
  },
};

export const Default = (args) => (
  <>
    <Button {...args}>{args.children}</Button>
  </>
);

export const Disabled = (args) => (
  <>
    <Button disabled>구매하기</Button>
  </>
);

export const AppGray = (args) => (
  <>
    <Button color="gray" txtColor="txtgray" size="xlarge">장바구니 담기</Button>
  </>
);

export const AppPoint = (args) => (
  <>
    <Button color="point" size="xlarge">주문하기</Button>
  </>
);

export const AppPointFull = (args) => (
  <>
    <Button color="point" size="full">총 금액 결제하기</Button>
  </>
);

export const AppLineFull = (args) => (
  <>
    <Button color="black" line size="full">메뉴 더 담기</Button>
  </>
);

export const AppAlertGray = (args) => (
  <>
    <Button color="gray" line>취소</Button>
  </>
);

export const AppAlertPoint = (args) => (
  <>
    <Button color="point">확인</Button>
  </>
);

export const AppNone = (args) => (
  <>
    <Button none>상세내역</Button>
  </>
);

export const AdminProfile = (args) => (
  <>
    <Button type="pc" color="point" icon="MenuPrivacy" size="small">프로필</Button>
  </>
);

export const AdminBlue= (args) => (
  <>
    <Button type="pc" color="blue" size="small">로그아웃</Button>
  </>
);

export const AdminPoint = (args) => (
  <>
    <Button type="pc" color="point" size="small">신규등록</Button>
  </>
);

export const AdminGray = (args) => (
  <>
    <Button type="pc" color="gray" line size="small">삭제</Button>
  </>
);

export const AdminBlack = (args) => (
  <>
    <Button type="pc" color="black" size="small">저장</Button>
  </>
);

export const AdminRed = (args) => (
  <>
    <Button type="pc" color="red" line size="small">판매중지</Button>
  </>
);

export const BgTransparent = (args) => (
  <>
    {/* 임시 스타일 */}
    <div style={{ backgroundColor: "#111", height: "150px"}} className="align center middle">
      <Button 
        type="pc"
        color="trans"
        icon="MenuPrivacy"
        iconStyle={{
          fill: 'var(--cff)'
        }}
        line
        size="xlarge"
        txtColor="txtwhite">로그인</Button>
    </div>
  </>
);