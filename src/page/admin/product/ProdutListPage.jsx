import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiTable from "../../../components/MuiTable";
import MuiModal from "../../../components/MuiModal";
import FormGroup from "../../../components/FormGroup";
import Radio from "../../../components/Radio";

// 임시 데이터 테이터에 따라 테이블 컨포넌트 변경 필요
const cols = [
  { colWidth: "8%" },
  { colWidth: "8%" },
  { colWidth: "30%" },
  { colWidth: "auto" },
  { colWidth: "8%" },
  { colWidth: "5%" },
  { colWidth: "5%" },
];

const columns = [
  { field: "쿠폰 코드", headerName: "couponnum", colSpan: null },
  { field: "유효기한", headerName: "period", colSpan: null },
  { field: "쿠폰명", headerName: "name", colSpan: null },
  { field: "쿠폰 설명", headerName: "ex", colSpan: null },
  { field: "발급한 수량", headerName: "amount", colSpan: null },
  { field: "미리보기", headerName: "미리보기", colSpan: null },
  { field: "관리", headerName: "관리", colSpan: null },
];

const rows = [
  {
    id: 1,
    rowdata: [
      { data: "1084", fnc: null, align: "center" },
      { data: "2023.10.20", fnc: null, align: "center" },
      { data: "쿠폰이름", fnc: null, align: "left" },
      { data: "쿠폰설명 입니다.", fnc: null, align: "left" },
      { data: 100, fnc: null, align: "right" },
      { data: "미리보기", fnc: true, align: "center" },
      { data: "삭제", fnc: true, align: "center" },
    ],
  },
  {
    id: 2,
    rowdata: [
      { data: "1084", fnc: null, align: "center" },
      { data: "2023.10.20", fnc: null, align: "center" },
      { data: "쿠폰이름", fnc: null, align: "left" },
      { data: "쿠폰설명 입니다.", fnc: null, align: "left" },
      { data: 100, fnc: null, align: "right" },
      { data: "미리보기", fnc: true, align: "center" },
      { data: "삭제", fnc: true, align: "center" },
    ],
  },
  {
    id: 3,
    rowdata: [
      { data: "1084", fnc: null, align: "center" },
      { data: "2023.10.20", fnc: null, align: "center" },
      { data: "쿠폰이름", fnc: null, align: "left" },
      { data: "쿠폰설명 입니다.", fnc: null, align: "left" },
      { data: 100, fnc: null, align: "right" },
      { data: "미리보기", fnc: true, align: "center" },
      { data: "삭제", fnc: true, align: "center" },
    ],
  },
  {
    id: 4,
    rowdata: [
      { data: "1084", fnc: null, align: "center" },
      { data: "2023.10.20", fnc: null, align: "center" },
      { data: "쿠폰이름", fnc: null, align: "left" },
      { data: "쿠폰설명 입니다.", fnc: null, align: "left" },
      { data: 100, fnc: null, align: "right" },
      { data: "미리보기", fnc: true, align: "center" },
      { data: "삭제", fnc: true, align: "center" },
    ],
  },
];

const categoryOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "Coffee",
    value: "Coffee",
  },
  {
    label: "Non-Coffee",
    value: "Non-Coffee",
  },
  {
    label: "Ade/Juice",
    value: "Ade/Juice",
  },
  {
    label: "Blended",
    value: "Blended",
  },
  {
    label: "Tea",
    value: "Tea",
  },
  {
    label: "Bread",
    value: "Bread",
  },
  {
    label: "Bottle",
    value: "Bottle",
  },
]

const storeNameOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "클라우드카페(역삼1호점)",
    value: "클라우드카페(역삼1호점)",
  },
  {
    label: "클라우드9카페(역삼2호점)",
    value: "클라우드9카페(역삼2호점)",
  },
];

const salesStatusOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "판매중",
    value: "판매중",
  },
  {
    label: "품절",
    value: "품절",
  },
  {
    label: "판매중지",
    value: "판매중지",
  },
];

const displayOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "전시중(Y)",
    value: "전시중(Y)",
  },
  {
    label: "전시안함(N)",
    value: "전시안함(N)",
  },
];

function ProdutListPage() {
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
        <h1 className="headline2">상품관리</h1>
      </div>
      <ContentBox top>
        <Table
          colgroup={
            <>
              <col width="15%" />
              <col />
              <col width="15%" />
              <col />
            </>
          }
        >
          <tr>
            <th>카테고리명</th>
            <td>
              <Select
                round="round"
                width="420px"
                defaultValue={0}
                options={categoryOpt}
              />
            </td>
            <th>카테고리명</th>
            <td>
              <Select
                round="round"
                width="420px"
                defaultValue={0}
                options={storeNameOpt}
              />
            </td>
          </tr>
          <tr>
            <th>판매상태</th>
            <td>
              <Select
                round="round"
                width="420px"
                defaultValue={0}
                options={salesStatusOpt}
              />
            </td>
            <th>전시여부</th>
            <td>
              <Select
                round="round"
                width="420px"
                defaultValue={0}
                options={displayOpt}
              />
            </td>
          </tr>
          <tr>
            <th> 상품검색 (ID, 상품명)</th>
            <td colSpan={3}>
              <Input
                onClick={() => {}}
                placeholder="상품ID 또는 상품명을 입력해주세요."
                shape="round"
              />
            </td>
          </tr>
        </Table>
        <div className="align center mt_20">
          <Button onClick={handleOpen} round size="small_h35">
            검색
          </Button>
        </div>
      </ContentBox>
      <ContentBox>
        <MuiTable cols={cols} columns={columns} rows={rows}></MuiTable>
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

export default ProdutListPage;
