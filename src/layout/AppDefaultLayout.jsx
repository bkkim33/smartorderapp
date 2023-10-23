import React from 'react';
import Header from './AppHeaderLayout'
// import Footer from "./FooterLayout";
// import SideMenu from "./SideMenuLayout";
import styles from "../styles/layout/applayout.module.scss";
import "../styles/global.scss";

function DefaultLayout({children}) {
  return (
    <>
      {/* <Header /> */}
      <div className={`${styles.layout}`}>
        {/* <SideMenu /> */}
        <Header />
        <div className={`${styles.content}`}>{children}</div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default DefaultLayout;