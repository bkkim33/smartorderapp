import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/LoginLayout";
import { Icons } from "../../../components/Icon";
import MainimgDefult from "../../../images/main_img.gif";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

function AdminMailVerifyInfoPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="adminlogin">
        <div className="adminlogin_visual">
          <i>
            <Icons.AdminLogo width={"100%"} height={50} fill="#303033" />
          </i>
        </div>

        <div className="login_info">
          {/* <p>
            <span>서비스 이용을 위해</span>
            <span>휴대폰 번호를 입력해주세요.</span>
          </p> */}
        </div>
        <div className="adminlogin_content">
          <div className="adminlogin_box">
            <p className="title2 mb_20">
              <span>메일을 확인해 주세요.</span>
            </p>
            <div className="adminlogin_box_info mb_20">
              <p className="title2">
                <span>admin01@mz.co.kr</span>
              </p>
            </div>
            <span className="body1 ml_5">
              메일 주소로 비밀번호 변경 메일을 보내드렸어요.
            </span>
            <div className="red mt_10 ml_5">
              해당 메일은 24시간 동안만 유효하니 그전에 확인해 주세요.
            </div>

            <div className="adminlogin_btn mt_40">
              <div>
                <Button
                  color="blue"
                  size="full"
                  onClick={() => {
                    navigate("/admin");
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

export default AdminMailVerifyInfoPage;
