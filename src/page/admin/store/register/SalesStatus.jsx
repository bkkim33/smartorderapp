import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentBox from "../../../../layout/ContentBox";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import Select from "../../../../components/Select";
import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox";
import MuiAlert from "../../../../components/MuiAlert";
import MuiPage from "../../../../components/MuiPage";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const categoryOpt = [
  { label: "전체", value: "전체" },
  { label: "Coffee", value: "Coffee" },
  { label: "Non-Coffee", value: "Non-Coffee" },
  { label: "Ade/Juice", value: "Ade/Juice" },
  { label: "Blended", value: "Blended" },
  { label: "Tea", value: "Tea" },
  { label: "Bread", value: "Bread" },
  { label: "Bottle", value: "Bottle" },
]

const salesStatusData = [
  { label: "전체", value: 0, red: false },
  { label: "판매중", value: 1, red: false },
  { label: "품절", value: 2, red: true },
  { label: "판매중지", value: 3, red: false },
  { label: "미설정", value: 4, red: false },
];

function SalesStatus() {

  const navigate = useNavigate();
  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);
  const [openAlert3, setOpenAlert3] = useState(false);
  const handleOpenAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(true);
    } else if (alertNumber === 2) {
      setOpenAlert2(true);
    } else if (alertNumber === 3) {
      setOpenAlert3(true);
    }
  };
  const handleCloseAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(false);
    } else if (alertNumber === 2) {
      setOpenAlert2(false);
    } else if (alertNumber === 3) {
      setOpenAlert3(false);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  return (
    <div style={{ width: "100%" }}>
      <div className="align start mb_10 mt_10">
        <div className="item">
          <Select
            minwidth="250px"
            placeholder="상품 카테고리"
            options={categoryOpt}
          />
        </div>
        <div className="item">
          <Select
            minwidth="250px"
            placeholder="판매상태"
            options={salesStatusData}
          />
        </div>
        <div className="item">
          <Input
            width="350px"
            onClick={() => {}}
            placeholder="상품ID 또는 상품명을 입력해주세요."
          />
        </div>
        <div className="item">
          <Button
            type="pc"
            color="black"
            icon="Search"
            iconStyle={{
              fill: "#fff",
              height: 24,
              width: 24,
            }}
            round
            size="icon_s"
          >
            검색
          </Button>
        </div>
      </div>
      <div className="tbl">
        <MuiTable aria-label="simple table">
          <colgroup>
            <col width="6%" />
            <col width="10%" />
            <col width="22%" />
            <col width="22%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>상품명ID</TableCell>
              <TableCell>카테고리명</TableCell>
              <TableCell>상품명</TableCell>
              <TableCell>전시여부</TableCell>
              <TableCell>판매상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>P00001</TableCell>
              <TableCell>Coffee</TableCell>
              <TableCell>에스프레소</TableCell>
              <TableCell>
                <FormGroup globalClass="align center">
                  <Radio name="contact1111" id="radio1111" value="exposure">
                    전시
                  </Radio>
                  <Radio
                    defaultChecked
                    name="contact1111"
                    id="radio1112"
                    value="nonexposed"
                  >
                    미전시
                  </Radio>
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <Select
                  disabled
                  placeholder="미설정"
                  options={salesStatusData}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>P00001</TableCell>
              <TableCell>Coffee</TableCell>
              <TableCell>에스프레소</TableCell>
              <TableCell>
                <FormGroup globalClass="align center">
                  <Radio
                    defaultChecked
                    name="contact11111"
                    id="radio11111"
                    value="exposure"
                  >
                    전시
                  </Radio>
                  <Radio name="contact11111" id="radio11112" value="nonexposed">
                    미전시
                  </Radio>
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <Select placeholder="미설정" options={salesStatusData} />
              </TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </div>
      <MuiPage />
    </div>
  );
}

export default SalesStatus;