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
      <div>
        <Icons.AdminHeaderLogo width={"100%"} height={66} fill="#fff" />
        <p>
          <span>클라우드카페</span>
          <span>2023.11.10 (금)</span>
          <span>15:52:25</span>
        </p>
        <ul>
          <li>
            <Link
              to="/admin/customer/qna"
              className={` ${splitLocation[3] === "qna" ? styles.active : ""}
                `}
            >
              제조현황
            </Link>
          </li>
          <li>
            <Link
              to="/admin/customer/qna"
              className={` ${splitLocation[3] === "qna" ? styles.active : ""}
                `}
            >
              제조완료
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.user_util} ${"mt_20"}`}>
        <button
          onClick={() => navigate("/admin/myprofile/profile")}
          className={`${styles.user_button} ${""}`}
        >
          <Icons.Setting width={16} height={16} fill="#3A3A3A" />
          <span className="ml_7">환경설정</span>
        </button>
        <button
          onClick={() => {
            navigate("/kds");
          }}
          className={`${styles.user_button} ${""}`}
        >
          <span>로그아웃</span>
        </button>
      </div>
    </header>
  );
}

export default HeaderLayout;