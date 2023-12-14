import React from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MuiPage from "../../../components/MuiPage";

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
      <ContentBox top>
        <div>
          <Input
            onClick={() => { }}
            shape="none"
            width="310px"
            placeholder="사용자 검색 (사용자 ID, 사용자명)"
          />
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
                  <TableCell>1</TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin01@mz.co.kr</TableCell>
                  <TableCell>홍길동1</TableCell>
                  <TableCell>010-****-7532</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>메가존</TableCell>
                  <TableCell>admin02@mz.co.kr</TableCell>
                  <TableCell>홍길동2</TableCell>
                  <TableCell>010-****-1741</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>메가존</TableCell>
                  <TableCell>admin03@mz.co.kr</TableCell>
                  <TableCell>홍길동3</TableCell>
                  <TableCell>010-****-8234</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin04@mz.co.kr</TableCell>
                  <TableCell>홍길동4</TableCell>
                  <TableCell>010-****-4253</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>9876</TableCell>
                  <TableCell>010-****-9876</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>1234</TableCell>
                  <TableCell>010-****-1234</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>5678</TableCell>
                  <TableCell>010-****-5678</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>7</TableCell>
                  <TableCell>입주사</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin17@mz.co.kr</TableCell>
                  <TableCell>홍길동17</TableCell>
                  <TableCell>010-****-8523</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8</TableCell>
                  <TableCell>입주사</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin18@mz.co.kr</TableCell>
                  <TableCell>홍길동18</TableCell>
                  <TableCell>010-****-7436</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9</TableCell>
                  <TableCell>입주사</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin19@mz.co.kr</TableCell>
                  <TableCell>홍길동19</TableCell>
                  <TableCell>010-****-3267</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell>입주사</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin20@mz.co.kr</TableCell>
                  <TableCell>홍길동20</TableCell>
                  <TableCell>010-****-3697</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11</TableCell>
                  <TableCell>임직원</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin01@mz.co.kr</TableCell>
                  <TableCell>홍길동1</TableCell>
                  <TableCell>010-****-7532</TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>      
    </Layout>
  );
}

export default UserListPage;