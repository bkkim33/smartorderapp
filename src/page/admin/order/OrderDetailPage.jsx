import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiPage from "../../../components/MuiPage";
import TextToggle from "../../../components/TextToggle";
import Modal from "./OrderDetailModal";

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
    label: "임직원 법인명",
    value: "임직원 법인명",
  },
  {
    label: "입주사 회사명",
    value: "입주사 회사명",
  },
  {
    label: "방문객",
    value: "방문객",
  },
]

const storeNameOpt = [
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


function OrderDetailPage() {
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
        <h1 className="headline2">주문 내역 관리</h1>
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
            <th>주문자(소속)</th>
            <td>
              <Select
                width="350px"
                round="round"
                placeholder="- SELECT -"
                defaultValue={0}
                options={categoryOpt}
              />
            </td>
          </tr>
          <tr>
            <th>매장명</th>
            <td>
              <Select
                width="350px"
                round="round"
                placeholder="- SELECT -"
                defaultValue={0}
                options={storeNameOpt}
              />
            </td>
          </tr>
          <tr>
            <th>기간설정</th>
            <td>
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
                onClick={() => {}}
                placeholder="날짜 입력"
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
      <div className="align bottom mt_42">
        <div className="lft">
          <p className="body0">총 <span className="title3">200</span>건</p>
        </div>
        <div className="rgt">
          <Select
            minwidth="200px"
            round="round"
            defaultValue={0}
            options={numOpt}
          />
        </div>
      </div>
      <ContentBox>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="5%" />
                <col width="15%" />
                <col width="15%" />
                <col width="auto" />
                <col width="20%" />
                <col width="15%" />
                <col width="10%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>주문번호</TableCell>
                  <TableCell>주문자(소속)</TableCell>
                  <TableCell>주문명</TableCell>
                  <TableCell>주문일시</TableCell>
                  <TableCell>매장명</TableCell>
                  <TableCell>결제금액</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>000000</TableCell>
                  <TableCell>메가존 클라우드</TableCell>
                  <TableCell>
                    <Button
                      none
                      size="xsmall"
                      onClick={handleOpen}
                      
                    >
                      에스프레소 1개 외
                    </Button>
                  </TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>클라우드 카페</TableCell>
                  <TableCell>
                    <Button
                      none
                      size="xsmall"
                      onClick={handleOpen}
                    >
                      8,280원
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>000001</TableCell>
                  <TableCell>메가존 클라우드</TableCell>
                  <TableCell>
                    <Button
                      none
                      size="xsmall"
                      onClick={handleOpen}

                    >
                      아메리카노 1개 외
                    </Button>
                  </TableCell>
                  <TableCell>2023.10.24 09:27:10</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>
                    <Button
                      none
                      size="xsmall"
                      onClick={handleOpen}
                    >
                      4,280원
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>000002</TableCell>
                  <TableCell>메가존</TableCell>
                  <TableCell>카페라떼 1개</TableCell>
                  <TableCell>2023.10.24 09:27:20</TableCell>
                  <TableCell>클라우드 카페</TableCell>
                  <TableCell>2,000원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>000003</TableCell>
                  <TableCell>메가존</TableCell>
                  <TableCell>카푸치노 1개</TableCell>
                  <TableCell>2023.10.24 09:27:30</TableCell>
                  <TableCell>클라우드 카페</TableCell>
                  <TableCell>2,000원</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <Modal open={open} handleClose={handleClose} />
    </Layout>
  );
}

export default OrderDetailPage;
