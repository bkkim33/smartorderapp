import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

//mui table import
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
  
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">계정 생성</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <div className="align column">
          <div className="mb_20">
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
                  <p className="body0 color_t_99">클라우드 카페</p>
                </td>
              </tr>
              <tr>
                <th className="required">관리자명</th>
                <td>
                  <p className="body0 color_t_99">홍길동</p>
                </td>
              </tr>
              <tr>
                <th className="required">ID</th>
                <td>
                  <p className="body0 color_t_99">admin01</p>
                </td>
              </tr>
              <tr>
                <th className="required">비밀번호</th>
                <td>
                  <Input
                    onClick={() => {}}
                    type="password"
                    placeholder="비밀번호를 입력해 주세요."
                    defaultValue="1234567890"
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <th className="required">어드민 권한</th>
                <td>
                  <Select
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
          </div>
          <div className="align end">
            <div className="rgt gap_10">
              <Button onClick={handleOpen} size="xlarge" btntype="gray" border>
                계정 삭제
              </Button>
              <Button
                onClick={() => {
                  navigate("/admin/account");
                }}
                size="xlarge"
                line
              >
                취소
              </Button>
              <Button
                onClick={() => {
                  navigate("/admin/account");
                }}
                size="xlarge"
                btntype="c11"
              >
                저장
              </Button>
            </div>
          </div>
        </div>
      </ContentBox>
      <MuiAlert
        open={open}
        onClose={handleClose}
        title={
          <>
            계정을 삭제하면 <br />
            <span className="red_text">
              계정에 연결된 모든 정보가 삭제되며, 삭제된 계정은 복구되지
              않습니다.
            </span>
            <br />
            계정을 삭제하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={handleClose} line>
              취소
            </Button>
            <Button
              onClick={() => {
                navigate("/admin/account");
              }}
              border="point"
            >
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default AccountModify;
