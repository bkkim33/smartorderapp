import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";
import ContactInfo from "../../../../components/ContactInfo";
import Select from "../../../../components/Select";
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

const inUse = [
  { value: "Y", label: "Y" },
  { value: "N", label: "N" },
];

function PickupMethod() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [receiptMethodsData, setReceiptMethodsData] = useState([
    { id: 1, name: "매장픽업", selectedOption: "Y" },
    { id: 2, name: "테이블 수령", selectedOption: "Y" },
    { id: 3, name: "배달 요청", selectedOption: "N" },
  ]);

  const handleSelectChange = (id, value) => {
    setReceiptMethodsData((prevData) =>
      prevData.map((method) =>
        method.id === id ? { ...method, selectedOption: value } : method
      )
    );
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
              <TableCell>NO</TableCell>
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
      </div>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={<>수량방법을 삭제하시겠습니까?</>}
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
                fill: "var(--c99)",
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