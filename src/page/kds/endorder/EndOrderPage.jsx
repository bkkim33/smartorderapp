import React from "react";
import Layout from '../../../layout/KDSDefaultLayout'
import KDSContentBox from "../../../layout/KDSContentBox";
import Button from "../../../components/Button";
import MuiPage from "../../../components/MuiPage";
//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
   
function EndOrderPage() {
  return (
    <Layout>
      <KDSContentBox>
        <div className="align bottom mb_12">
          <div className="lft">
            <Button
              onClick={() => {}}
              size="xsmall"
              icon="Refresh"
              iconStyle={{ fill: "var(--cff)" }}
              globalClass="kds_btn"
            >
              새로고침
            </Button>
          </div>
          <div className="rgt">
            <p className="body0">
              총 <span className="title3 red">200</span>건
            </p>
          </div>
        </div>
        <div className="tbl kds">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="10%" />
                <col width="12%" />
                <col width="17%" />
                <col width="auto" />
                <col width="18%" />
                <col width="12%" />
                <col width="15%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>순서</TableCell>
                  <TableCell>주문번호</TableCell>
                  <TableCell>주문자 정보</TableCell>
                  <TableCell>주문내역</TableCell>
                  <TableCell>주문일시</TableCell>
                  <TableCell>수령방법</TableCell>
                  <TableCell>총 결제금액</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>000000</TableCell>
                  <TableCell>010-****-1234</TableCell>
                  <TableCell>에스프레소 1개 외</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>매장픽업</TableCell>
                  <TableCell>8,280원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>000001</TableCell>
                  <TableCell>010-****-1234</TableCell>
                  <TableCell>에스프레소 1개 외</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>테이블 수령</TableCell>
                  <TableCell>8,280원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>000002</TableCell>
                  <TableCell>010-****-1234</TableCell>
                  <TableCell>에스프레소 1개 외</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>매장픽업</TableCell>
                  <TableCell>8,280원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={8}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage globalClass="KDS_pagenation" />
      </KDSContentBox>
    </Layout>
  );
}

export default EndOrderPage;
