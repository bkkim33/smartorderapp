import React, { useState } from "react";
import Layout from "../../../layout/DefaultLayout";
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function ChangePassword() {

  const [errorMessages, setErrorMessages] = useState({
    currentPasswordError: "",
    newPasswordError: "",
    confirmPasswordError: "",
  });

  const handlePasswordUpdate = () => {
    const currentPassword = ""; 
    const newPassword = ""; 
    const confirmPassword = {newPassword}; 
  
    const newErrorMessages = {
      currentPasswordError: currentPassword !== "1234" ? "* 현재 사용하고 있는 비밀번호가 아닙니다." : "",
      newPasswordError: newPassword.length < 4 || newPassword.length > 20 ? "* 비밀번호는 4~20자 이내여야 합니다." : "",
      confirmPasswordError: newPassword !== confirmPassword ? "* 새로운 비밀번호와 다릅니다." : "",
    };
  
    setErrorMessages(newErrorMessages);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">비밀번호 변경</h1>
      </div>
      <hr className="primary"/>
      <ContentBox>
        <div className="admin_myprofile">
          <Table globalClass="changepasswordbox" colgroup={[<col key="col1" width="20%" />, <col key="col2"/>]}>
            <tr key="currentPassword">
              <th>현재 비밀번호</th>
              <td>
                <Input
                  placeholder="현재 비밀번호 입력"
                  shape="round"
                  type="password"
                />
                {errorMessages.currentPasswordError && (
                  <div className="error_txt mt_5 ml_5">{errorMessages.currentPasswordError}</div>
                )}
              </td>
            </tr>
            <tr key="newPassword">
              <th>새로운 비밀번호</th>
              <td>
                <Input
                  type="password"
                  shape="round"
                  placeholder="4~20자의 영문, 숫자 특수문자 조합으로 입력"
                  maxLength={20}
                />
                {errorMessages.newPasswordError && (
                  <div className="error_txt mt_5 ml_5">{errorMessages.newPasswordError}</div>
                )}
              </td>
            </tr>
            <tr key="confirmPassword">
              <th>비밀번호 확인</th>
              <td>
                <Input
                  type="password"
                  shape="round"
                  placeholder="새로운 비밀번호 재입력"
                />
                {errorMessages.confirmPasswordError && (
                  <div className="error_txt mt_5 ml_5">{errorMessages.confirmPasswordError}</div>
                )}
              </td>
            </tr>
          </Table>
          <div className="align end mt_20">
            <Button onClick={handlePasswordUpdate} btntype="c11" size="xlarge">
              확인
            </Button>
          </div>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default ChangePassword;
