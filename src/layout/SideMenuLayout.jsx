import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/layout/layout.module.scss";

function SideMenuLayout({globalstyle}) {
  const URL = useLocation();

  useEffect(() => {
    // console.log(URL);
  }, [URL]);

  return (
    <aside className={`${styles.menu} ${globalstyle}`}>
      <nav>
        <ul className={`${styles.menu_wrap}`}>
          <li
            className={`${styles.menu_dep1} ${
              URL.pathname === "/admin/product" ? styles.menu_dep1_active : ""
            }`}
          >
            <p>
              <span>상품 전시관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link to="/admin/main">
                  <span>메뉴 관리</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link to="/admin/login">
                  <span>카테고리 관리</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link to="/admin/login">
                  <span>메뉴 옵션 관리</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              URL.pathname = "/admin/coupon"
                ? styles.menu_dep1_active
                : ""
            }`}
          >
            <p>
              <span>쿠폰발급관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/coupon/management"
                  className={` ${
                    URL.pathname = "/admin/coupon/management"
                      ? styles.active
                      : ""
                  }`}
                >
                  <span>쿠폰관리</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link to="/admin/coupon">
                  <span>쿠폰발급</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link to="/admin/login">
                  <span>쿠폰발송</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.menu_dep1}`}>
            <Link to="/admin/login">
              <span>주문내역관리</span>
            </Link>
          </li>
          <li className={`${styles.menu_dep1}`}>
            <Link to="/admin/login">
              <span>매출관리</span>
            </Link>
          </li>
          <li className={`${styles.menu_dep1}`}>
            <Link to="/admin/login">
              <span>지점관리</span>
            </Link>
          </li>
          <li className={`${styles.menu_dep1}`}>
            <Link to="/admin/login">
              <span>계정관리</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenuLayout;