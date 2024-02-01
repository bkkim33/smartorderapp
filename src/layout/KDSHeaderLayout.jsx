import React, { useEffect, useState } from "react";
import { Icons } from "../components/Icon";
import styles from "../styles/layout/kdslayout.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import MuiAlert from "../components/MuiAlert";

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

    const [open02, setOpen02] = useState(false);

    const handleOpen02 = () => {
      setOpen02(true);
    };
    const handleClose02 = () => {
      setOpen02(false);
    };

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.header_top}`}>
          <Icons.KDSLogo width={25} fill="#fff" />
        </div>
        <ul className={`${styles.link_btn}`}>
          <li>
            <Link to="/kds/main">
              <Icons.KDSMenu1 width={25} height={25} fill="#3A3A3A" />
              <span>제조현황</span>
            </Link>
          </li>
          <li className="mt_30">
            <Link to="/kds/endorder">
              <Icons.KDSMenu2 width={25} height={25} />
              <span>제조완료</span>
            </Link>
          </li>
          <li className="mt_30">
            <Link to="/kds/pick">
              <Icons.KDSMenu3 width={25} height={25} />
              <span>픽업현황</span>
            </Link>
          </li>
        </ul>
        <div className={`${styles.user_util}`}>
          <button
            onClick={() => navigate("/kds/setting")}
            className={`${styles.user_button} ${""}`}
          >
            <Icons.KDSSet />
            <span className="ml_7">환경설정</span>
          </button>
          <button
            onClick={handleOpen02}
            className={`${styles.user_button} ${""}`}
          >
            <Icons.KDSlog />
            <span className="ml_7">로그아웃</span>
          </button>
        </div>
      </header>
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        type="kds"
        title={<>로그아웃 하시겠습니까?</>}
        button={
          <>
            <Button onClick={handleClose02} globalClass="kdsalert_btn cancle">
              취소
            </Button>
            <Button
              onClick={() => {
                navigate("/kds");
              }}
              globalClass="kdsalert_btn confirm"
            >
              확인
            </Button>
          </>
        }
      />
    </>
  );
}

export default HeaderLayout;