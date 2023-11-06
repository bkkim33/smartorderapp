import React from 'react';
// import Header from './AppHeaderLayout'
// import Footer from "./FooterLayout";
// import SideMenu from "./SideMenuLayout";
import styles from "../styles/layout/layout.module.scss";
import "../styles/global.scss";

function AdminLoginLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <div className={`${styles.layout} ${styles.adminlogin}`}>
        {/* <SideMenu /> */}
        {/* <Header /> */}
        <div className={`${styles.content}`}>{children}</div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default AdminLoginLayout;