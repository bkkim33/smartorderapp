import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentBox from "../../../../layout/ContentBox";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import Select from "../../../../components/Select";
import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";
import MuiPage from "../../../../components/MuiPage";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiAlert from "../../../../components/MuiAlert";
import { grey } from "@mui/material/colors";

const categoryOpt = [
  {label: "전체",value: "전체",},
  {label: "Coffee",value: "Coffee",},
  {label: "Non-Coffee",value: "Non-Coffee",},
  {label: "Ade/Juice",value: "Ade/Juice",},
  {label: "Blended",value: "Blended",},
  {label: "Tea",value: "Tea",},
  {label: "Bread",value: "Bread",},
  {label: "Bottle",value: "Bottle",},
]

const salesStatusData = [
  { value: 0, label: '전체' },
  { value: 1, label: '판매중' },
  { value: 2, label: '품절' },
  { value: 3, label: '판매중지' },
  { value: 4, label: '미설정' },
]

const initialTableRows = [
  { id: 1, title: '공지사항 제목입니다.', target: '전체', date: '2023. 10. 30', visibility: 'Y', author: 'admin' },
  { id: 2, title: '공지사항 제목입니다.', target: '임직원', date: '2023. 10. 31', visibility: 'Y', author: 'admin' },
  { id: 3, title: '공지사항 제목입니다.', target: '방문객', date: '2023. 10. 30', visibility: 'N', author: 'user' },
  { id: 4, title: '공지사항 제목입니다.', target: '전체', date: '2023. 11. 01', visibility: 'Y', author: 'admin' },
  { id: 5, title: '데이터 확인중입니다', target: '전체', date: '2023. 11. 02', visibility: 'Y', author: 'admin' },
];

function SalesStatus() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
    handleClose(false);
  };

  return(
    <div className="align column">
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
          <th>판매 매장</th>
          <td colSpan={3}>클라우드 카페 (역삼1호점)</td>
        </tr>
        <tr>
          <th>상품 카테고리</th>
          <td>
            <Select
              defaultValue={0}
              options={categoryOpt}
            />
          </td>
          <th>판매상태</th>
          <td>
            <Select
              defaultValue={0}
              options={salesStatusData}
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
      <div className="align center mtb_20">
        <Button onClick={() => {}} btntype="c11" size="xlarge">
          검색
        </Button>
      </div>
      <hr className="secondary" />
      <div className="align end mt_42 gap_10">
        {/* <div className="rgt gap_10"> */}
          <Button onClick={() => {}} size="small_h35" btntype="gray" border>
            판매중지
          </Button>
          <Button onClick={handleOpen} size="small_h35" line>
            품절
          </Button>
          <Button onClick={() => {}} size="small_h35" border="point">
            판매중
          </Button>
        {/* </div> */}
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="5%" />
                <col width="auto" />
                <col width="12%" />
                <col width="15%" />
                <col width="12%" />
                <col width="12%" />
                <col width="12%" />
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
                  <TableCell>상품명ID</TableCell>
                  <TableCell>카테고리명</TableCell>
                  <TableCell>상품명</TableCell>
                  <TableCell>판매매장</TableCell>
                  <TableCell>전시상태</TableCell>
                  <TableCell>판매상태</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox
                        id={`check${row.id}`}
                        name={`check${row.id}`}
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.author}</TableCell>
                    <TableCell>{row.author}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
        <div className="align end">
          <div className="item">
            <Button
              onClick={() => {
                navigate("/admin/customer/terms/");
              }}
              size="xlarge"
              btntype="c11"
            >
              저장
            </Button>
          </div>
        </div>
        <MuiAlert
          open={open}
          onClose={handleClose}
          title={<>선택한 상품의 판매상태를 <br/>$판매상태$ 으로 모두 변경하시겠습니까</>}
          button={
            <>
              <Button onClick={handleClose} line>
                아니오
              </Button>
              <Button onClick={() => {}} border="point">
                예
              </Button>
            </>
          }
        />
      </ContentBox>
    </div>
  );
}

export default SalesStatus;