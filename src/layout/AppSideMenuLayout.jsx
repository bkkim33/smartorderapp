import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layout/applayout.module.scss";
import Button from "../components/Button";
import { Icons } from "../components/Icon";
import Userimg from "../images/user_img.gif";

function SideMenuLayout({ globalstyle, onClose, open }) {
  // const location = useLocation();

  //destructuring pathname from location
  // const { pathname } = location;

  //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");

  // useEffect((open) => {
  //   // modal이 떠 있을 땐 스크롤 막음
  //   disableScroll();
  //   // modal 닫히면 다시 스크롤 가능하도록 함
  //   return () => enableScroll();
  // }, []);

  return (
    <>
      <aside
        className={`${styles.menu} ${open ? styles.open : ""} ${
          globalstyle | ""
        }`}
      >
        <nav>
          <div className={`${styles.menu_top}`}>
            <div className={`${styles.menu_header}`}>
              <Button icon="Home" none onClick={() => {}} size="icon_s">
                button
              </Button>
              <Button icon="Delete" none onClick={onClose} size="icon_s">
                닫기
              </Button>
            </div>
            <div className={`${"align mt_30"} ${styles.menu_user}`}>
              <div className={`${"lft"} ${styles.menu_user_txt}`}>
                <p>
                  <span>
                    <strong className="neon">김이준</strong> 님,
                  </span>
                  <span>좋은 하루 보내세요!</span>
                </p>
              </div>
              <div className={`${"rgt"} ${styles.menu_user_img}`}>
                <img src={Userimg} alt="유저 이미지" />
              </div>
            </div>
          </div>
          <div className={`${styles.menu_bottom}`}>
            <ul className={`${styles.menu_wrap} `}>
              <li className={`${styles.menu_dep1}`}>
                <Link to="/admin/login">
                  <Icons.MenuCoupon width={16} height={16} fill="#3A3A3A" />
                  <span>쿠폰함</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep1}`}>
                <Link to="/admin/login">
                  <Icons.MenuOrder width={16} height={16} fill="#3A3A3A" />
                  <span>주문내역</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep1}`}>
                <Link to="/admin/login">
                  <Icons.MenuPrivacy width={16} height={16} fill="#3A3A3A" />
                  <span>내 정보</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep1}`}>
                <Link to="/admin/login">
                  <Icons.MenuNotice width={16} height={16} fill="#3A3A3A" />
                  <span>공지사항</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep1}`}>
                <Link to="/admin/login">
                  <Icons.Question width={16} height={16} fill="#3A3A3A" />
                  <span>자주하는 질문</span>
                </Link>
              </li>
              <li className={`${styles.menu_dep1}`}>
                <Link to="/admin/login">
                  <Icons.Infomation width={16} height={16} fill="#3A3A3A" />
                  <span>이용약관</span>
                </Link>
              </li>
            </ul>
            <Button none onClick={() => {}} size="small">
              로그아웃
            </Button>
          </div>
        </nav>
      </aside>
      <div className={`${styles.dimd} ${open ? styles.open : ""}`}></div>
    </>
  );
}

export default SideMenuLayout;