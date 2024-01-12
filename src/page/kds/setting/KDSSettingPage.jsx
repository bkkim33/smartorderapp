import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/KDSDefaultLayout'
import KDSContentBox from "../../../layout/KDSContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input"
import Button from "../../../components/Button"

function KDSSettingPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <KDSContentBox>
        <div className="kdssetting">
          <div className="kdssetting_box">
            <h1 className="headline1 mb_20">환경설정</h1>
            <Table
              globalClass="kds_tablebox"
              colgroup={
                <>
                  <col width="20%" />
                  <col width="auto" />
                </>
              }
            >
              <tr>
                <th>KDS 이름</th>
                <td>MEGAZONE SMARTCAFE KDS</td>
              </tr>
              <tr>
                <th>최근 버전</th>
                <td>1.01.001</td>
              </tr>
              <tr>
                <th>IP 주소</th>
                <td>192.168.1.250</td>
              </tr>
            </Table>
          </div>
          <div className="kdssetting_box mt_80">
            <h1 className="headline1 mb_20">KDS 계정</h1>
            <Table
              globalClass="kds_tablebox"
              colgroup={
                <>
                  <col width="20%" />
                  <col width="auto" />
                </>
              }
            >
              <tr>
                <th>ID</th>
                <td>admin_01</td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <div className="align start gap_10">
                    <Input
                      width="100px"
                      type="password"
                      globalClass="kdssetting_input"
                      defaultValue="0000000000"
                      disabled
                    />
                    <Button
                      onClick={() => navigate("/kds/setting/changepassword")}
                      globalClass="kdssetting_btn_small"
                    >
                      변경
                    </Button>
                  </div>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </KDSContentBox>
    </Layout>
  );
}

export default KDSSettingPage;