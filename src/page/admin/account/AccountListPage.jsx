import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

//mui table import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function AccountListPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">계정/권한 관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <div className="align mb_20">
          <div className="lft">
            <Input
              onClick={() => { }}
              placeholder="관리자 검색 (관리자 ID, 관리자명)"
              shape="round"
              type="search"
              width="300px"
            />
          </div>
          <div className="rgt">
            <Button
              size="small_h35"
              onClick={() => navigate("./create")}
            >
              계정 생성
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="10%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>소속</TableCell>
                  <TableCell>관리자 ID</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>권한</TableCell>
                  <TableCell>전시여부</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="center">1</TableCell>
                  <TableCell className="center">메가존클라우드</TableCell>
                  <TableCell className="center">admin01</TableCell>
                  <TableCell className="center">이름</TableCell>
                  <TableCell className="center">카페서비스 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">2</TableCell>
                  <TableCell className="center">클라우드카페</TableCell>
                  <TableCell className="center">admin02</TableCell>
                  <TableCell className="center">010-***-1234</TableCell>
                  <TableCell className="center">매장 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">3</TableCell>
                  <TableCell className="center">클라우드카페</TableCell>
                  <TableCell className="center">admin03</TableCell>
                  <TableCell className="center">홍길동3</TableCell>
                  <TableCell className="center">매장 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="center">4</TableCell>
                  <TableCell className="center">클라우드카페</TableCell>
                  <TableCell className="center">admin04</TableCell>
                  <TableCell className="center">홍길동4</TableCell>
                  <TableCell className="center">어드민 관리자</TableCell>
                  <TableCell className="center">
                    <Link to="/admin/account/modify">권한 수정</Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </ContentBox>      
    </Layout>
  );
}

export default AccountListPage;