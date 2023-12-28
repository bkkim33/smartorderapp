import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../../layout/DefaultLayout";
import ContentBox from "../../../../layout/ContentBox";
import Button from "../../../../components/Button";
import FormGroup from "../../../../components/FormGroup";
import Checkbox from "../../../../components/Checkbox";
import MuiAlert from "../../../../components/MuiAlert";

import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import Radio from "../../../../components/Radio";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function StoreReceiptModifyPage() {
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

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품수령방법 상세</h1>
      </div>
      <ContentBox>
        <Table
          globalClass="flex1"
          colgroup={
            <>
              <col width="8%" />
              <col width="10%" />
              <col width="8%" />
              <col width="10%" />
              <col width="8%" />
              <col width="10%" />
              <col width="8%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th className="">가맹점명</th>
            <td>클라우드카페</td>
            <th className="">대표자명</th>
            <td>홍길동</td>
            <th className="">연락처</th>
            <td>010-1234-1234</td>
            <th className="">주소</th>
            <td>서울특별시 강남구 논현로85길 46</td>
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
                      <Input
                        width="440px"
                        placeholder="수령방법명 입력"
                        defaultValue="매장픽업"
                        disabled
                      />
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
                  <TableRow>
                    <TableCell>
                      <Checkbox id="checkbox02" name="checkbox02" />
                    </TableCell>
                    <TableCell>2</TableCell>
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
                      <Input
                        width="440px"
                        placeholder="수령방법명 입력"
                        defaultValue="테이블 수령"
                        disabled
                      />
                    </TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          name="contact01"
                          id="radio11"
                          value="사용"
                          defaultChecked
                        >
                          사용
                        </Radio>
                        <Radio name="contact01" id="radio12" value="미사용">
                          미사용
                        </Radio>
                      </FormGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="checkbox03" name="checkbox03" />
                    </TableCell>
                    <TableCell>3</TableCell>
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
                      <Input
                        width="440px"
                        placeholder="수령방법명 입력"
                        defaultValue="배달 요청"
                      />
                    </TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio name="contact011" id="radio111" value="사용">
                          사용
                        </Radio>
                        <Radio
                          defaultChecked
                          name="contact011"
                          id="radio112"
                          value="미사용"
                        >
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
                    onClick={() => handleCloseAlert(1)}
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
              desc={<>작성된 내용이 저장되지 않습니다.</>}
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
                    onClick={() => navigate("/admin/store/")}
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
          </div>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default StoreReceiptModifyPage;
