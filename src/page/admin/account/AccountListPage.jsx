import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MuiPage from "../../../components/MuiPage";

//mui table import
import MuiTable from '@mui/material/Table';
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
              onClick={() => {}}
              placeholder="관리자 검색 (관리자 ID, 관리자명)"
              type="search"
              width="300px"
            />
          </div>
          <div className="rgt">
            <Button
              type="pc"
              color="point"
              size="small"
              onClick={() => navigate("./create")}
            >
              계정 생성
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="10%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>소속</TableCell>
                  <TableCell>관리자 ID</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>권한</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow onClick={() => navigate("/admin/account/modify")}>
                  <TableCell>1</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin01</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>카페서비스 관리자</TableCell>
                </TableRow>
                <TableRow onClick={() => navigate("/admin/account/modify")}>
                  <TableCell>2</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin02</TableCell>
                  <TableCell>010-***-1234</TableCell>
                  <TableCell>매장 관리자</TableCell>
                </TableRow>
                <TableRow onClick={() => navigate("/admin/account/modify")}>
                  <TableCell>3</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin03</TableCell>
                  <TableCell>홍길동3</TableCell>
                  <TableCell>매장 관리자</TableCell>
                </TableRow>
                <TableRow onClick={() => navigate("/admin/account/modify")}>
                  <TableCell>4</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin04</TableCell>
                  <TableCell>홍길동4</TableCell>
                  <TableCell>어드민 관리자</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
          <MuiPage />
        </div>
      </ContentBox>
    </Layout>
  );
}

export default AccountListPage;