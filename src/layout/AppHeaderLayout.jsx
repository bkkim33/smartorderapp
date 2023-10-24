import React from 'react';
import styles from "../styles/layout/applayout.module.scss";
import SideMenu from "./AppSideMenuLayout";
import Button from "../components/Button";

function HeaderLayout() {
  const onClick = () =>{

  }
  return (
    <>
      <header className={`${styles.header}`}>
        <Button
          icon="Coupon"
          iconStyle={{
            fill: "#000000",
            width: 24,
          }}
          none
          onClick={() => {}}
          size="icon_s"
          globalClass="pd_0"
        >
          button
        </Button>
        <Button
          icon="Cup"
          iconStyle={{
            fill: "#000000",
            width: 24,
          }}
          none
          badge
          onClick={() => {}}
          size="icon_s"
          globalClass="pd_0"
        >
          button
        </Button>
        <Button
          none
          onClick={() => {}}
          size="small"
          globalClass="pd_0 hamburger"
        >
          매뉴오픈
        </Button>
      </header>
      <SideMenu></SideMenu>
    </>
  );
}

export default HeaderLayout;