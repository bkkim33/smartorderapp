import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Checkbox from "../../../components/Checkbox";
import MuiAlert from "../../../components/MuiAlert";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const categoryOpt = [
  { label: "전체", value: "전체" },
  { label: "Coffee", value: "Coffee" },
  { label: "Non-Coffee", value: "Non-Coffee" },
  { label: "Ade/Juice", value: "Ade/Juice" },
  { label: "Blended", value: "Blended" },
  { label: "Tea", value: "Tea" },
  { label: "Bread", value: "Bread" },
  { label: "Bottle", value: "Bottle" },
]

const storeNameOpt = [
  { label: "전체", value: "전체" },
  { label: "클라우드카페(역삼1호점)", value: "클라우드카페(역삼1호점)" },
  { label: "클라우드9카페(역삼2호점)", value: "클라우드9카페(역삼2호점)" },
];

const numOpt = [
  { label: "20개씩 보기", value: "20개씩 보기" },
  { label: "30개씩 보기", value: "30개씩 보기" },
  { label: "50개씩 보기", value: "50개씩 보기" },
];

const initialTableRows = [
  { 
    id: 1, 
    affiliation: "P00001", 
    productId: "Coffee", 
    productName: "유자차", 
    role: "클라우드 카페 외 1개" 
  },
  { 
    id: 2, 
    affiliation: "P00002", 
    productId: "Coffee", 
    productName: "에스프레소", 
    role: "클라우드카페(역삼1호점)" 
  },
  { 
    id: 3, 
    affiliation: "P00003", 
    productId: "Tea", 
    productName: "바닐라라떼", 
    role: "클라우드9카페(역삼2호점)" 
  },
  { 
    id: 4, 
    affiliation: "P00004", 
    productId: "Tea", 
    productName: "캬라멜마끼아또", 
    role: "클라우드 카페 외 1개" 
  },
];

function ProductListPage() {

  const navigate = useNavigate();
  const [open02, setOpen02] = useState(false);

  const handleOpen02 = () => {
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };

  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newCheckedItems = {};
    if (!selectAll) {
      initialTableRows.forEach((item) => {
        newCheckedItems[item.id] = true;
      });
    }
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const [tableRows, setTableRows] = useState(initialTableRows);
  // MuiAlert 확인 후 데이터 삭제
  const handleAlertYes = () => {
    const updatedTableRows = tableRows.filter((item) => !checkedItems[item.id]);
    setCheckedItems({});
    setSelectAll(false);
    const deletedItems = tableRows.filter((item) => checkedItems[item.id]);
    console.log(deletedItems);
    setTableRows(updatedTableRows);
    handleClose02(false);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox top>
        <Table
          search
          colgroup={
            <>
              <col width="10%" />
              <col width="auto" />
              <col width="10%" />
              <col width="auto" />
              <col width="10%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th>상품 카테고리</th>
            <td>
              <Select defaultValue={0} options={categoryOpt} />
            </td>
            <th>판매 매장</th>
            <td>
              <Select defaultValue={0} options={storeNameOpt} />
            </td>
            <th> 상품검색 (ID, 상품명)</th>
            <td>
              <Input
                onClick={() => {}}
                placeholder="상품ID 또는 상품명을 입력해주세요."
              />
            </td>
          </tr>
        </Table>
        <div className="align center mt_20">
          <Button
            type="pc"
            color="black"
            icon="Search"
            iconStyle={{
              fill: '#fff',
              height: 24,
              width: 24
            }}
            round
            size="icon_l"
          >
            검색
          </Button>
        </div>
      </ContentBox>
      <hr className="secondary" />
      <div className="align mt_42">
        <div className="lft">
          <Select minwidth="200px" defaultValue={0} options={numOpt} />
        </div>
        <div className="rgt gap_5">
          <Button onClick={handleOpen02}
            type="pc" 
            color="gray"
            line
            size="small"            
          >
            삭제
          </Button>
          <Button
            onClick={() => navigate("/admin/product/product/register")}
            type="pc"
            color="point"
            size="small"
          >
            신규등록
          </Button>
        </div>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="3%" />
                <col width="20%" />
                <col width="auto%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      id="checkAll"
                      name="checkAll"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>상품 ID</TableCell>
                  <TableCell>상품 카테고리</TableCell>
                  <TableCell>상품명</TableCell>
                  <TableCell>판매 매장</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows.map((row) => (
                  <TableRow key={row.id} className="crsor_poin">
                    <TableCell>
                      <Checkbox
                        id={`check${row.id}`}
                        name={`check${row.id}`}
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/product/product/detail")}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/product/product/detail")}
                    >
                      {row.affiliation}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/product/product/detail")}
                    >
                      {row.productId}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/product/product/detail")}
                    >
                      {row.productName}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/product/product/detail")}
                    >
                      {row.role}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        type="admin"
        iconColor="red"
        title={<>정말 삭제하시겠습니까?</>}
        button={
          <>
            <Button color="gray" line size="small" onClick={handleClose02}>
              취소
            </Button>
            <Button color="black" size="small" onClick={handleAlertYes}>
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default ProductListPage;
