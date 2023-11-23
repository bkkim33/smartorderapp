import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiPage from "../../../components/MuiPage";
import Checkbox from "../../../components/Checkbox";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiAlert from "../../../components/MuiAlert";

const targetOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "클라우드 카페",
    value: "클라우드 카페",
  },
  {
    label: "클라우드 9 카페",
    value: "클라우드 9 카페",
  },
  {
    label: "과천 클라우드 카페",
    value: "과천 클라우드 카페",
  }
]

const initialTableRows = [
  {
    id: 1,
    storeName: "클라우드 카페",
    businessNumber: "123456789",
    ownerName: "양땡열",
    contact: "010-1234-5678",
    address: "서울특별시 강남구 논현로85길 46",
    operatingHours: "월~금 오전 8시 ~ 오후 10시",
  },
  {
    id: 2,
    storeName: "클라우드 9 카페",
    businessNumber: "123456789",
    ownerName: "이땡아",
    contact: "010-9876-5432",
    address: "서울특별시 강남구 역삼로17길 57",
    operatingHours: "월~금 오전 8시 ~ 오후 10시",
  },
  {
    id: 3,
    storeName: "과천 클라우드 카페",
    businessNumber: "123456789",
    ownerName: "양땡열",
    contact: "010-1234-5678",
    address: "서울특별시 강남구 논현로85길 46",
    operatingHours:
      "월~금 오전 8시 ~ 오후 10시 <br /> 토~일 오전 10시 ~ 오후 06시",
  },
  {
    id: 4,
    storeName: "클라우드 카페",
    businessNumber: "123456789",
    ownerName: "양땡열",
    contact: "010-1234-5678",
    address: "서울특별시 강남구 논현로85길 46",
    operatingHours: "월~금 오전 8시 ~ 오후 10시",
  },
  {
    id: 5,
    storeName: "클라우드 카페",
    businessNumber: "123456789",
    ownerName: "양땡열",
    contact: "010-1234-5678",
    address: "서울특별시 강남구 논현로85길 46",
    operatingHours: "월~금 오전 8시 ~ 오후 10시",
  },
  {
    id: 6,
    storeName: "클라우드 카페",
    businessNumber: "123456789",
    ownerName: "양땡열",
    contact: "010-1234-5678",
    address: "서울특별시 강남구 논현로85길 46",
    operatingHours: "월~금 오전 8시 ~ 오후 10시",
  },
];

function StoreListPage() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  const handleTableRowClick = (e, row) => {
    const isCheckbox = e.target.tagName === 'INPUT' && e.target.type === 'checkbox';
    if (!isCheckbox) {
      const isChildOfCheckbox = e.target.closest('input[type="checkbox"]');
      if (!isChildOfCheckbox) {
        navigate("/admin/store/info/modify");
      }
    } else {
      handleCheckboxChange(row.id);
    }
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">매장정보 관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox top>
        <Table
          colgroup={
            <>
              <col width="15%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th>가맹점명</th>
            <td>
              <Select defaultValue={0} options={targetOpt} />
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
      <div className="align end gap_10 mt_42">
        <Button onClick={handleOpen} size="small_h35" line>
          삭제
        </Button>
        <Button
          onClick={() => {
            navigate("/admin/store/register");
          }}
          size="small_h35"
          border="point"
        >
          등록
        </Button>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="3%" />
                <col width="10%" />
                <col width="10%" />
                <col width="7%" />
                <col width="15%" />
                <col width="auto" />
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
                  <TableCell>가맹점명</TableCell>
                  <TableCell>사업자번호</TableCell>
                  <TableCell>대표자명</TableCell>
                  <TableCell>연락처</TableCell>
                  <TableCell>주소</TableCell>
                  <TableCell>운영시간</TableCell>
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
                    <TableCell onClick={(e) => handleTableRowClick(e, row)}>
                      {row.id}
                    </TableCell>
                    <TableCell
                      className="left"
                      onClick={(e) => handleTableRowClick(e, row)}
                    >
                      {row.storeName}
                    </TableCell>
                    <TableCell onClick={(e) => handleTableRowClick(e, row)}>
                      {row.businessNumber}
                    </TableCell>
                    <TableCell onClick={(e) => handleTableRowClick(e, row)}>
                      {row.ownerName}
                    </TableCell>
                    <TableCell onClick={(e) => handleTableRowClick(e, row)}>
                      {row.contact}
                    </TableCell>
                    <TableCell
                      className="left"
                      onClick={(e) => handleTableRowClick(e, row)}
                    >
                      {row.address}
                    </TableCell>
                    <TableCell
                      className="left"
                      onClick={(e) => handleTableRowClick(e, row)}
                      dangerouslySetInnerHTML={{ __html: row.operatingHours }}
                    />
                  </TableRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
        <MuiAlert
          open={open}
          onClose={handleClose}
          title={
            <>
              가맹점을 삭제하면{" "}
              <span className="red_text">
                가맹점에 연결된 모든 정보가 삭제되며, 삭제된 가맹점은 복구되지
                않습니다.
              </span>{" "}
              가맹점을 삭제하시겠습니까?
            </>
          }
          button={
            <>
              <Button onClick={handleClose} line>
                아니요
              </Button>
              <Button onClick={handleAlertYes} border="point">
                네
              </Button>
            </>
          }
        />
      </ContentBox>
    </Layout>
  );
}

export default StoreListPage;