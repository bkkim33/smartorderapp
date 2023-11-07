import React from 'react';
import { Icons } from "../components/Icon";
import styles from "../styles/layout/layout.module.scss";
import Userimg from "../images/user_img.png";
import SideMenu from "./SideMenuLayout";

function HeaderLayout() {
  const onClick = () =>{

  }
  return (
    <header className={`${styles.header}`}>
      <Icons.AdminLogo width={"100%"} height={50} fill="#303033" />
      <div className={`${styles.user_util} ${"mt_30"}`}>
        <button onClick={onClick} className={`${styles.user_button} ${""}`}>
          <Icons.MenuPrivacy width={12} height={12} fill="#3A3A3A" />
          <span className="ml_7">프로필</span>
        </button>
        <button onClick={onClick} className={`${styles.user_button} ${""}`}>
          <span>로그아웃</span>
        </button>
      </div>

      <SideMenu globalstyle="mt_30" />
    </header>
  );
}

export default HeaderLayout;