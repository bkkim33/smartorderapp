import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiPage from "../../../components/MuiPage";
import TextToggle from "../../../components/TextToggle";
import Checkbox from "../../../components/Checkbox";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const targetOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "임직원",
    value: "임직원",
  },
  {
    label: "입주사",
    value: "입주사",
  },
  {
    label: "방문객",
    value: "방문객",
  }
]

const displayOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "노출함(Y)",
    value: "노출함(Y)",
  },
  {
    label: "노출안함(N)",
    value: "노출안함(N)",
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

function NoticeListPage() {
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
        <h1 className="headline2">공지사항 관리</h1>
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
              <Select
                width="350px"
                round="round"
                defaultValue={0}
                options={targetOpt}
              />
            </td>
            <th>전체</th>
            <td>
              <Select
                width="350px"
                round="round"
                defaultValue={0}
                options={displayOpt}
              />
            </td>
          </tr>
          <tr>
            <th>등록일</th>
            <td colSpan={3}>
              {/* 임시 */}
              <TextToggle
                data={[
                  {
                    id: 1,
                    option: null,
                    title: '오늘'
                  },
                  {
                    id: 2,
                    option: null,
                    title: '1주일'
                  },
                  {
                    id: 3,
                    option: null,
                    title: '1개월'
                  },
                  {
                    id: 4,
                    option: null,
                    title: '3개월'
                  }
                ]}
                onClick={() => { }}
                type="linebox"
                globalClass="mb_8"
              />
              <Input
                onClick={() => { }}
                placeholder="날짜 입력"
                shape="round"
              />
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td colSpan={3}>
              <Input
                onClick={() => { }}
                placeholder="제목을 입력해 주세요."
                shape="round"
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
            round="round"
            defaultValue={0}
            options={numOpt}
          />
        </div>
        <div className="rgt">
          <Button onClick={() => {}} size="small_h35" line globalClass="mr_5">
            삭제
          </Button>
          <Button onClick={() => { }} size="small_h35">
            등록하기
          </Button>
        </div>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="8%" />
                <col width="8%" />
                <col width="auto" />
                <col width="12%" />
                <col width="15%" />
                <col width="12%" />
                <col width="12%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check1" name="check1" />
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
                  <TableCell><Checkbox id="check2" name="check2" /></TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>공지사항 제목입니다.</TableCell>
                  <TableCell>전체</TableCell>
                  <TableCell>2023. 10. 30</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check3" name="check3" /></TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>공지사항 제목입니다.</TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>2023. 10. 30</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check4" name="check4" /></TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>공지사항 제목입니다.</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>2023. 10. 30</TableCell>
                  <TableCell>Y</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check5" name="check5" /></TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>공지사항 제목입니다.</TableCell>
                  <TableCell>전체</TableCell>
                  <TableCell>2023. 11. 01</TableCell>
                  <TableCell>N</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check6" name="check6" /></TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>공지사항 제목입니다.</TableCell>
                  <TableCell>전체</TableCell>
                  <TableCell>2023. 11. 01</TableCell>
                  <TableCell>N</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
    </Layout>
  );
}

export default NoticeListPage;
