import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppLoginLayout";
import Mainimg10 from "../../../images/main_img10.gif";
import Mainimg12 from "../../../images/main_img12.gif";
import MainimgDefult from "../../../images/main_img.gif";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

//mui table import
import MuiAlert from "../../../components/MuiAlert";

function Dateimages() {
  const today = new Date();
  // 현재 날짜를 가져옵니다.

  const formattedDate = today.getMonth() + 1;
  // 원하는 형식으로 날짜를 설정합니다.
  switch (formattedDate) {
    case 10:
      return <img src={Mainimg10} alt="유저 이미지" />;
    case 12:
      return <img src={Mainimg12} alt="유저 이미지" />;
    default:
      return <img src={MainimgDefult} alt="유저 이미지" />;
  }
}
function PasswordPage() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className="login">
      <div className="login_visual middle align">
          <div className="lft">
            <p>
              <span className="headline0">
                <strong>
                  <em className="neon">새로운</em>
                </strong>
              </span>
              <span>
                <strong>
                  <em className="neon">비밀번호로</em>
                </strong>
              </span>
              <span>
                <strong>
                  <em className="neon">변경해주세요.</em>
                </strong>
              </span>
            </p>
          </div>
          <div className="rgt">
            <Dateimages />
          </div>
        </div>
        <div className="login_content">
          <div className="login_box">
            <p className="title2 mb_10">현재 비밀번호를 입력하세요.</p>
            <div className="login_box_input">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  type="password"
                  placeholder="현재 비밀번호 입력"
                />
              </div>
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              현재 사용하고 있는 비밀번호가 아닙니다.
            </div>
            <p className="title2 mt_25 mb_10">새로운 비밀번호를 입력하세요.</p>
            <div className="login_box_input">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  type="password"
                  placeholder="4~20자의 영문, 숫자, 특수문자 조합으로 입력"
                />
              </div>
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              비밀번호는 4~20자 이내여야 합니다.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              현재 사용하고 있는 비밀번호입니다.
            </div>
            <p className="title2 mt_25 mb_10">새로운 비밀번호를 확인해주세요.</p>
            <div className="login_box_input">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  type="password"
                  placeholder="비밀번호 재입력"
                />
              </div>
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              새로운 비밀번호와 다릅니다.
            </div>
            <div className="login_btn mt_20">
              <div>
                <Button btntype="blue" onClick={handleOpen} size="full" >
                  비밀번호 변경하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MuiAlert
          open={open}
          onClose={handleClose}
          title={<>비밀번호가 변경되었습니다.<br/> 다시 로그인해주세요. </>}
          button={
            <>
              <Button onClick={() => { navigate("/"); }} size="full" border="point">
                확인
              </Button>
            </>
          }
        />
    </Layout>
  );
}

export default PasswordPage;
