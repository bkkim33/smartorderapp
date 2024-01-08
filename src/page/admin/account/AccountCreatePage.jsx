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
   const [open05, setOpen05] = useState(false);
   const handleOpen05 = () => {
     setOpen05(true);
   };
   const handleClose05 = () => {
     setOpen05(false);
   };
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">계정 생성</h1>
      </div>
      <ContentBox>
        <Table
          colgroup={
            <>
              <col width="12%" />
              <col />
            </>
          }
        >
          <tr>
            <th className="required">소속</th>
            <td className="left">
              <Select
                maxwidth="400px"
                placeholder="소속 선택"
                options={companyOpt}
              />
            </td>
          </tr>
          <tr>
            <th className="required">관리자명</th>
            <td className="left">
              <Input width="400px" onClick={() => {}} />
            </td>
          </tr>
          <tr>
            <th className="required">ID</th>
            <td className="left">
              <div className="align start">
                <Input
                  width="400px"
                  onClick={() => {}}
                  placeholder="ID를 입력해 주세요."
                />
                <span className="required_lft red ml_10">ID를 입력하세요.</span>
              </div>
            </td>
          </tr>
          <tr>
            <th className="required">비밀번호</th>
            <td className="left">
              <div className="align start">
                <Input
                  width="400px"
                  onClick={() => {}}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
                <span className="required_lft red ml_10">
                  비밀번호는 4~20자 이내여야 합니다.
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <th className="required">비밀번호 확인</th>
            <td className="left">
              <div className="align start">
                <Input
                  width="400px"
                  onClick={() => {}}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
                <span className="required_lft red ml_10">
                  비밀번호가 다릅니다.
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <th className="required">어드민 권한</th>
            <td className="left">
              <Select maxwidth="400px" placeholder="선택" options={rightOpt} />
            </td>
          </tr>
        </Table>
        <div className="align center mt_30 gap_10">
          <Button
            onClick={handleOpen05}
            type="pc"
            size="small"
            color="gray"
            line
          >
            취소
          </Button>
          <Button onClick={handleOpen} type="pc" size="small" color="black">
            계정 생성
          </Button>
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
              <Button
                onClick={handleClose}
                type="pc"
                color="gray"
                line
                size="small"
              >
                아니오
              </Button>
              <Button
                onClick={() => navigate("/admin/account")}
                type="pc"
                color="black"
                size="small"
              >
                네
              </Button>
            </>
          }
        />
        <MuiAlert
          open={open05}
          onClose={handleClose05}
          type="admin"
          iconColor="red"
          title={<>계정 생성을 취소하시겠습니까?</>}
          desc={<>작성된 내용이 저장되지 않습니다.</>}
          button={
            <>
              <Button onClick={handleClose05} color="gray" line size="small">
                아니오
              </Button>
              <Button
                onClick={() => navigate("/admin/account")}
                color="black"
                size="small"
              >
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
