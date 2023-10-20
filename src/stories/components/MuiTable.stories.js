import React from "react";
import { MuiTable } from "../../components/MuiTable";

export default {
  title: "components/Lib/MuiTable",
  component: MuiTable,
  tags: ["autodocs"],
  argTypes: {},
};

const cols = [
  { colWidth: "8%" },
  { colWidth: "8%" },
  { colWidth: "30%" },
  { colWidth: "auto" },
  { colWidth: "10%" },
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

export const Default = (args) => (
  <>
    <MuiTable cols={cols} columns={columns} rows={rows}></MuiTable>
  </>
);


