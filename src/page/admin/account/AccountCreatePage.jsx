import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import MuiAlert from "../../../components/MuiAlert";

const companyOpt = [
  { label: '메가존 법인소속명', value: '메가존 법인소속명' },
  { label: '클라우드 카페 매장소속명', value: '클라우드 카페 매장소속명' }
]

const rightOpt = [
  { label: '카페서비스 관리자', value: '카페서비스 관리자' },
  { label: '매장 관리자', value: '매장 관리자' },
  { label: '어드민 관리자', value: '어드민 관리자' },
]

function AccountCreate() {
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
      <div className="align mb_20">
        <h1 className="headline2">계정 생성</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <div className="align column">
          <Table
            colgroup={
              <>
                <col width="20%" />
                <col />
              </>
            }
          >
            <tr>
              <th className="required">소속</th>
              <td>
                <Select placeholder="소속 선택" options={companyOpt} />
              </td>
            </tr>
            <tr>
              <th className="required">관리자명</th>
              <td>
                <Input onClick={() => {}} />
              </td>
            </tr>
            <tr>
              <th className="required">ID</th>
              <td>
                <Input onClick={() => {}} placeholder="ID를 입력해 주세요." />
              </td>
            </tr>
            <tr>
              <th className="required">비밀번호</th>
              <td>
                <Input
                  onClick={() => {}}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
              </td>
            </tr>
            <tr>
              <th className="required">비밀번호 확인</th>
              <td>
                <Input
                  onClick={() => {}}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
              </td>
            </tr>
            <tr>
              <th className="required">어드민 권한</th>
              <td>
                <Select placeholder="선택" options={rightOpt} />
              </td>
            </tr>
          </Table>
          <div className="align mt_20">
            <div className="rgt gap_10">
              <Button
                onClick={() => navigate("/admin/account")}
                size="xlarge"
                line
              >
                취소
              </Button>
              <Button onClick={handleOpen} size="xlarge" color="black">
                계정 생성
              </Button>
            </div>
          </div>
        </div>
        <MuiAlert
          open={open}
          onClose={handleClose}
          type="admin"
          title={
            <>
              입력한 정보로 <br />
              계정 생성하시겠습니까?
            </>
          }
          button={
            <>
              <Button onClick={handleClose} color="gray" line size="small">
                아니오
              </Button>
              <Button onClick={() => navigate("/admin/account")} color="black" size="small">
                네
              </Button>
            </>
          }
        />
      </ContentBox>
    </Layout>
  );
}

export default AccountCreate;
