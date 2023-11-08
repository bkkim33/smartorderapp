import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Input from "../../../components/Input";

//mui table import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function UserListPage() {
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">사용자 관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <div className="mb_20">
          <Input
            onClick={() => { }}
            placeholder="사용자 검색 (사용자 ID, 관리자명)"
            shape="round"
            type="search"
            width="300px"
          />          
        </div>
        <div className="tbl">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="5%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>구분</TableCell>
                  <TableCell>법인 소속명</TableCell>
                  <TableCell>사용자 ID</TableCell>
                  <TableCell>사용자명</TableCell>
                  <TableCell>전화번호</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="center">1</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존클라우드</TableCell>
                  <TableCell className="center">admin01@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동1</TableCell>
                  <TableCell className="center">010-****-7532</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">2</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존</TableCell>
                  <TableCell className="center">admin02@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동2</TableCell>
                  <TableCell className="center">010-****-1741</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">3</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존</TableCell>
                  <TableCell className="center">admin03@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동3</TableCell>
                  <TableCell className="center">010-****-8234</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">3</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존클라우드</TableCell>
                  <TableCell className="center">admin04@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동4</TableCell>
                  <TableCell className="center">010-****-4253</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">4</TableCell>
                  <TableCell className="center">방문객</TableCell>
                  <TableCell className="center">-</TableCell>
                  <TableCell className="center">-</TableCell>
                  <TableCell className="center">9876</TableCell>
                  <TableCell className="center">010-****-9876</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">5</TableCell>
                  <TableCell className="center">방문객</TableCell>
                  <TableCell className="center">-</TableCell>
                  <TableCell className="center">-</TableCell>
                  <TableCell className="center">1234</TableCell>
                  <TableCell className="center">010-****-1234</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">6</TableCell>
                  <TableCell className="center">방문객</TableCell>
                  <TableCell className="center">-</TableCell>
                  <TableCell className="center">-</TableCell>
                  <TableCell className="center">5678</TableCell>
                  <TableCell className="center">010-****-5678</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">7</TableCell>
                  <TableCell className="center">입주사</TableCell>
                  <TableCell className="center">쿠버릭스</TableCell>
                  <TableCell className="center">admin17@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동17</TableCell>
                  <TableCell className="center">010-****-8523</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">8</TableCell>
                  <TableCell className="center">입주사</TableCell>
                  <TableCell className="center">쿠버릭스</TableCell>
                  <TableCell className="center">admin18@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동18</TableCell>
                  <TableCell className="center">010-****-7436</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">9</TableCell>
                  <TableCell className="center">입주사</TableCell>
                  <TableCell className="center">쿠버릭스</TableCell>
                  <TableCell className="center">admin19@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동19</TableCell>
                  <TableCell className="center">010-****-3267</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">10</TableCell>
                  <TableCell className="center">입주사</TableCell>
                  <TableCell className="center">쿠버릭스</TableCell>
                  <TableCell className="center">admin20@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동20</TableCell>
                  <TableCell className="center">010-****-3697</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">11</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존클라우드</TableCell>
                  <TableCell className="center">admin01@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동1</TableCell>
                  <TableCell className="center">010-****-7532</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">12</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존</TableCell>
                  <TableCell className="center">admin02@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동2</TableCell>
                  <TableCell className="center">010-****-1741</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">13</TableCell>
                  <TableCell className="center">임직원</TableCell>
                  <TableCell className="center">메가존</TableCell>
                  <TableCell className="center">admin03@mz.co.kr</TableCell>
                  <TableCell className="center">홍길동3</TableCell>
                  <TableCell className="center">010-****-8234</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </ContentBox>      
    </Layout>
  );
}

export default UserListPage;