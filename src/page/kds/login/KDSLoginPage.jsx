import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/KDSLoginLayout";
// import Mainimg10 from "../../../images/main_img10.gif";
// import Mainimg12 from "../../../images/main_img12.gif";
// import MainimgDefult from "../../../images/main_img.gif";

import {Icons} from "../../../components/Icon";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FormGroup from "../../../components/FormGroup";
import Checkbox from "../../../components/Checkbox";

// import { Icons } from "../../components/Icon";


// function Dateimages() {
//   const today = new Date();
//   // 현재 날짜를 가져옵니다.

//   const formattedDate = today.getMonth() + 1;
//   // 원하는 형식으로 날짜를 설정합니다.
//   switch (formattedDate) {
//     case 10:
//       return <img src={Mainimg10} alt="유저 이미지" />;
//     case 12:
//       return <img src={Mainimg12} alt="유저 이미지" />;
//     default:
//       return <img src={MainimgDefult} alt="유저 이미지" />;
//   }
// }

function KDSLoginPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="kdslogin">
        <div className="kdslogin_visual">
          <i>
            <Icons.AdminHeaderLogo width={"100%"} height={152} fill="#fff" />
          </i>
        </div>
        <div className="kdslogin_content mt_60">
          <div className="kdslogin_box">
            <div className="kdslogin_box_input align column ">
              <div>
                <label htmlFor="">
                  <Icons.KDSIDinput fill="#fff" />
                </label>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="kdslogin_input"
                  placeholder="ID (@ 앞 부분만 입력)"
                />
              </div>
              <div className="mt_20">
                <label htmlFor="">
                  <Icons.KDSPWinput fill="#fff" />
                </label>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="kdslogin_input"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="error_txt mt_15">ID를 입력해주세요.</div>

            {/* <div className="error_txt required_lft mt_5 ml_5">
              비밀번호가 맞지 않습니다.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              비밀번호를 입력해주세요.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              ID 또는 비밀번호를 확인해주세요.
            </div> */}
            <div className="kdslogin_btn_box mt_24">
              <div>
                <Button
                  globalClass="kdslogin_btn"
                  color="blue"
                  onClick={() => {
                    navigate("/kds/main");
                  }}
                  size="full"
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="align mt_25">
              <FormGroup>
                <Checkbox
                  name="contact00"
                  id="check1"
                  value="Login"
                  txt={"로그인 유지"}
                  globalClass="kdslogin_check"
                />
              </FormGroup>
              <Button
                none
                onClick={() => {
                  navigate("/kds/mail");
                }}
                globalClass="kdslogin_link"
              >
                비밀번호 찾기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default KDSLoginPage;
