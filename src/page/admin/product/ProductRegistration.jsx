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
import { useNavigate } from "react-router-dom";

// 임시 데이터 테이터에 따라 테이블 컨포넌트 변경 필요
// const cols = [
//   { colWidth: "auto" },
//   { colWidth: "auto" },
//   { colWidth: "auto" },
//   { colWidth: "auto" },
//   { colWidth: "auto" },
//   { colWidth: "auto" },
// ];

// const columns = [
//   { field: "체크박스", headerName: "어캄?", colSpan: null },
//   { field: "No.", headerName: "number", colSpan: null },
//   { field: "상품 ID", headerName: "id", colSpan: null },
//   { field: "상품 카테고리", headerName: "category", colSpan: null },
//   { field: "상품명", headerName: "name", colSpan: null },
//   { field: "판매매장", headerName: "store", colSpan: null },
// ];

// const rows = [
//   {
//     id: 1,
//     rowdata: [
//       { data: "체크박스", fnc: null, align: "center" },
//       { data: "1", fnc: null, align: "center" },
//       { data: "P00001", fnc: null, align: "center" },
//       { data: "Coffee", fnc: null, align: "center" },
//       { data: "에스프레소", fnc: null, align: "center" },
//       { data: "클라우드 카페", fnc: true, align: "center" },
//     ],
//   },
//   {
//     id: 2,
//     rowdata: [
//       { data: "체크박스", fnc: null, align: "center" },
//       { data: "2", fnc: null, align: "center" },
//       { data: "P00001", fnc: null, align: "center" },
//       { data: "Coffee", fnc: null, align: "center" },
//       { data: "에스프레소", fnc: null, align: "center" },
//       { data: "클라우드 카페", fnc: true, align: "center" },
//     ],
//   },
//   {
//     id: 3,
//     rowdata: [
//       { data: "체크박스", fnc: null, align: "center" },
//       { data: "3", fnc: null, align: "center" },
//       { data: "P00001", fnc: null, align: "center" },
//       { data: "Coffee", fnc: null, align: "center" },
//       { data: "에스프레소", fnc: null, align: "center" },
//       { data: "클라우드 카페", fnc: true, align: "center" },
//     ],
//   },
//   {
//     id: 4,
//     rowdata: [
//       { data: "체크박스", fnc: null, align: "center" },
//       { data: "4", fnc: null, align: "center" },
//       { data: "P00001", fnc: null, align: "center" },
//       { data: "Coffee", fnc: null, align: "center" },
//       { data: "에스프레소", fnc: null, align: "center" },
//       { data: "클라우드 카페", fnc: true, align: "center" },
//     ],
//   },
// ];

const categoryOpt = [
  { 
    label: "- SELECT -", 
    value: "" 
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

const perPageOptions = [
  { label: "전체", value: "전체" },
  { label: "20개씩", value: 20 },
  { label: "30개씩", value: 30 },
  { label: "50개씩", value: 50 },
];

function ProductListPage() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  // const [category, setCategory] = useState("");
  // const [categoryOptions, setCategoryOptions] = useState([
  //   { label: "- SELECT -", value: "" },
  //   { label: "Coffee", value: "Coffee" },
  //   { label: "Non-Coffee", value: "Non-Coffee" },
  //   { label: "Ade/Juice", value: "Ade/Juice" },
  //   { label: "Blended", value: "Blended" },
  //   { label: "Tea", value: "Tea" },
  //   { label: "Bread", value: "Bread" },
  //   { label: "Bottle", value: "Bottle" },
  // ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleCategoryChange = (value) => {
  //   setCategory(value);
  // };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품 정보 등록</h1>
      </div>
      <hr className="primary"/>
      <ContentBox top>
        <Table
          colgroup={
            <>
              <col width="15%" />
              <col />
            </>
          }
        >
          <tr>
            <th className="required">상품 카테고리</th>
            <td>
              <Select
                round="round"
                defaultValue={0}
                options={categoryOpt}
              />
            </td>
          </tr>
          <tr>
            <th className="required">상품명</th>
            <td>
              <Input
                onClick={() => {}}
                placeholder="상품명을 입력해 주세요."
                shape="round"
              />
            </td>
          </tr>
          <tr>
            <th className="required">상품 이미지</th>
            <td className="align start">
              <Input
                onClick={() => {}}
                placeholder="상품 이미지를 등록해 주세요."
                shape="round"
                type="file"
                onChange={handleFileChange}
                // style={{ display: "none" }}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <Button 
                onClick={() => this.fileInput.click()} 
                size="small_h35" >
                File
              </Button>
            </td>
            {selectedFile && <p>선택된 파일: {selectedFile.name}</p>}
          </tr>
          <tr>
            <th className="required">판매가</th>
            <td>
              <Input
                onClick={() => {}}
                placeholder="판매가를 입력해 주세요."
                shape="round"
              />
            </td>
          </tr>
          <tr>
            <th>임직원 할인가</th>
            <td>
              <Input
                onClick={() => {}}
                placeholder="임직원 할인가를 입력해 주세요."
                shape="round"
              />
            </td>
          </tr>
          <tr>
            <th>쿠폰할인 적용</th>
            <td>
              <Input
                onClick={() => {}}
                placeholder="쿠폰할인을 등록해 주세요."
                shape="round"
              />
              <Button 
                onClick={() => navigate("/admin/myprofile/changepassword")}
                size="xsmall">
                쿠폰할인 선택
              </Button>
            </td>
          </tr>
          <tr>
            <th>옵션 등록</th>
            <td>
              <Input
                onClick={() => {}}
                placeholder="쿠폰할인을 등록해 주세요."
                shape="round"
              />
            </td>
          </tr>
        </Table>
      </ContentBox>
        <div className="align end">
          <Button onClick={handleOpen} size="small_h35" line globalClass="mr_5">
            취소
          </Button>
          <Button onClick={handleOpen} size="small_h35" >
            등록
          </Button>
        </div>
      {/* <ContentBox>
        <MuiTable cols={cols} columns={columns} rows={rows}></MuiTable>
      </ContentBox> */}
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

export default ProductListPage;
