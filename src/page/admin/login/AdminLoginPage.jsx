import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/LoginLayout";
import { Icons } from "../../../components/Icon";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import FormGroup from "../../../components/FormGroup";
import Checkbox from "../../../components/Checkbox";

function AdminLoginPage() {
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
            <div className="adminlogin_box_input align column ">
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="adminlogin_input"
                  placeholder="ID (@ 앞 부분만 입력)"
                />
              </div>
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="adminlogin_input"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="red required_lft mt_5 ml_5">ID를 입력해주세요.</div>
            {/* <div className="red required_lft mt_5 ml_5">
              비밀번호가 맞지 않습니다.
            </div>
            <div className="red required_lft mt_5 ml_5">
              비밀번호를 입력해주세요.
            </div>
            <div className="red required_lft mt_5 ml_5">
              ID 또는 비밀번호를 확인해주세요.
            </div> */}
            <div className="adminlogin_btn mt_20">
              <div>
                <Button
                  type="pc"
                  color="blue"
                  size="full"
                  onClick={() => {
                    navigate("product/product");
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="align mt_20">
              <FormGroup>
                <Checkbox
                  name="contact00"
                  id="check1"
                  value="Login"
                  txt={"로그인 유지"}
                />
              </FormGroup>
              <Button
                onClick={() => {
                  navigate("/admin/mail");
                }}
                color="blue"
                none
                size="xsmall"
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

export default AdminLoginPage;
