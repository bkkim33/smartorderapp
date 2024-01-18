import React, { useEffect } from "react";
import { Icons } from "../components/Icon";
import styles from "../styles/layout/kdslayout.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HeaderLayout() {
  
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
    <header className={`${styles.header}`}>
      <div className={`${styles.header_top}`}>
        <button></button>
        <Icons.AdminHeaderLogo width={"100%"} fill="#fff" />
        <p className={`${styles.util} ${"mt_20"}`}>
          <span className={`${styles.util_title}`}>클라우드카페</span>
          <span className="mt_10">2023.11.10 (금)</span>
          <span>15:52:25</span>
        </p>
      </div>
      <ul className={`${styles.link_btn}`}>
        <li>
          <Link to="/kds/main">
            <Icons.KDSMenu1 width={39} height={39} fill="#3A3A3A" />
            <span>제조현황</span>
          </Link>
        </li>
        <li className="mt_20">
          <Link to="/kds/endorder">
            <Icons.KDSMenu2 width={39} height={39} />
            <span>제조완료</span>
          </Link>
        </li>
      </ul>
      <div className={`${styles.user_util} ${"mt_50"}`}>
        <button
          onClick={() => navigate("/kds/setting")}
          className={`${styles.user_button} ${""}`}
        >
          <Icons.KDSSet />
          <span className="ml_7">환경설정</span>
        </button>
        <button
          onClick={() => {
            navigate("/kds");
          }}
          className={`${styles.user_button} ${""}`}
        >
          <Icons.KDSlog />
          <span className="ml_7">로그아웃</span>
        </button>
      </div>
    </header>
  );
}

export default HeaderLayout;