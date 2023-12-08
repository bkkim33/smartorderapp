import React from 'react';
import { useNavigate } from "react-router-dom";
import { Icons } from "../components/Icon";
import Button from "../components/Button";
import styles from "../styles/layout/layout.module.scss";
import SideMenu from "./SideMenuLayout";


function HeaderLayout() {
  
  const navigate = useNavigate();

  return (
    <header className={`${styles.header}`}>
      <div className="pt_30">
        <Icons.AdminHeaderLogo width={"100%"} height={66} fill="#fff" />
      </div>
      <div className={`${styles.user_util} ${"mt_30"}`}>
        <Button
          globalClass={`${styles.user_button}`}
          onClick={() => navigate("/admin/myprofile/profile")}
          color="trans"
          icon="MenuPrivacy"
          iconStyle={{
            fill: "var(--cff)",
          }}
          line
          size="full"
          txtColor="txtwhite"
          type="pc"
        >
          프로필
        </Button>
      </div>
      <SideMenu globalstyle="mt_47" />
    </header>
  );
}

export default HeaderLayout;