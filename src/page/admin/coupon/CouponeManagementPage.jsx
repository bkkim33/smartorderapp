import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MuiTooltip from "../../../components/MuiTooltip";
import MuiTable from "../../../components/MuiTable";
import MuiModal from "../../../components/MuiModal";

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

function MainPage() {
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
        <div className="lft">
          <h1 className="headline2">쿠폰관리</h1>
          <MuiTooltip placements="right-end" globalClass="ml_5">
            <ul className="bullet_list">
              <li>쿠폰 추가 버튼을 통해 쿠폰을 생성할 수 있습니다.</li>
              <li>
                쿠폰 이미지는 파일 불러오기 기능을 통해 직접 제작하여 업로드
                가능합니다.
              </li>
              <li>
                이미 발급한 쿠폰은 삭제해도 발송 관리자가 고객에게 전송할 수
                있습니다. <br />
                쿠폰 회수는 쿠폰 발급 메뉴에서 가능합니다.
              </li>
            </ul>
          </MuiTooltip>
        </div>
        <div className="rgt">
          <Button onClick={handleOpen} round>
            쿠폰 생성
          </Button>
        </div>
      </div>
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
            <h4>TITLE</h4>
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
        컨텐츠
      </MuiModal>
    </Layout>
  );
}

export default MainPage;
