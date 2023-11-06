import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppLoginLayout";
import Mainimg10 from "../../../images/main_img10.gif";
import Mainimg12 from "../../../images/main_img12.gif";
import MainimgDefult from "../../../images/main_img.gif";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FormGroup from "../../../components/FormGroup";
import Checkbox from "../../../components/Checkbox";

// import { Icons } from "../../components/Icon";


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

function LoginPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="login">
        <div className="align top login_visual">
          <div className="lft">
            <p>
              <span className="headline4 mb_16">We’ve already met!</span>
              <span className="headline0">
                <strong>
                  안녕하세요 <em className="bold400">:)</em>
                </strong>
              </span>
              <span>
                <em className="neon">클라우드카페</em>
              </span>
              <span>
                <em className="neon">입니다.</em>
              </span>
            </p>
          </div>
          <div className="rgt pt_30">
            <Dateimages />
          </div>
        </div>
        <div className="login_content">
          <div className="login_box">
            <div className="login_box_input align column ">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  placeholder="ID"
                />
              </div>
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login_btn mt_20">
              <div>
                <Button
                  btntype="blue"
                  onClick={() => {
                    navigate("/main");
                  }}
                  size="full"
                >
                  로그인
                </Button>
              </div>
              <div className="mt_20 pt_20">
                <Button
                  btntype="googlelogin"
                  icon="Google"
                  onClick={() => {}}
                  size="full"
                >
                  Google 계정으로 로그인
                </Button>
              </div>
            </div>
            <div className="mt_20">
              <FormGroup>
                <Checkbox name="contact00" id="check1" value="Login" txt={"로그인 상태 유지"} />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
