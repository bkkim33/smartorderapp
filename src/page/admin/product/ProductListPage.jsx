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


function ProductListPage() {
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
      <hr className="primary" />
      <ContentBox top>
        <Table
          colgroup={
            <>
              <col width="15%" />
              <col width="auto" />
              <col width="15%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th>상품 카테고리</th>
            <td>
              <Select
                width="350px"
                defaultValue={0}
                options={categoryOpt}
              />
            </td>
            <th>판매 매장</th>
            <td>
              <Select
                width="350px"
                defaultValue={0}
                options={storeNameOpt}
              />
            </td>
          </tr>
          <tr>
            <th> 상품검색 (ID, 상품명)</th>
            <td colSpan={3}>
              <Input
                onClick={() => {}}
                placeholder="상품ID 또는 상품명을 입력해주세요."
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
      <div className="align mt_42">
        <div className="lft">
          <Select
            minwidth="200px"
            defaultValue={0}
            options={numOpt}
          />
        </div>
        <div className="rgt gap_5">
          <Button onClick={handleOpen} size="small_h35" line>
            삭제
          </Button>
          <Button onClick={handleOpen} size="small_h35" border="point">
            신규등록
          </Button>
        </div>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="10%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>소속</TableCell>
                  <TableCell>관리자 ID</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>권한</TableCell>
                  <TableCell>전시여부</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow component={Link} to="/admin/account/modify">
                  <TableCell>1</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin01</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>카페서비스 관리자</TableCell>
                  <TableCell>
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow component={Link} to="/admin/account/modify">
                  <TableCell>2</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin02</TableCell>
                  <TableCell>010-***-1234</TableCell>
                  <TableCell>매장 관리자</TableCell>
                  <TableCell>
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow component={Link} to="/admin/account/modify">
                  <TableCell>3</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin03</TableCell>
                  <TableCell>홍길동3</TableCell>
                  <TableCell>매장 관리자</TableCell>
                  <TableCell>
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow component={Link} to="/admin/account/modify">
                  <TableCell>4</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin04</TableCell>
                  <TableCell>홍길동4</TableCell>
                  <TableCell>어드민 관리자</TableCell>
                  <TableCell>
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

export default ProductListPage;
