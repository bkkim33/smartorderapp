import React, { useState } from "react";
import Button from "../../../../components/Button";
import FormGroup from "../../../../components/FormGroup";
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

function StoreInfo() {

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

  const hours = Array.from({ length: 24 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  const minutes = Array.from({ length: 60 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  return (
    <div style={{ width: "100%" }}>
      <div className="align mb_10 mt_10">
        <div className="lft">
          <Button onClick={handleOpen} type="pc" color="gray" line size="small">
            삭제
          </Button>
        </div>
        <div className="rgt">
          <Button disabled onClick={handleOpen04} type="pc" color="point" size="small">
            요일 추가
          </Button>
        </div>
      </div>
      <div className="tbl">
        <MuiTable aria-label="simple table">
          <colgroup>
            <col width="2%" />
            <col width="49%" />
            <col width="49%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox id="checkAll" name="checkAll" />
              </TableCell>
              <TableCell className="required">운영 요일</TableCell>
              <TableCell className="required">운영 시간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="left">
                <Checkbox id="checkbox01" name="checkbox01" />
              </TableCell>
              <TableCell className="left">
                <FormGroup>
                  <Checkbox
                    defaultChecked
                    name="contact00"
                    id="check1"
                    value="월"
                    txt="월"
                  />
                  <Checkbox
                    defaultChecked
                    name="contact00"
                    id="check2"
                    value="화"
                    txt="화"
                  />
                  <Checkbox
                    defaultChecked
                    name="contact00"
                    id="check3"
                    value="수"
                    txt="수"
                  />
                  <Checkbox
                    defaultChecked
                    name="contact00"
                    id="check4"
                    value="목"
                    txt="목"
                  />
                  <Checkbox
                    defaultChecked
                    name="contact00"
                    id="check5"
                    value="금"
                    txt="금"
                  />
                  <Checkbox name="contact00" id="check6" value="토" txt="토" />
                  <Checkbox name="contact00" id="check7" value="일" txt="일" />
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <div className="align start">
                  <span className="bold700 mr_10">시작</span>
                  <Select
                    minwidth="80px"
                    options={hours}
                    defaultValue={hours[8]}
                  />
                  <span className="ml_10 mr_10">시</span>
                  <Select
                    minwidth="80px"
                    options={minutes}
                    defaultValue={minutes[30]}
                  />
                  <span className="ml_10 mr_10">분</span>
                  <span className="ml_10 mr_10">~</span>
                  <span className="bold700 ml_10 mr_10">종료</span>
                  <Select
                    minwidth="80px"
                    options={hours}
                    defaultValue={hours[18]}
                  />
                  <span className="ml_10 mr_10">시</span>
                  <Select
                    minwidth="80px"
                    options={minutes}
                    defaultValue={minutes[0]}
                  />
                  <span className="ml_10 mr_10">분</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="left">
                <Checkbox id="checkbox01" name="checkbox01" />
              </TableCell>
              <TableCell className="left">
                <FormGroup>
                  <Checkbox
                    defaultChecked
                    name="contact001"
                    id="check11"
                    value="월"
                    txt="월"
                    disabled
                  />
                  <Checkbox
                    defaultChecked
                    name="contact001"
                    id="check21"
                    value="화"
                    txt="화"
                    disabled
                  />
                  <Checkbox
                    defaultChecked
                    name="contact001"
                    id="check31"
                    value="수"
                    txt="수"
                    disabled
                  />
                  <Checkbox
                    defaultChecked
                    name="contact001"
                    id="check41"
                    value="목"
                    txt="목"
                    disabled
                  />
                  <Checkbox
                    defaultChecked
                    name="contact001"
                    id="check51"
                    value="금"
                    txt="금"
                    disabled
                  />
                  <Checkbox
                    name="contact001"
                    id="check61"
                    value="토"
                    txt="토"
                    defaultChecked
                  />
                  <Checkbox
                    name="contact001"
                    id="check71"
                    value="일"
                    txt="일"
                    defaultChecked
                  />
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <div className="align start">
                  <span className="bold700 mr_10">시작</span>
                  <Select
                    minwidth="80px"
                    options={hours}
                    defaultValue={hours[9]}
                  />
                  <span className="ml_10 mr_10">시</span>
                  <Select
                    minwidth="80px"
                    options={minutes}
                    defaultValue={minutes[0]}
                  />
                  <span className="ml_10 mr_10">분</span>
                  <span className="ml_10 mr_10">~</span>
                  <span className="bold700 ml_10 mr_10">종료</span>
                  <Select
                    minwidth="80px"
                    options={hours}
                    defaultValue={hours[17]}
                  />
                  <span className="ml_10 mr_10">시</span>
                  <Select
                    minwidth="80px"
                    options={minutes}
                    defaultValue={minutes[0]}
                  />
                  <span className="ml_10 mr_10">분</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </div>
      <MuiModal
        midSize
        open={open04}
        onClose={handleClose04}
        header={
          <>
            <h4>요일추가</h4>
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
        <FormGroup>
          <Checkbox
            defaultChecked
            disabled
            name="contact001"
            id="check11"
            value="월"
            txt="월"
          />
          <Checkbox
            defaultChecked
            disabled
            name="contact001"
            id="check21"
            value="화"
            txt="화"
          />
          <Checkbox
            defaultChecked
            disabled
            name="contact001"
            id="check31"
            value="수"
            txt="수"
          />
          <Checkbox
            defaultChecked
            disabled
            name="contact001"
            id="check41"
            value="목"
            txt="목"
          />
          <Checkbox
            defaultChecked
            disabled
            name="contact001"
            id="check51"
            value="금"
            txt="금"
          />
          <Checkbox name="contact001" id="check61" value="토" txt="토" />
          <Checkbox name="contact001" id="check71" value="일" txt="일" />
        </FormGroup>
        <div className="align center mt_30 gap_5">
          <Button onClick={handleClose04} color="gray" line size="small">
            취소
          </Button>
          <Button onClick={handleClose04} color="black" size="small">
            확인
          </Button>
        </div>
      </MuiModal>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={<>매장운영시간을 삭제하시겠습니까?</>}
        desc={
          <>
            운영시간이 존재 하지 않으면 <br />
            <span className="red_text">
              매장 상태가 준비중 상태로 되며, <br />
              주문을 받을 수 없는 상태가 됩니다.
            </span>
          </>
        }
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
    </div>
  );
}

export default StoreInfo;