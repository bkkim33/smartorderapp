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

function UserCreatePage() {
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
        <h1 className="headline2">고객 정보 등록</h1>
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
            <th className="required">ID (이메일주소)</th>
            <td className="left">
              <div className="align start">
                <Input
                  width="400px"
                  onClick={() => {}}
                  placeholder="ID를 입력해 주세요."
                />
                <span className="required_lft red ml_10">ID를 입력해 주세요.</span>
              </div>
            </td>
          </tr>
          <tr>
            <th className="required">이름</th>
            <td className="left">
              <div className="align start">
                <Input
                  width="400px"
                  onClick={() => {}}
                  placeholder="이름을 입력해 주세요."
                />
                <span className="required_lft red ml_10">
                  이름을 입력해 주세요.
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <th className="required">전화번호</th>
            <td className="left">
              <div className="align start">
                <Input
                  width="400px"
                  onClick={() => {}}
                  phone="number"
                  placeholder="전화번호를 입력해 주세요."
                  maxLength={13}
                />
                <span className="required_lft red ml_10">
                  전화번호를 입력해 주세요.
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <th className="required">소속</th>
            <td className="left">
              <div className="align bottom start">
                <div className="item wrap" style={{ width: "min-content" }}>
                  <div className="align top start">
                    <div className="item">
                      <Button
                        color="gray"
                        icon="Delete"
                        line
                        size="icon_s"
                        txtColor="txtgray"
                        type="pc"
                        iconStyle={{
                          width: 14,
                          height: 14,
                        }}
                      >
                        삭제
                      </Button>
                    </div>
                    <div className="item">
                      <Select
                        maxwidth="400px"
                        minwidth="355px"
                        placeholder="소속"
                        options={companyOpt}
                      />
                    </div>
                  </div>
                  <div className="align top start mt_10">
                    <div className="item">
                      <Button
                        color="gray"
                        icon="Delete"
                        line
                        size="icon_s"
                        txtColor="txtgray"
                        type="pc"
                        iconStyle={{
                          width: 14,
                          height: 14,
                        }}
                      >
                        삭제
                      </Button>
                    </div>
                    <div className="item">
                      <Select
                        maxwidth="400px"
                        minwidth="355px"
                        placeholder="소속"
                        options={companyOpt}
                      />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <Button
                    color="gray"
                    icon="Plus"
                    line
                    size="icon_s"
                    txtColor="txtgray"
                    type="pc"
                    onClick={() => {}}
                  >
                    옵션가 추가
                  </Button>
                  <span className="required_lft red ml_10">
                    소속을 선택해 주세요.
                  </span>
                </div>
              </div>
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
            고객 등록
          </Button>
        </div>
        {/* <MuiAlert
          open={open}
          onClose={handleClose}
          type="admin"
          iconColor="red"
          title={
            <>
              이미 등록된 계정입니다.
              <br />
              계정 정보를 확인해 보세요.
            </>
          }
          button={
            <>
              <Button
                onClick={handleClose}
                type="pc"
                color="black"
                size="small"
              >
                확인
              </Button>
            </>
          }
        /> */}
        <MuiAlert
          open={open}
          onClose={handleClose}
          type="admin"
          title={
            <>
              입력한 정보로 고객 정보를 <br />
              등록하시겠습니까?
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
                onClick={() => navigate("/admin/users/user")}
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
          title={<>고객 정보 등록을 취소하시겠습니까?</>}
          desc={<>작성된 내용이 저장되지 않습니다.</>}
          button={
            <>
              <Button onClick={handleClose05} color="gray" line size="small">
                아니오
              </Button>
              <Button
                onClick={() => navigate("/admin/users/user")}
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

export default UserCreatePage;
