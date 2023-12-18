import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input"
import Button from "../../../components/Button"

function Profile() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="align mb_25">
        <h1 className="headline2">내 프로필</h1>
      </div>
      <ContentBox>
        <div className="admin_myprofile">
          <Table
            colgroup={
              <>
                <col width="10%" />
                <col width="auto" />
              </>
            }
          >
            <tr>
              <th>소속</th>
              <td className="left">메가존 디지털</td>
            </tr>
            <tr>
              <th>권한</th>
              <td className="left">
                <ul className="pt_5 pb_5">
                  <li>- 카페서비스 관리자</li>
                  <li className="color_t_bb mt_10">- 매장 관리자</li>
                  <li className="color_t_bb mt_10">- 어드민 관리자</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td className="left">홍길동</td>
            </tr>
            <tr>
              <th>아이디</th>
              <td className="left">Admin</td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td className="left">
                <div className="align start">
                  <Input
                    width="200px"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요."
                    globalClass="password"
                    defaultValue="0000000000"
                    disabled
                  />
                  <Button
                    onClick={() => navigate("/admin/myprofile/changepassword")}
                    color="point"
                    size="small"
                    type="pc"
                    globalClass="ml_10"
                  >
                    변경
                  </Button>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default Profile;