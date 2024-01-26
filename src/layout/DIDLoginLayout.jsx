import React from 'react';
// import Header from './AppHeaderLayout'
// import Footer from "./FooterLayout";
// import SideMenu from "./SideMenuLayout";
import styles from "../styles/layout/kdslayout.module.scss";
import "../styles/global.scss";

function DIDLoginLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <div className={`${styles.layout} ${styles.didlogin}`}>
        {/* <SideMenu /> */}
        {/* <Header /> */}
        <div className={`${styles.content}`}>{children}</div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default DIDLoginLayout;