import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input"
import Button from "../../../components/Button"

function Profile() {
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
            <th>소속</th>
            <td>메가존 디지털</td>
          </tr>
          <tr>
            <th>권한</th>
            <td>
              <ul>
                <li>- 카페서비스 관리자</li>
                <li className="color_t_bb">- 매장 관리자</li>
                <li className="color_t_bb">- 어드민 관리자</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>홍길동</td>
          </tr>
          <tr>
            <th>아이디</th>
            <td>Admin</td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td className="align passwordbox">
              <Input
                placeholder="**********"
                type='password'
                shape="none"
                disabled
                globalClass="password"
              />
              <Button 
              onClick={() => {}}
              round
              size="xsmall">
                변경
              </Button>
            </td>
          </tr>
        </Table>
      </div>
      </ContentBox>
    </Layout>
  );
}

export default Profile;