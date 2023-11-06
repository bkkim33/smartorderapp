import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import MuiTooltip from "../../../components/MuiTooltip";
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
        
      </ContentBox>
      <ContentBox>
        <div className="align mb_20">
          <div className="lft">
            <p className="body2">
              전체
              <em className="ml_5 primary-b bold600">46</em>
            </p>
          </div>
          <div className="rgt">
            <Input
              onClick={() => {}}
              placeholder="쿠폰명을 입력해주세요"
              shape="round"
              type="search"
              width="300px"
            />
          </div>
        </div>
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
