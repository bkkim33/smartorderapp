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
      <Icons.AdminLogo />
      <div className={`${styles.user_img_box} ${"mt_30"}`}>
        <div className={`${styles.user_img}`}>
          <img src={Userimg} alt="유저 이미지" />
        </div>
        <p className="mt_10">mz-cafe-admin</p>
      </div>
      <div className={`${styles.user_util} ${"mt_20"}`}>
        <button onClick={onClick} className={`${styles.user_button} ${""}`}>
          <span className="mt_15">프로필</span>
        </button>
        <button onClick={onClick} className={`${styles.user_button} ${""}`}>
          <span className="mt_15">로그아웃</span>
        </button>
      </div>

      <SideMenu globalstyle="mt_30" />
    </header>
  );
}

export default HeaderLayout;