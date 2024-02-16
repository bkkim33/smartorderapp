import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/layout/layout.module.scss";

function SideMenuLayout({globalstyle}) {
  const navigate = useNavigate();
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
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/customer/caution"
                  className={` ${
                    splitLocation[3] === "caution" ? styles.active : ""
                  }`}
                >
                  <span>유의사항</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "store" ? styles.menu_dep1_active : ""
            }`}
          >
            <Link
              to="/admin/store"
              className={` ${
                splitLocation[2] === "store" ? styles.active : ""
              }`}
            >
              <span>매장별 설정 관리</span>
            </Link>
          </li>
          <li
            className={`${styles.menu_dep1} ${
              splitLocation[2] === "users" ? styles.menu_dep1_active : ""
            }`}
          >
            <p>
              <span>고객 관리</span>
            </p>
            <ul className={`${styles.menu_dep2_wrap}`}>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/users/user"
                  className={` ${
                    splitLocation[3] === "user" ? styles.active : ""
                  }
                  `}
                >
                  <span>고객 관리</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep2}`}>
                <Link
                  to="/admin/users/company"
                  className={` ${
                    splitLocation[3] === "company" ? styles.active : ""
                  }
                  `}
                >
                  <span>소속 관리</span>
                </Link>
              </li>
            </ul>
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
        <Button
          onClick={() => {
            navigate("/admin");
          }}
          color="red"
          none
          type="pc"
          globalClass={`${styles.menu_btn} ${"mt_20 pl_10"}`}
        >
          로그아웃
        </Button>
      </nav>
    </aside>
  );
}

export default SideMenuLayout;