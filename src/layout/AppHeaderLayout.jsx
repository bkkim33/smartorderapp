import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/layout/applayout.module.scss";
import SideMenu from "./AppSideMenuLayout";
import { Button } from "../components/Button";

function HeaderLayout({ Coupon, Cart, Menu, Back, Title, Close }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    // document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    // document.body.style.overflow = "unset";
  };
  const navigate = useNavigate();
  const node = useRef();
  // useEffect(() => {
  //   document.addEventListener("mousedown", modalOff);
  //   return () => {
  //     document.removeEventListener("mousedown", modalOff);
  //   };
  // }, []);

  return (
    <>
      <header className={`${styles.header}`}>
        {Back && (
          <div className={`${styles.lft}`}>
            <Button
              icon="Back"
              iconStyle={{
                fill: "#000000",
                width: 26,
                height: 26,
              }}
              none
              onClick={() => navigate(-1 || "/")}
              size="icon_s"
              globalClass="pd_0"
            >
              뒤로가기
            </Button>
          </div>
        )}
        {Title && <div className={`${styles.title}`}>{Title}</div>}
        {(Coupon || Cart || Menu || Close) && (
          <div className={`${styles.rgt}`}>
            {Coupon && (
              <Button
                icon="Coupon"
                iconStyle={{
                  fill: "#000000",
                  width: 24,
                }}
                none
                onClick={() => navigate("/coupon")}
                size="icon_s"
                globalClass="pd_0"
              >
                쿠폰으로 이동
              </Button>
            )}
            {Cart && (
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
                장바구니 이동
              </Button>
            )}
            {Menu && (
              <Button
                none
                icon="Hamburger"
                iconStyle={{
                  fill: "#000000",
                  width: 24,
                }}
                onClick={handleOpen}
                size="icon_s"
                globalClass="pd_0"
              >
                매뉴오픈
              </Button>
            )}
            {Close && (
              <Button
                icon="Delete"
                iconStyle={{
                  fill: "#000000",
                  width: 24,
                }}
                none
                onClick={() => navigate("/main")}
                size="icon_s"
                globalClass="pd_0"
              >
                닫기
              </Button>
            )}
          </div>
        )}
      </header>
      {Menu && <SideMenu open={open} onClose={handleClose}></SideMenu>}
    </>
  );
}

export default HeaderLayout;