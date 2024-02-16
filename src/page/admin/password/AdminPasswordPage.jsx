import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/LoginLayout";
import { Icons } from "../../../components/Icon";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import MuiAlert from "../../../components/MuiAlert";

function AdminPasswordPage() {
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
      <div className="adminlogin">
        <div className="adminlogin_visual">
          <i>
            <Icons.AdminLogo width={"100%"} height={50} fill="#303033" />
          </i>
          <p className="mt_30 mb_10 pl_20 pr_20">
            <span className="headline0">
              <strong>
                <em className="neon">새로운 비밀번호로</em>
              </strong>
            </span>
            <span>
              <strong>
                <em className="neon">변경해주세요.</em>
              </strong>
            </span>
          </p>
        </div>
        <div className="adminlogin_content">
          <div className="adminlogin_box">
            <p className="title2 mb_10">새로운 비밀번호를 입력해 주세요.</p>
            <div className="adminlogin_box_input">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="adminlogin_input"
                  type="password"
                  placeholder="4~20자의 영문, 숫자, 특수문자 조합으로 입력"
                />
              </div>
            </div>
            {/* <div className="error_txt required_lft mt_5 ml_5">
              비밀번호는 4~20자 이내여야 합니다.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              현재 사용하고 있는 비밀번호입니다.
            </div> */}
            <p className="title2 mt_25 mb_10">
              새로운 비밀번호를 확인해 주세요.
            </p>
            <div className="adminlogin_box_input">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="adminlogin_input"
                  type="password"
                  placeholder="비밀번호 재입력"
                />
              </div>
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              새로운 비밀번호와 다릅니다.
            </div>
            <div className="adminlogin_btn mt_20">
              <div>
                <Button size="full" color="blue" onClick={handleOpen}>
                  변경
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MuiAlert
        open={open}
        onClose={handleClose}
        title={
          <>
            비밀번호가 변경되었습니다.
            <br /> 다시 로그인해주세요.{" "}
          </>
        }
        button={
          <>
            <Button
              color="point"
              size="full"
              onClick={() => {
                navigate("/admin");
              }}
            >
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default AdminPasswordPage;
