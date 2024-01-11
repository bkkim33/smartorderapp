import React from 'react';
import Header from './KDSHeaderLayout'
// import Footer from "./FooterLayout";
// import SideMenu from "./SideMenuLayout";
import styles from "../styles/layout/kdslayout.module.scss";
import "../styles/global.scss";

function AdminDefaultLayout({children, pdnone}) {
  return (
    <>
      {/* <Header /> */}
      <div className={`${styles.layout}`}>
        {/* <SideMenu /> */}
        <Header />
        <div className={`${styles.content} ${pdnone ? styles.pdnone : ""}`}>
          {children}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default AdminDefaultLayout;