import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiModal from "../../../components/MuiModal";
import FormGroup from "../../../components/FormGroup";
import Radio from "../../../components/Radio";
import MuiPage from "../../../components/MuiPage";
import TextToggle from "../../../components/TextToggle";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const categoryOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "임직원 법인명",
    value: "임직원 법인명",
  },
  {
    label: "입주사 회사명",
    value: "입주사 회사명",
  },
  {
    label: "방문객",
    value: "방문객",
  },
]

const storeNameOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "클라우드 카페",
    value: "클라우드 카페",
  },
  {
    label: "클라우드 9 카페",
    value: "클라우드 9 카페",
  },
];

const numOpt = [
  {
    label: "20개씩 보기",
    value: "20개씩 보기",
  },
  {
    label: "30개씩 보기",
    value: "30개씩 보기",
  },
  {
    label: "50개씩 보기",
    value: "50개씩 보기",
  },
];


function OrderDetailPage() {
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
        <h1 className="headline2">주문 내역 관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox top>
        <Table
          colgroup={
            <>
              <col width="15%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th>주문자(소속)</th>
            <td>
              <Select
                width="350px"
                round="round"
                placeholder="- SELECT -"
                defaultValue={0}
                options={categoryOpt}
              />
            </td>
          </tr>
          <tr>
            <th>매장명</th>
            <td>
              <Select
                width="350px"
                round="round"
                placeholder="- SELECT -"
                defaultValue={0}
                options={storeNameOpt}
              />
            </td>
          </tr>
          <tr>
            <th>기간설정</th>
            <td>
              {/* 임시 */}
              <TextToggle
                data={[
                  {
                    id: 1,
                    option: null,
                    title: '오늘'
                  },
                  {
                    id: 2,
                    option: null,
                    title: '1주일'
                  },
                  {
                    id: 3,
                    option: null,
                    title: '1개월'
                  },
                  {
                    id: 4,
                    option: null,
                    title: '3개월'
                  }
                ]}
                onClick={() => { }}
                type="linebox"
                globalClass="mb_8"
              />
              <Input
                onClick={() => {}}
                placeholder="날짜 입력"
                shape="round"
              />
            </td>
          </tr>
        </Table>
        <div className="align center mt_20">
          <Button onClick={handleOpen} btntype="c11" size="xlarge">
            검색
          </Button>
        </div>
      </ContentBox>
      <hr className="secondary" />
      <div className="align bottom mt_42">
        <div className="lft">
          <p className="body0">총 <span className="title3">200</span>건</p>
        </div>
        <div className="rgt">
          <Select
            minwidth="200px"
            round="round"
            defaultValue={0}
            options={numOpt}
          />
        </div>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="5%" />
                <col width="15%" />
                <col width="15%" />
                <col width="auto" />
                <col width="20%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>주문번호</TableCell>
                  <TableCell>주문자(소속)</TableCell>
                  <TableCell>주문명</TableCell>
                  <TableCell>주문일시</TableCell>
                  <TableCell>매장명</TableCell>
                  <TableCell>결제금액</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="center">1</TableCell>
                  <TableCell className="center">000000</TableCell>
                  <TableCell className="center">메가존 클라우드</TableCell>
                  <TableCell className="center">이름</TableCell>
                  <TableCell className="center">카페서비스 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">2</TableCell>
                  <TableCell className="center">클라우드카페</TableCell>
                  <TableCell className="center">admin02</TableCell>
                  <TableCell className="center">010-***-1234</TableCell>
                  <TableCell className="center">매장 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">3</TableCell>
                  <TableCell className="center">클라우드카페</TableCell>
                  <TableCell className="center">admin03</TableCell>
                  <TableCell className="center">홍길동3</TableCell>
                  <TableCell className="center">매장 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">4</TableCell>
                  <TableCell className="center">클라우드카페</TableCell>
                  <TableCell className="center">admin04</TableCell>
                  <TableCell className="center">홍길동4</TableCell>
                  <TableCell className="center">어드민 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <MuiModal
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>쿠폰 생성</h4>
            <Button
              icon="Delete"
              none
              onClick={handleClose}
              size="icon_s"
              iconStyle={{
                fill: "var(--c99)",
              }}
            >
              Close
            </Button>
          </>
        }
      >
        <div className="align top">
          <div className="lft" style={{ flex: 1 }}>
            <div style={{ width: "100%" }}>
              <h5 className="title3 mb_15">쿠폰 상세 내용</h5>
              <div className="mt_20">
                <label className="required body2">쿠폰 이미지 타이틀</label>
                <Textarea
                  Height={90}
                  globalClass="mt_10"
                  counton
                  maxLength={150}
                />
              </div>
              <div className="mt_20">
                <label className="required body2">쿠폰 옵션</label>
                <FormGroup globalClass="mt_10">
                  <Radio
                    name="drink"
                    id="radio1"
                    value="drinkables"
                    defaultChecked
                  >
                    음료 1잔
                  </Radio>
                  <Radio name="drink" id="radio2" value="Americano">
                    아메리카노 1잔
                  </Radio>
                </FormGroup>
              </div>
              <div className="mt_20">
                <label className="required body2">쿠폰명</label>
                <Input
                  globalClass="mt_10"
                  counton
                  maxLength={15}
                  onClick={() => {}}
                />
              </div>
              <div className="mt_20">
                <label className="required body2">유효기간</label>
                <Input
                  globalClass="mt_10"
                  counton
                  maxLength={15}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="rgt" style={{ width: 400, marginLeft: 15 }}>
            <div>
              <h5 className="title3 ">쿠폰 미리보기</h5>
              <p className="body2 mb_15 mt_10">
                고객에게 실제 보여지는 쿠폰 이미지 입니다.
              </p>
              <div style={{}}></div>
            </div>
          </div>
        </div>
      </MuiModal>
    </Layout>
  );
}

export default OrderDetailPage;
