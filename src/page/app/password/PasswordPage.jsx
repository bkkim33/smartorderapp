import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppLoginLayout";
import MainimgDefult from "../../../images/main_img.gif";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FormGroup from "../../../components/FormGroup";
import Checkbox from "../../../components/Checkbox";

// import { Icons } from "../../components/Icon";

function PasswordPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="login">
        {/* <div className="align top login_visual">
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
            <img src={MainimgDefult} alt="유저 이미지" />
          </div>
        </div> */}
        <div className="login_content">
          <div className="login_box">
            <p>현재 비밀번호를 입력하세요.</p>
            <div className="login_box_input align column ">
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
              ID를 입력해주세요. <br />
              <span className="ml_10">잘못된 ID 형식입니다.</span>
            </div>
            <p>현재 비밀번호를 입력하세요.</p>
            <div className="login_box_input align column ">
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
            <div className="error_txt required_lft mt_5 ml_5">
              비밀번호를 입력해주세요.
            </div>
            <p>현재 비밀번호를 입력하세요.</p>
            <div className="login_box_input align column ">
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
            <div className="error_txt required_lft mt_5 ml_5">
              ID 또는 비밀번호를 확인해주세요.
            </div>
            <div className="login_btn mt_20">
              <div>
                <Button
                  btntype="blue"
                  onClick={() => {
                    navigate("/");
                  }}
                  size="full"
                >
                  비밀번호 변경하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PasswordPage;
