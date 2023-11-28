import React from 'react';
import { Icons } from "../components/Icon";
import styles from "../styles/layout/kdslayout.module.scss";
import Userimg from "../images/user_img.png";
import SideMenu from "./SideMenuLayout";
import { useNavigate } from "react-router-dom";

function HeaderLayout() {
  
  const navigate = useNavigate();

  return (
    <header className={`${styles.header}`}>
      <Icons.AdminLogo width={"100%"} height={50} fill="#303033" />
      <div className={`${styles.user_util} ${"mt_20"}`}>
        <button
          onClick={() => navigate("/admin/myprofile/profile")}
          className={`${styles.user_button} ${""}`}
        >
          <Icons.Setting width={16} height={16} fill="#3A3A3A" />
          <span className="ml_7">환경설정</span>
        </button>
        <button
          onClick={() => {
            navigate("/kds");
          }}
          className={`${styles.user_button} ${""}`}
        >
          <span>로그아웃</span>
        </button>
      </div>

      <SideMenu globalstyle="mt_30" />
    </header>
  );
}

export default HeaderLayout;