import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  { label: "전체", value: "전체" },
  { label: "임직원", value: "임직원" },
  { label: "입주사", value: "입주사" },
  { label: "방문객", value: "방문객" },
]

const displayOpt = [
  { label: "전체", value: "전체" },
  { label: "노출함(Y)", value: "노출함(Y)" },
  { label: "노출안함(N)", value: "노출안함(N)" },
];

const numOpt = [
  { label: "20개씩 보기", value: "20개씩 보기" },
  { label: "30개씩 보기", value: "30개씩 보기" },
  { label: "50개씩 보기", value: "50개씩 보기" },
];

const dateFilterOptions = [
  { label: "오늘", value: "today" },
  { label: "1주일", value: "oneWeek" },
  { label: "1개월", value: "oneMonth" },
  { label: "3개월", value: "threeMonths" },
];

const initialTableRows = [
  { 
    id: 1, 
    title: '공지사항 제목입니다.', 
    target: '전체', 
    date: '2023. 10. 30', 
    visibility: 'Y', 
    author: 'admin' 
  },
  { 
    id: 2, 
    title: '공지사항 제목입니다.', 
    target: '임직원', 
    date: '2023. 10. 31', 
    visibility: 'Y', 
    author: 'admin' 
  },
  { 
    id: 3, 
    title: '공지사항 제목입니다.', 
    target: '방문객', 
    date: '2023. 10. 30', 
    visibility: 'N', 
    author: 'user' 
  },
  { 
    id: 4, 
    title: '공지사항 제목입니다.', 
    target: '전체', 
    date: '2023. 11. 01', 
    visibility: 'Y', 
    author: 'admin' 
  },
  { 
    id: 5, 
    title: '데이터 확인중입니다', 
    target: '전체', 
    date: '2023. 11. 02', 
    visibility: 'Y', 
    author: 'admin' 
  },
];

function NoticeListPage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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

  const [activeButton, setActiveButton] = useState(null); 
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  // const [setStartDate] = useState(null);
  // const [setEndDate] = useState(null);

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">공지사항</h1>
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
            <th>공개대상</th>
            <td>
              <Select width="350px" defaultValue={0} options={targetOpt} />
            </td>
            <th>노출여부</th>
            <td>
              <Select width="350px" defaultValue={0} options={displayOpt} />
            </td>
          </tr>
          <tr>
            <th>등록일</th>
            <td colSpan={3}>
              <div className="align start mb_8 gap_5">
                {dateFilterOptions.map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => handleButtonClick(option.value)}
                    size="small_h35"
                    line={activeButton === option.value ? " " : "light"}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
              {/* 임시 달력 */}
              <div className="align">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  className={"date_picker"}
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={false}
                  placeholderText="날짜를 선택해 주세요."
                />
                {/* <Input
                  type="date"
                  onClick={() => {}}
                  placeholder="시작 날짜"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <span className="mlr_10">~</span>
                <Input
                  type="date"
                  onClick={() => {}}
                  placeholder="종료 날짜"
                  onChange={(e) => setEndDate(e.target.value)}
                /> */}
              </div>
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td colSpan={3}>
              <Input onClick={() => {}} placeholder="제목을 입력해 주세요." />
            </td>
          </tr>
        </Table>
        <div className="align center mt_20">
          <Button onClick={() => {}} btntype="c11" size="xlarge">
            검색
          </Button>
        </div>
      </ContentBox>
      <hr className="secondary" />
      <div className="align mt_42">
        <div className="lft">
          <Select minwidth="200px" defaultValue={0} options={numOpt} />
        </div>
        <div className="rgt gap_10">
          <Button onClick={handleOpen} size="small_h35" line>
            삭제
          </Button>
          <Button
            onClick={() => {
              navigate("/admin/customer/notice/register");
            }}
            size="small_h35"
            border="point"
          >
            등록하기
          </Button>
        </div>
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
                  <TableCell>제목</TableCell>
                  <TableCell>공개대상</TableCell>
                  <TableCell>등록일</TableCell>
                  <TableCell>노출여부</TableCell>
                  <TableCell>작성자</TableCell>
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
                    <TableCell
                      onClick={() => navigate("/admin/customer/notice/modify")}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      className="left"
                      onClick={() => navigate("/admin/customer/notice/modify")}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/customer/notice/modify")}
                    >
                      {row.target}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/customer/notice/modify")}
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/customer/notice/modify")}
                    >
                      {row.visibility}
                    </TableCell>
                    <TableCell
                      onClick={() => navigate("/admin/customer/notice/modify")}
                    >
                      {row.author}
                    </TableCell>
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
          title={<>정말 삭제하시겠습니까?</>}
          button={
            <>
              <Button onClick={handleClose} line>
                취소
              </Button>
              <Button onClick={handleAlertYes} border="point">
                확인
              </Button>
            </>
          }
        />
      </ContentBox>
    </Layout>
  );
}

export default NoticeListPage;
