import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/LoginLayout";
// import Mainimg10 from "../../../images/main_img10.gif";
// import Mainimg12 from "../../../images/main_img12.gif";
// import MainimgDefult from "../../../images/main_img.gif";

import { Icons } from "../../../components/Icon";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

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

function AdminMailVerifyPage() {

  const navigate = useNavigate();
  const [certification, setCertification] = useState(false);
  const certifications = () => {
    setCertification(true);
  };

  return (
    <Layout>
      <div className="adminlogin">
        <div className="adminlogin_visual">
          <i>
            <Icons.AdminLogo width={"100%"} height={50} fill="#303033" />
          </i>
        </div>
        <div className="adminlogin_content mt_30">
          <div className="adminlogin_box">
          <p className="title2 mb_10">비밀번호 찾으세요?</p>
            <div className="adminlogin_box_input align column ">
              <div>
                <Input
                  onClick={certifications}
                  certification={certification}
                  shape="none"
                  globalClass="adminlogin_input"
                  placeholder="이메일 입력"
                  phone
                  maxLength={13}
                />
              </div>
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="adminlogin_input"
                  type="text"
                  placeholder="인증번호 입력"
                  timer={certification === true}
                  disabled={certification === false}
                />
              </div>
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              이메일 주소를 입력해주세요.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              이메일 형식이 올바르지 않습니다.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              인증번호가 맞지 않습니다. <br />
              <span className="ml_10">다시 인증번호를 요청하세요.</span>
            </div>
            <div className="adminlogin_btn mt_20">
              <div>
                <Button                  
                  onClick={() => {
                    navigate("/admin");
                  }}
                  disabled={certification === false}
                  color="blue"
                  size="full"
                >
                  임시 비밀번호 전송
                </Button>
              </div>
            </div>
            <div className="align center mt_10">
              <Button
                onClick={() => navigate(-1 || "/")}
                color="blue"
                none
                size="xsmall"
              >
                뒤로가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminMailVerifyPage;
