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
  { colWidth: "10%" },
  { colWidth: "10%" },
  { colWidth: "10%" },
  { colWidth: "10%" },
  { colWidth: "auto" },
  { colWidth: "5%" },
  { colWidth: "5%" },
  { colWidth: "5%" },
  { colWidth: "5%" },
];

const columns = [
  { field: "발급 일시", headerName: "발급일시", colSpan: null },
  { field: "소속", headerName: "소속", colSpan: null },
  { field: "발급대상(아이디)", headerName: "ID", colSpan: null },
  { field: "쿠폰명(쿠폰 코드)", headerName: "쿠폰코드", colSpan: null },
  { field: "쿠폰 설명", headerName: "설명", colSpan: null },
  { field: "유효기한", headerName: "유효기한", colSpan: null },
  { field: "쿠폰 미리보기", headerName: "미리보기", colSpan: null },
  { field: "발급수량", headerName: "발급수량", colSpan: null },
  { field: "쿠폰 회수", headerName: "회수", colSpan: null },
];

const rows = [
  {
    id: 1,
    rowdata: [
      { data: "10.19, 10:08", fnc: null, align: "center" },
      { data: "프로덕트 센터", fnc: null, align: "center" },
      { data: "유영민(hero8059994)", fnc: null, align: "left" },
      { data: "아이스 아메리카노(1010)", fnc: null, align: "left" },
      { data: "부족해 보이시겠지만 정말!! 열심히 했습니다!!", fnc: null, align: "left" },
      { data: "무기한", fnc: null, align: "center" },
      { data: <button type="button" onClick={() => {}}>쿠폰이미지 팝업</button>, fnc: true, align: "center" }, 
      { data: 1, fnc: null, align: "center" },
      { data: <button type="button" onClick={() => {}}>쿠폰회수팝업</button>, fnc: true, align: "center" },
    ],
  },
  {
    id: 2,
    rowdata: [
      { data: "10.19, 10:08", fnc: null, align: "center" },
      { data: "프로덕트 센터", fnc: null, align: "center" },
      { data: "유영민(hero8059994)", fnc: null, align: "left" },
      { data: "아이스 아메리카노(1010)", fnc: null, align: "left" },
      { data: "부족해 보이시겠지만 정말!! 열심히 했습니다!!", fnc: null, align: "left" },
      { data: "무기한", fnc: null, align: "center" },
      { data: <button type="button" onClick={() => {}}>쿠폰이미지 팝업</button>, fnc: true, align: "center" }, 
      { data: 1, fnc: null, align: "center" },
      { data: <button type="button" onClick={() => {}}>쿠폰회수팝업</button>, fnc: true, align: "center" },
    ],
  },
  {
    id: 3,
    rowdata: [
      { data: "10.19, 10:08", fnc: null, align: "center" },
      { data: "프로덕트 센터", fnc: null, align: "center" },
      { data: "유영민(hero8059994)", fnc: null, align: "left" },
      { data: "아이스 아메리카노(1010)", fnc: null, align: "left" },
      { data: "부족해 보이시겠지만 정말!! 열심히 했습니다!!", fnc: null, align: "left" },
      { data: "무기한", fnc: null, align: "center" },
      { data: <button type="button" onClick={() => {}}>쿠폰이미지 팝업</button>, fnc: true, align: "center" }, 
      { data: 1, fnc: null, align: "center" },
      { data: <button type="button" onClick={() => {}}>쿠폰회수팝업</button>, fnc: true, align: "center" },
    ],
  },
  {
    id: 4,
    rowdata: [
      { data: "10.19, 10:08", fnc: null, align: "center" },
      { data: "프로덕트 센터", fnc: null, align: "center" },
      { data: "유영민(hero8059994)", fnc: null, align: "left" },
      { data: "아이스 아메리카노(1010)", fnc: null, align: "left" },
      { data: "부족해 보이시겠지만 정말!! 열심히 했습니다!!", fnc: null, align: "left" },
      { data: "무기한", fnc: null, align: "center" },
      { data: "쿠폰 이미지", fnc: true, align: "center" }, 
      { data: 1, fnc: null, align: "center" },
      { data: "쿠폰 회수", fnc: true, align: "center" },
    ],
  },
];


// 팝업 테이블 
const newCols = [
  { colWidth: "10%" },
  { colWidth: "auto" },
  { colWidth: "10%" },
  { colWidth: "10%" },
  { colWidth: "10%" },
];

const newColumns = [
  { field: "쿠폰명(쿠폰 코드)", headerName: "쿠폰 코드", colSpan: null },
  { field: "쿠폰 설명", headerName: "쿠폰 설명", colSpan: null },
  { field: "발급 수량", headerName: "발급 수량", colSpan: null },
  { field: "유효기한", headerName: "유효기한", colSpan: null },
  { field: "쿠폰 이미지", headerName: "쿠폰 이미지", colSpan: null },
];

const newRows = [
  {
    id: 1,
    rowdata: [
      { data: "유영민 테스트 쿠폰(1084)", fnc: null, align: "center" },
      { data: "데이터2", fnc: null, align: "center" },
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
          <h1 className="headline2">쿠폰발급</h1>
          <MuiTooltip placements="right-end" globalClass="ml_5">
            <ul className="bullet_list">
              <li>쿠폰 발급 버튼을 통해 발송관리자에게 쿠폰을 발급할 수 있습니다.</li>
              <li>발급 내역에서 발송 관리자에게 발급한 쿠폰 내역을 확인하고 회수할 수 있습니다.</li>
              <li>발송 관리자가 고객에게 전송한 쿠폰은 회수할 수 없으며, 발송 가능한 잔여 수량을 회수할 수 있습니다.</li>
            </ul>
          </MuiTooltip>
        </div>
        <div className="rgt">
          <Button onClick={handleOpen} round>
            쿠폰 발급
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
              placeholder="발송 관리자 또는 쿠폰명 입력"
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
            <h4>쿠폰 발급</h4>
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
          <div style={{ flex: 1 }}>
            <div style={{ width: "100%" }}>
              <h5 className="title3 mb_15">쿠폰 리스트</h5>
              {/* <div className="mt_20">
                <label className="required body2">쿠폰 내용</label>
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
              </div> */}
              <MuiTable cols={newCols} columns={newColumns} rows={newRows}></MuiTable>
            </div>
            
          </div>
          <div  style={{ width: 400, marginLeft: 15 }}>
            <div>
              <h5 className="title3 ">쿠폰 발급 설정</h5>
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

export default MainPage;
