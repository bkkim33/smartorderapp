import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/LoginLayout";
import { Icons } from "../../../components/Icon";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function AdminMailVerifyPage() {
  const navigate = useNavigate();
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
            <p className="title2 mb_10">
              <span>비밀번호를 변경할</span>
              <span>이메일 주소를 입력해 주세요.</span>
            </p>
            {/* <p className="title2 mb_10">비밀번호 찾으세요?</p> */}
            <div className="adminlogin_box_input align column ">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  placeholder="이메일 입력"
                />
              </div>
            </div>
            {/* <div className="red required_lft mt_5 ml_5">
              이메일 주소를 입력해주세요.
            </div> */}
            {/* <div className="red required_lft mt_5 ml_5">
              이메일 형식이 올바르지 않습니다.
            </div>
            <div className="red required_lft mt_5 ml_5">
              인증번호가 맞지 않습니다.
              <span className="ml_5">다시 인증번호를 요청하세요.</span>
            </div> */}
            <div className="adminlogin_btn mt_20">
              <div>
                <Button
                  onClick={() => {
                    navigate("/admin/mail/info");
                  }}
                  color="blue"
                  size="full"
                  type="pc"
                >
                  비밀번호 변경
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