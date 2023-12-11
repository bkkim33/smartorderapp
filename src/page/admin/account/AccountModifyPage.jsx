import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import MuiAlert from "../../../components/MuiAlert";

function AccountModify() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open01, setOpen01] = useState(false);
  const handleOpen01 = () => {
    setOpen01(true);
  };
  const handleClose01 = () => {
    setOpen01(false);
  };
  
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">권한 변경</h1>
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
              <p className="body0 color_t_99">클라우드 카페</p>
            </td>
          </tr>
          <tr>
            <th className="required">관리자명</th>
            <td className="left">
              <p className="body0 color_t_99">홍길동</p>
            </td>
          </tr>
          <tr>
            <th className="required">ID</th>
            <td className="left">
              <p className="body0 color_t_99">admin01</p>
            </td>
          </tr>
          <tr>
            <th className="required">비밀번호</th>
            <td className="left">
              <Input
                onClick={() => {}}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                defaultValue="1234567890"
                disabled
                width="350px"
              />
            </td>
          </tr>
          <tr>
            <th className="required">어드민 권한</th>
            <td className="left">
              <Select
                maxwidth="350px"
                placeholder="선택"
                defaultValue={0}
                options={[
                  {
                    label: "카페서비스 관리자",
                    value: "카페서비스 관리자",
                  },
                  {
                    label: "매장 관리자",
                    value: "매장 관리자",
                  },
                  {
                    label: "어드민 관리자",
                    value: "어드민 관리자",
                  },
                ]}
              />
            </td>
          </tr>
        </Table>
        <div className="align center gap_10 mt_30">
          <Button onClick={handleOpen} type="pc" color="red" line size="small">
            계정 삭제
          </Button>
          <Button
            onClick={() => {
              navigate("/admin/account");
            }}
            type="pc"
            color="gray"
            line
            size="small"
          >
            취소
          </Button>
          <Button onClick={handleOpen01} type="pc" color="black" size="small">
            저장
          </Button>
        </div>
      </ContentBox>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={<>계정을 삭제하시겠습니까?</>}
        desc={
          <>
            계정을 삭제하면 <br />
            <span className="red_text">
              계정에 연결된 모든 정보가 삭제되며, <br />
              삭제된 계정은 복구되지 않습니다.
            </span>
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
              취소
            </Button>
            <Button
              onClick={() => {
                navigate("/admin/account");
              }}
              type="pc"
              color="black"
              size="small"
            >
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={open01}
        onClose={handleClose01}
        type="admin"
        title={
          <>
            수정된 내용을 <br /> 저장 하시겠습니까?
          </>
        }
        button={
          <>
            <Button
              onClick={handleClose01}
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
    </Layout>
  );
}

export default AccountModify;
