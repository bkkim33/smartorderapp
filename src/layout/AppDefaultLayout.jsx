import React from 'react';
import Header from './AppHeaderLayout'
// import Footer from "./FooterLayout";
// import SideMenu from "./SideMenuLayout";
import styles from "../styles/layout/applayout.module.scss";
import "../styles/global.scss";


function DefaultLayout({ children, Coupon, Cart, Menu, Back, Title, Close }) {
  return (
    <>
      {/* <Header /> */}
      <div className={`${styles.layout}`}>
        {/* <SideMenu /> */}
        <Header
          Coupon={Coupon}
          Cart={Cart}
          Menu={Menu}
          Back={Back}
          Title={Title}
          Close={Close}
        />
        <div className={`${styles.content}`}>{children}</div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default DefaultLayout;