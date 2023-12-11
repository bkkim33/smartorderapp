import React from "react";
import MuiModal from "../../../components/MuiModal";
import Button from "../../../components/Button";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function OrderDetailModal({ open, handleClose }){
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      header={
        <>
          <h4>주문 상세내역</h4>
          <Button
            icon="Delete"
            none
            onClick={handleClose}
            size="icon_s"
            iconStyle={{
              fill: "var(--primary)",
            }}
          >
            Close
          </Button>
        </>
      }
    >
      <div className="tbl">
        <TableContainer>
          <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
            <colgroup>
              <col width="60%" />
              <col width="40%" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>메뉴명 / 할인내역</TableCell>
                <TableCell>금액</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="left">아메리카노 2개 (ICED / 연하게)</TableCell>
                <TableCell className="right">7,600 원</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="left">아메리카노 2개 (ICED / 연하게)</TableCell>
                <TableCell className="right">7,600 원</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="left">[쿠폰할인] 입사환영 아메리카노 1잔</TableCell>
                <TableCell className="right">-3,800 원</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="left">[임직원할인] 아메리카노 할인</TableCell>
                <TableCell className="right">-2,810 원</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="left">플레인요거트스무디 1개 (ICED Only)</TableCell>
                <TableCell className="right">4,200 원</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="left">[할인] 입사쿠폰 모든음료1</TableCell>
                <TableCell className="right">-4,200 원</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="left">[할인] 입사쿠폰 모든음료1</TableCell>
                <TableCell className="right">-4,200 원</TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </TableContainer>
      </div>
    </MuiModal>
  );
}

export default OrderDetailModal;