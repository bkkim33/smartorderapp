import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppLoginLayout";
import MainimgDefult from "../../../images/main_img.gif";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

function MailVerifyInfoPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="login">
        <div className="login_visual middle align">
          <div className="lft">
            <p>
              {/* <span className="headline4 mb_16">We’ve already met!</span> */}
              <span className="headline0">
                <strong>
                  <em className="neon">메일을 </em>
                </strong>
              </span>
              {/* <span>
                <em className="neon"></em>
              </span> */}
              <span>
                <strong>
                  <em className="neon">확인해 주세요.</em>
                </strong>
              </span>
            </p>
          </div>
          <div className="rgt">
            <img src={MainimgDefult} alt="유저 이미지" />
          </div>
        </div>
        <div className="login_info">
          {/* <p>
            <span>서비스 이용을 위해</span>
            <span>휴대폰 번호를 입력해주세요.</span>
          </p> */}
        </div>
        <div className="login_content">
          <div className="login_box">
            <div className="login_box_info mb_20">
              <p className="title2">
                <span>partner01@mz.co.kr</span>
              </p>
            </div>
            <span className="body1 ml_5">
              메일 주소로 비밀번호 변경 메일을 보내드렸어요.
            </span>
            <div className="red mt_10 ml_5">
              해당 메일은 24시간 동안만 유효하니 그전에 확인해 주세요.
            </div>

            <div className="login_btn mt_40">
              <div>
                <Button
                  color="blue"
                  size="full"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  확인
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MailVerifyInfoPage;
