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
      <div className="admin_ordersales">
        <div className="total_box">
          <div className="total_item">
            <div className="total_tit">합계금액</div>
            <div className="total_price">
              <p>21,100</p>
              <span>원</span>
            </div>
          </div>
          <div className="total_item">
            <div className="total_tit">총 할인 금액</div>
            <div className="total_price">
              <p>-106,820</p>
              <span>원</span>
            </div>
          </div>
          <div className="total_item">
            <div className="total_tit">총 결제 금액</div>
            <div className="total_price">
              <p className="red_text">4,280</p>
              <span>원</span>
            </div>
          </div>
        </div>
        <div className="tbl">
          <TableContainer sx={{ maxHeight: 495 }}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
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
                  <TableCell className="left"><p className="discount">[쿠폰할인] 입사환영 아메리카노 1잔</p></TableCell>
                  <TableCell className="right"><span className="red_text">-3,800 원</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left"><p className="discount">[임직원할인] 아메리카노 할인</p></TableCell>
                  <TableCell className="right"><span className="red_text">-2,810 원</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left">플레인요거트스무디 1개 (ICED Only)</TableCell>
                  <TableCell className="right">4,200 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left"><p className="discount">[할인] 입사쿠폰 모든음료1</p></TableCell>
                  <TableCell className="right"><span className="red_text">-4,200 원</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left">플레인요거트스무디 1개 (ICED Only)</TableCell>
                  <TableCell className="right">4,200 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left"><p className="discount">[할인] 입사쿠폰 모든음료1</p></TableCell>
                  <TableCell className="right"><span className="red_text">-4,200 원</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left">플레인요거트스무디 1개 (ICED Only)</TableCell>
                  <TableCell className="right">4,200 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left"><p className="discount">[할인] 입사쿠폰 모든음료1</p></TableCell>
                  <TableCell className="right"><span className="red_text">-4,200 원</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left">플레인요거트스무디 1개 (ICED Only)</TableCell>
                  <TableCell className="right">4,200 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="left"><p className="discount">[할인] 입사쿠폰 모든음료1</p></TableCell>
                  <TableCell className="right"><span className="red_text">-4,200 원</span></TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>        
      </div>      
    </MuiModal>
  );
}

export default OrderDetailModal;