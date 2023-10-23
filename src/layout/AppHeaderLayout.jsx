import React from 'react';
import styles from "../styles/layout/applayout.module.scss";
import SideMenu from "./SideMenuLayout";
import Button from "../components/Button";

function HeaderLayout() {
  const onClick = () =>{

  }
  return (
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
        globalClass="pd_5"
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
        onClick={() => {}}
        size="icon_s"
        globalClass="pd_5"
      >
        button
      </Button>
    </header>
  );
}

export default HeaderLayout;