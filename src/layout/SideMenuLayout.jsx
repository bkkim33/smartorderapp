import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/layout/layout.module.scss";

function SideMenuLayout({globalstyle}) {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  useEffect(() => {
    // console.log(URL);
  }, [URL]);

  return (
    <aside className={`${styles.menu} ${globalstyle}`}>
      <nav>
        <ul className={`${styles.menu_wrap}`}>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "product" ? styles.menu_dep1_active : ""
            }`}
          >
            <p>
              <span>상품 전시 관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/product/product"
                  className={` ${
                    splitLocation[3] === "product" ? styles.active : ""
                  }`}
                >
                  <span>상품 관리</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/product/category"
                  className={` ${
                    splitLocation[3] === "category" ? styles.active : ""
                  }`}
                >
                  <span>카테고리 관리</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "order" ? styles.menu_dep1_active : ""
            }`}
          >
            <p>
              <span>주문/매출 관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/order/history"
                  className={` ${
                    splitLocation[3] === "history" ? styles.active : ""
                  }`}
                >
                  <span>주문내역 관리</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/order/sales"
                  className={` ${
                    splitLocation[3] === "sales" ? styles.active : ""
                  }`}
                >
                  <span>매출 관리</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "customer" ? styles.menu_dep1_active : ""
            }`}
          >
            <p>
              <span>고객지원 관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/customer/notice"
                  className={` ${
                    splitLocation[3] === "notice" ? styles.active : ""
                  }
                  `}
                >
                  <span>공지사항</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/customer/qna"
                  className={` ${
                    splitLocation[3] === "qna" ? styles.active : ""
                  }
                  `}
                >
                  <span>자주하는 질문</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/customer/terms"
                  className={` ${
                    splitLocation[3] === "terms" ? styles.active : ""
                  }`}
                >
                  <span>이용약관</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "store" ? styles.menu_dep1_active : ""
            }`}
          >
            <p>
              <span>매장별 설정 관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/store/info"
                  className={` ${
                    splitLocation[3] === "info" ? styles.active : ""
                  }`}
                >
                  <span>매장 정보</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/store/receive"
                  className={` ${
                    splitLocation[3] === "receive" ? styles.active : ""
                  }`}
                >
                  <span>수령 방법</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/store/display"
                  className={` ${
                    splitLocation[3] === "display" ? styles.active : ""
                  }`}
                >
                  <span>상품 전시</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/store/status"
                  className={` ${
                    splitLocation[3] === "status" ? styles.active : ""
                  }`}
                >
                  <span>판매 상태</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "user" ? styles.menu_dep1_active : ""
            }`}
          >
            <Link to="/admin/user">
              <span>사용자 관리</span>
            </Link>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "account" ? styles.menu_dep1_active : ""
            }`}
          >
            <Link to="/admin/account">
              <span>계정/권한 관리</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenuLayout;