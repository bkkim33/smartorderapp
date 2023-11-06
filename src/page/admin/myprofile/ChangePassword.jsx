import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input"
import Button from "../../../components/Button"

function ChangePassword() {
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">내 프로필</h1>
      </div>
      <ContentBox>
        <div className="myprofile">
          <Table           
            colgroup={[
              <col width="20%" />,
              <col />,
            ]}>
            <tr>
              <th>현재 비밀번호</th>
              <td>
                <Input
                  onClick={() => {}}
                  shape="round"
                  type="password"
                  placeholder="현재 비밀번호 입력"
                />
                <span className="error_txt">* 현재 사용하고있는 비밀번호가 아닙니다.</span>
              </td>
            </tr>
            <tr>
              <th>새로운 비밀번호</th>
              <td>
                <Input
                  onClick={() => {}}
                  shape="round"
                  type="password"
                  placeholder="4~20자의 영문, 숫자 특수문자 조합으로 입력"
                />
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td>
                <Input
                  onClick={() => {}}
                  shape="round"
                  type="password"
                  placeholder="새로운 비밀번호 재입력"
                />
              </td>
            </tr>
          </Table>
        </div>
      </ContentBox>
      <Button>확인</Button>
    </Layout>
  );
}

export default ChangePassword;