import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentBox from "../../../../layout/ContentBox";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import Select from "../../../../components/Select";
import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiAlert from "../../../../components/MuiAlert";

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
  { id: 1, orderNumber: 1, productID: 'P00001', categoryName: 'Coffee', productName: '에스프레소', storeName: '클라우드 카페', salesStatus: '미설정' },
  { id: 2, orderNumber: 2, productID: 'P00002', categoryName: 'Coffee', productName: '캬라멜마끼아또', storeName: '클라우드 카페', salesStatus: '미설정' },
  { id: 3, orderNumber: 3, productID: 'P00003', categoryName: 'Tea', productName: '유자차', storeName: '클라우드 9 카페', salesStatus: '판매중' },
  { id: 4, orderNumber: 4, productID: 'P00004', categoryName: 'Tea', productName: '제로콜라', storeName: '클라우드 카페', salesStatus: '품절' },
  { id: 5, orderNumber: 5, productID: 'P00005', categoryName: 'Bottle', productName: '에스프레소', storeName: '클라우드 카페', salesStatus: '판매중지' },
];

function SalesStatus() {

  const navigate = useNavigate();
  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);
  const [openAlert3, setOpenAlert3] = useState(false);
  const handleOpenAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(true);
    } else if (alertNumber === 2) {
      setOpenAlert2(true);
    } else if (alertNumber === 3) {
      setOpenAlert3(true);
    }
  };
  const handleCloseAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(false);
    } else if (alertNumber === 2) {
      setOpenAlert2(false);
    } else if (alertNumber === 3) {
      setOpenAlert3(false);
    }
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

  const [tableRows] = useState(initialTableRows);

  return (
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
            <Select defaultValue={0} options={categoryOpt} />
          </td>
          <th>판매상태</th>
          <td>
            <Select defaultValue={0} options={salesStatusData} />
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
        <Button onClick={() => handleOpenAlert(1)} size="small_h35" state>
          판매중지
        </Button>
        <Button onClick={() => handleOpenAlert(2)} size="small_h35" line>
          품절
        </Button>
        <Button
          onClick={() => handleOpenAlert(3)}
          size="small_h35"
          border="point"
        >
          판매중
        </Button>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="5%" />
                <col width="10%" />
                <col width="15%" />
                <col width="auto" />
                <col width="auto" />
                <col width="15%" />
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
                    <TableCell>{row.orderNumber}</TableCell>
                    <TableCell>{row.productID}</TableCell>
                    <TableCell>{row.categoryName}</TableCell>
                    <TableCell className="left">{row.productName}</TableCell>
                    <TableCell>{row.storeName}</TableCell>
                    <TableCell>
                      {row.salesStatus === "미설정" ? (
                        <span className="red_text">{row.salesStatus}</span>
                      ) : (
                        row.salesStatus
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        {/* <MuiPage /> */}
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
          open={openAlert1}
          onClose={() => handleCloseAlert(1)}
          title={<>선택한 상품을 판매중지 상태로 변경하시겠습니까?</>}
          button={
            <>
              <Button onClick={() => handleCloseAlert(1)} line>
                아니요
              </Button>
              <Button onClick={() => handleCloseAlert(1)} border="point">
                예
              </Button>
            </>
          }
        />
        <MuiAlert
          open={openAlert2}
          onClose={() => handleCloseAlert(2)}
          title={<>선택한 상품을 품절 상태로 변경하시겠습니까?</>}
          button={
            <>
              <Button onClick={() => handleCloseAlert(2)} line>
                아니요
              </Button>
              <Button onClick={() => handleCloseAlert(2)} border="point">
                예
              </Button>
            </>
          }
        />
        <MuiAlert
          open={openAlert3}
          onClose={() => handleCloseAlert(3)}
          title={<>선택한 상품을 판매중 상태로 변경하시겠습니까?</>}
          button={
            <>
              <Button onClick={() => handleCloseAlert(3)} line>
                아니요
              </Button>
              <Button onClick={() => handleCloseAlert(3)} border="point">
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