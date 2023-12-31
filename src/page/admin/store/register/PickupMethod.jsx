import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";
import Checkbox from "../../../../components/Checkbox";
import MuiModal from "../../../../components/MuiModal";
import MuiAlert from "../../../../components/MuiAlert";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import TableContainer from '@mui/material/TableContainer';


function PickupMethod() {
  const navigate = useNavigate();
  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);

  const handleOpenAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(true);
    } else if (alertNumber === 2) {
      setOpenAlert2(true);
    }
  };
  const handleCloseAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(false);
    } else if (alertNumber === 2) {
      setOpenAlert2(false);
    }
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open04, setOpen04] = useState(false);
  const handleOpen04 = () => {
    setOpen04(true);
  };
  const handleClose04 = () => {
    setOpen04(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="align mb_10 mt_10">
        <div className="lft">
          <Button onClick={handleOpen} type="pc" color="gray" line size="small">
            삭제
          </Button>
        </div>
        <div className="rgt">
          <Button onClick={handleOpen04} type="pc" color="point" size="small">
            수령방법추가
          </Button>
        </div>
      </div>
      <div className="tbl">
        <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
          <colgroup>
            <col width="2%" />
            <col width="8%" />
            <col width="20%" />
            <col width="50%" />
            <col width="20%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox id="checkAll" name="checkAll" />
              </TableCell>
              <TableCell>No.</TableCell>
              <TableCell>순서변경</TableCell>
              <TableCell>수령방법</TableCell>
              <TableCell>노출여부</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox id="checkbox01" name="checkbox01" />
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell>
                <div className="btn_set align center">
                  <Button
                    icon="AdminArrow"
                    onClick={() => {}}
                    color="gray"
                    line
                    size="icon_s"
                  >
                    위로
                  </Button>
                  <Button
                    icon="AdminArrow"
                    onClick={() => {}}
                    color="gray"
                    line
                    size="icon_s"
                  >
                    아래로
                  </Button>
                  <Button
                    icon="AdminArrowBar"
                    onClick={() => {}}
                    color="gray"
                    line
                    size="icon_s"
                  >
                    한 페이지 위로
                  </Button>
                  <Button
                    icon="AdminArrowBar"
                    onClick={() => {}}
                    color="gray"
                    line
                    size="icon_s"
                  >
                    한 페이지 아래로
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <Input width="440px" placeholder="수령방법명 입력" />
              </TableCell>
              <TableCell>
                <FormGroup globalClass="align center">
                  <Radio
                    name="contact0"
                    id="radio1"
                    value="노출"
                    defaultChecked
                  >
                    사용
                  </Radio>
                  <Radio name="contact0" id="radio2" value="비노출">
                    미사용
                  </Radio>
                </FormGroup>
              </TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
        <div className="align center gap_10 mt_30">
          <Button
            onClick={() => handleOpenAlert(2)}
            type="pc"
            color="gray"
            line
            size="small"
          >
            목록
          </Button>
          <Button
            onClick={() => handleOpenAlert(1)}
            type="pc"
            color="black"
            size="small"
          >
            저장
          </Button>
        </div>
      </div>
      <MuiAlert
        open={openAlert1}
        onClose={() => handleCloseAlert(1)}
        type="admin"
        title={
          <>
            입력한 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button
              onClick={() => handleCloseAlert(1)}
              type="pc"
              color="gray"
              line
              size="small"
            >
              취소
            </Button>
            <Button
              onClick={() => navigate("/admin/store")}
              type="pc"
              color="black"
              size="small"
            >
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={openAlert2}
        onClose={() => handleCloseAlert(2)}
        type="admin"
        iconColor="red"
        title={<>목록으로 이동하시겠습니까?</>}
        desc={<>현재 작성된 내용이 있으면 저장되지 않습니다.</>}
        button={
          <>
            <Button
              onClick={() => handleCloseAlert(2)}
              type="pc"
              color="gray"
              line
              size="small"
            >
              취소
            </Button>
            <Button
              onClick={() => navigate("/admin/store")}
              type="pc"
              color="black"
              size="small"
            >
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={<>수령방법을 삭제하시겠습니까?</>}
        // desc={
        //   <>
        //     수령 방법을 삭제하시면 <br />
        //     <span className="red_text">

        //     </span>
        //   </>
        // }
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
      <MuiModal
        minSize
        open={open04}
        onClose={handleClose04}
        header={
          <>
            <h4>수령방법추가</h4>
            <Button
              icon="Delete"
              none
              onClick={handleClose04}
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
        <Input onClick={() => {}} placeholder="수령방법명을 입력하세요." />
        <div className="align center mt_30 gap_5">
          <Button onClick={handleClose04} color="gray" line size="small">
            취소
          </Button>
          <Button onClick={handleClose04} color="black" size="small">
            확인
          </Button>
        </div>
      </MuiModal>
    </div>
  );
}

export default PickupMethod;