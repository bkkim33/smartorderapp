import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../../layout/DefaultLayout";
import ContentBox from "../../../../layout/ContentBox";
import Button from "../../../../components/Button";
import FormGroup from "../../../../components/FormGroup";
import Select from "../../../../components/Select";
import Checkbox from "../../../../components/Checkbox";
import Modal from "./AdrresModal";
import MuiAlert from "../../../../components/MuiAlert";

// import Tabs from "../../../../components/Tabs";
// import StoreInfo from "./StoreInfo";
// import PickupMethod from "./PickupMethod";
// import SalesStatus from "./SalesStatus";


import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import Radio from "../../../../components/Radio";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function StoreInfoModifyPage() {
  const navigate = useNavigate();

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [certification, setCertification] = useState(false);
  const certifications = () => {
    setCertification(true);
  };

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

  const hours = Array.from({ length: 24 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  const minutes = Array.from({ length: 60 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">매장정보 상세</h1>
      </div>
      <ContentBox>
        <Table
          globalClass="flex1"
          colgroup={
            <>
              <col width="10%" />
              <col width="auto" />
              <col width="10%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th className="required">가맹점명</th>
            <td>
              <Input
                type="text"
                placeholder="가맹점명을 입력해주세요."
                width="300px"
                defaultValue="클라우드카페"
              />
            </td>
            <th className="required">노출여부</th>
            <td>
              <FormGroup>
                <Radio
                  name="contact1"
                  id="radio5"
                  value="exposure"
                  defaultChecked
                >
                  노출
                </Radio>
                <Radio name="contact1" id="radio6" value="nonexposed">
                  노출안함
                </Radio>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <th className="required">사업자번호</th>
            <td>
              <div className="align start">
                <Input
                  type="text"
                  placeholder="사업자번호를 입력해주세요."
                  numericOnly={true}
                  width="300px"
                  defaultValue="02-1234-1234"
                />
                <span className="required_lft red ml_10">
                  숫자만 입력 가능합니다.
                </span>
              </div>
            </td>
            <th className="required">대표자명</th>
            <td>
              <Input
                type="text"
                placeholder="대표자명을 입력해주세요."
                width="300px"
                defaultValue="홍길동"
              />
            </td>
          </tr>
          <tr>
            <th className="required">연락처</th>
            <td>
              <div className="align start">
                <Input
                  onClick={certifications}
                  certification={certification}
                  placeholder="핸드폰 번호 입력"
                  phone="number"
                  maxLength={13}
                  width="300px"
                  defaultValue="010-1234-1234"
                />
                <span className="required_lft red ml_10">
                  숫자만 입력 가능합니다.
                </span>
              </div>
            </td>
            <th className="required">주소</th>
            <td>
              <div className="align start">
                <Input
                  type="text"
                  placeholder="주소를 입력해주세요."
                  width="300px"
                  defaultValue="서울특별시 강남구 논현로85길 46"
                />
                <Button
                  onClick={handleOpen2}
                  type="pc"
                  size="xsmall"
                  globalClass="ml_10"
                  color="point"
                >
                  찾기
                </Button>
              </div>
            </td>
          </tr>
        </Table>
        <div className="mt_30">
          <div style={{ width: "100%" }}>
            <div className="align mb_10 mt_10">
              <div className="lft">
                <Button
                  onClick={handleOpen}
                  type="pc"
                  color="gray"
                  line
                  size="small"
                >
                  삭제
                </Button>
              </div>
              <div className="rgt">
                <Button type="pc" color="point" size="small">
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
                        <Checkbox
                          name="contact00"
                          id="check6"
                          value="토"
                          txt="토"
                        />
                        <Checkbox
                          name="contact00"
                          id="check7"
                          value="일"
                          txt="일"
                        />
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
              <div className="align center gap_10 mt_30">
                <Button
                  onClick={() => handleOpenAlert(2)}
                  type="pc"
                  color="gray"
                  line
                  size="small"
                >
                  취소
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
                    onClick={() => navigate("/admin/store/info")}
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
                    onClick={() => navigate("/admin/store/info")}
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
        </div>
      </ContentBox>
      <Modal open={open2} handleClose={handleClose2} />
    </Layout>
  );
}

export default StoreInfoModifyPage;
