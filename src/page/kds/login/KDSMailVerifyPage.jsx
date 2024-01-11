import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/KDSLoginLayout";
import {Icons} from "../../../components/Icon";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function KDSMailVerifyPage() {
  const navigate = useNavigate();
  const [certification, setCertification] = useState(false);
  const certifications = () => {
    setCertification(true);
  };

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
            <div className="kdslogin_box_input align column">
              <div>
                <label htmlFor="">
                  <Icons.KDSIDinput fill="#fff" />
                </label>
                <Input                  
                  shape="none"
                  globalClass="kdslogin_input"
                  placeholder="이메일 입력"
                />
              </div>
              <div className="mt_20">
                <label htmlFor="">
                  <Icons.KDSAUTHinput fill="#fff" />
                </label>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="kdslogin_input"
                  type="text"
                  placeholder="인증번호"
                  timer={certification === true}
                />
              </div>
              {certification === false ? (
                  <Button
                    globalClass="kdslogin_btn_blue"
                    onClick={certifications}
                  >
                    인증요청
                  </Button>
                ) : (
                  <Button
                    globalClass="kdslogin_btn_blue"
                  >
                    재전송
                  </Button>
                )
              }
              
            </div>
            <div className="error_txt mt_15">
              인증번호가 맞지 않습니다. <br />
              다시 인증번호를 요청하세요.
            </div>
            <div className="kdslogin_btn mt_24">
              <div>
                <Button
                  globalClass="kdslogin_btn"
                  color="blue"
                  onClick={() => {
                    navigate("/kds");
                  }}
                  size="full"
                  disabled={certification === false}
                >
                  임시 비밀번호 전송
                </Button>
              </div>
            </div>
            <div className="align center mt_25">
              <Button
                none
                onClick={() => navigate(-1 || "/")}
                globalClass="kdslogin_link"
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

export default KDSMailVerifyPage;
