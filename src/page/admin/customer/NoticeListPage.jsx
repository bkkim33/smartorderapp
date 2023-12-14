import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
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

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">공지사항</h1>
      </div>
      <ContentBox top>
        <div>
          <Select 
            minwidth="210px"
            round="app"
            placeholder="공개 대상"
            options={targetOpt} 
          />
        </div>
        <div>
          <Select 
            minwidth="210px" 
            round="app"
            placeholder="노출 여부"
            options={displayOpt} 
          />
        </div>
        <div style={{ width: '250px' }}>
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
            placeholderText="등록 기간 선택"
          />
        </div>
        <div>
          <Input onClick={() => { }} width="310px" shape="none" placeholder="제목을 입력해 주세요." />
        </div>
        <Button
          type="pc"
          color="black"
          icon="Search"
          iconStyle={{
            fill: '#fff',
            height: 18,
            width: 18
          }}
          round
          size="icon_l"
        >
          검색
        </Button>
        <Button
          type="pc"
          color="white"
          size="icon_l"
          round
          icon="Refresh"
          globalClass="ml_10"
        >
          초기화
        </Button>
      </ContentBox>
      <ContentBox>
        <div className="align mb_12">
          <div className="lft">
            <div className="item">
              <Button 
                onClick={handleOpen} 
                type="pc" 
                color="gray" 
                line 
                size="small"
              >
                삭제
              </Button>
            </div>
            <div className="item">
              <Select 
                minwidth="200px" 
                defaultValue={numOpt[0]} 
                options={numOpt} 
              />
            </div>            
          </div>
          <div className="rgt">            
            <Button
              onClick={() => {
                navigate("/admin/customer/notice/register");
              }}
              type="pc"
              color="point"
              size="small"
            >
              등록하기
            </Button>
          </div>
        </div>
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
                    <Checkbox id="checkAll" name="checkAll" />
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
                <TableRow>
                  <TableCell>
                    <Checkbox id="check1" name="check1" />
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/customer/notice/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      공지사항 제목입니다.
                    </Button>
                  </TableCell>
                  <TableCell>전체</TableCell>
                  <TableCell>2023. 10. 30</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check2" name="check2" />
                  </TableCell>
                  <TableCell>2</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/customer/notice/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      공지사항 제목입니다.
                    </Button>
                  </TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>2023. 10. 31</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow onClick={() => navigate("/admin/customer/notice/modify")}>
                  <TableCell>
                    <Checkbox id="check3" name="check3" />
                  </TableCell>
                  <TableCell>3</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/customer/notice/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      공지사항 제목입니다.
                    </Button>
                  </TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>2023. 10. 30</TableCell>
                  <TableCell>N</TableCell>
                  <TableCell>user</TableCell>
                </TableRow>
                <TableRow onClick={() => navigate("/admin/customer/notice/modify")}>
                  <TableCell>
                    <Checkbox id="check4" name="check4" />
                  </TableCell>
                  <TableCell>4</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/customer/notice/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      공지사항 제목입니다.
                    </Button>
                  </TableCell>
                  <TableCell>전체</TableCell>
                  <TableCell>2023. 11. 01</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow onClick={() => navigate("/admin/customer/notice/modify")}>
                  <TableCell>
                    <Checkbox id="check5" name="check5" />
                  </TableCell>
                  <TableCell>5</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/customer/notice/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      데이터 확인중입니다
                    </Button>
                  </TableCell>
                  <TableCell>전체</TableCell>
                  <TableCell>2023. 11. 02</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={7}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={<>정말 삭제하시겠습니까?</>}
        button={
          <>
            <Button onClick={handleClose} color="gray" line size="small">
              취소
            </Button>
            <Button onClick={handleClose} color="black" size="small">
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default NoticeListPage;
