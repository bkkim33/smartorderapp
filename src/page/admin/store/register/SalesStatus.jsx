import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Button from "../../../../components/Button";
import MuiPage from "../../../../components/MuiPage";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";
import MuiAlert from "../../../../components/MuiAlert";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
  { label: "판매중", value: 0},
  { label: "품절", value: 1},
  { label: "판매중지", value: 2 },
];

function SalesStatus() {
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
              height: 15,
              width: 15,
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
                  placeholder="판매상태를 선택하세요"
                  options={salesStatusData}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>P00002</TableCell>
              <TableCell>Coffee</TableCell>
              <TableCell>아메리카노</TableCell>
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
                <Select
                  placeholder="판매상태를 선택하세요"
                  options={salesStatusData}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>P00003</TableCell>
              <TableCell>Coffee</TableCell>
              <TableCell>카푸치노</TableCell>
              <TableCell>
                <FormGroup globalClass="align center">
                  <Radio
                    defaultChecked
                    name="contact111111"
                    id="radio111111"
                    value="exposure"
                  >
                    전시
                  </Radio>
                  <Radio
                    name="contact111111"
                    id="radio111112"
                    value="nonexposed"
                  >
                    미전시
                  </Radio>
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <Select
                  placeholder="판매상태를 선택하세요"
                  options={salesStatusData}
                  defaultValue={salesStatusData[0]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>P00004</TableCell>
              <TableCell>Coffee</TableCell>
              <TableCell>카페라떼</TableCell>
              <TableCell>
                <FormGroup globalClass="align center">
                  <Radio
                    defaultChecked
                    name="contact1111111"
                    id="radio1111111"
                    value="exposure"
                  >
                    전시
                  </Radio>
                  <Radio
                    name="contact1111111"
                    id="radio1111112"
                    value="nonexposed"
                  >
                    미전시
                  </Radio>
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <Select
                  placeholder="판매상태를 선택하세요"
                  options={salesStatusData}
                  defaultValue={salesStatusData[1]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>P00005</TableCell>
              <TableCell>Coffee</TableCell>
              <TableCell>콜드부르</TableCell>
              <TableCell>
                <FormGroup globalClass="align center">
                  <Radio
                    defaultChecked
                    name="contact11111111"
                    id="radio11111111"
                    value="exposure"
                  >
                    전시
                  </Radio>
                  <Radio
                    name="contact11111111"
                    id="radio11111112"
                    value="nonexposed"
                  >
                    미전시
                  </Radio>
                </FormGroup>
              </TableCell>
              <TableCell className="left">
                <Select
                  placeholder="판매상태를 선택하세요"
                  options={salesStatusData}
                  defaultValue={salesStatusData[2]}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </div>
      <MuiPage />
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
    </div>
  );
}

export default SalesStatus;