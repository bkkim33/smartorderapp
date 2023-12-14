import React from "react";
import { Icons } from "../../components/Icon";

export default {
  title: "components/Icons",
  component: Icons,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "bg",
      values: [
        {
          name: "bg",
          value: "#f5f5f5",
        },
        {
          name: "black",
          value: "#000",
        },
      ],
    },
  },
};

export const Default = () => (
  <>
    <div className="align start">
      <div className="item">
        <Icons.Logo width={233} height={59} />
      </div>
      <div className="item">
        <Icons.AdminLogo width={172} height={34} />
      </div>
      <div className="item">
        <Icons.Google width={27} height={28} />
      </div>
      <div className="item">
        <Icons.OrderComplete width={127} height={119} fill="var(--primary)" />
      </div>
    </div>
    <div className="align start mt_20">
      <div className="item">
        <Icons.Heart width={20} height={20} fill="var(--red)" />
      </div>
      <div className="item">
        <Icons.Delete width={18} height={18} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Search width={19} height={19} fill="var(--c11)" />
      </div>
      <div className="item">
        <Icons.EyesOn width={22} height={16} fill="var(--cbb)" />
      </div>
      <div className="item">
        <Icons.Home width={23} height={21} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Cart width={26} height={21} fill="var(--c11)" />
      </div>
      <div className="item">
        <Icons.Cup width={26} height={28} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.LikeOff width={26} height={26} />
      </div>
      <div className="item">
        <Icons.Like width={26} height={26} fill="#F7D356" />
      </div>
      <div className="item">
        <Icons.LogoOnly width={20} height={20} />
      </div>
      <div className="item">
        <Icons.Location width={20} height={20} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.MenuOrder width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.MenuLike width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.MenuOrderdetails width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.MenuCoupon width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.MenuPrivacy width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.MenuNotice width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.Infomation width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.Question width={16} height={16} fill="#3A3A3A" />
      </div>
      <div className="item">
        <Icons.Trash width={20} height={20} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Logout width={24} height={24} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Coupon width={24} height={18} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Back width={26} height={18} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Plus width={12} height={12} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.AdminArrow width={15} height={16} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.AdminArrowBar width={14} height={14} fill="var(--primary)" />
      </div>
      <div className="item">
        <Icons.Check width={14} height={14} fill="var(--primary)" />
      </div>      
    </div>
    <div className="align start mt_20">
      <div className="item">
        <Icons.ArrowBg
          width={36}
          height={36}
          fill="var(--c00)"
          stroke="var(--point)"
        />
      </div>
      <div className="item">
        <Icons.Setting width={19} height={20} fill="var(--primary)" />
      </div> 
      <div className="item">
        <Icons.AlertIcon width={50} height={50} fill="var(--blue)" />
      </div>
      <div className="item">
        <Icons.AlertIcon width={50} height={50} fill="var(--red)" />
      </div>
      <div className="item">
        <Icons.Download width={11} height={18} fill="var(--c33)" />
      </div>
      <div className="item">
        <Icons.Hamburger width={26} height={26} fill="#000000" />
      </div>
      <div className="item">
        <Icons.Refresh width={23} height={19} fill="var(--primary)" />
      </div>
    </div>
  </>
);

