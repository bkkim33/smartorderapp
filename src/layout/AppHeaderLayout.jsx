import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/layout/applayout.module.scss";
import SideMenu from "./AppSideMenuLayout";
import Button from "../components/Button";

function HeaderLayout() {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };
  const navigate = useNavigate();
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
          onClick={() => navigate("/cart")}
          size="icon_s"
          globalClass="pd_0"
        >
          장바구니
        </Button>
        <Button
          none
          onClick={handleOpen}
          size="small"
          globalClass="pd_0 hamburger"
        >
          매뉴오픈
        </Button>
      </header>
      <SideMenu open={open} onClose={handleClose}></SideMenu>
    </>
  );
}

export default HeaderLayout;