import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/DefaultLayout";
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import FormGroup from "../../../components/FormGroup";
import Checkbox from "../../../components/Checkbox";
import MuiAlert from "../../../components/MuiAlert";
import Select from "../../../components/Select";

import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Radio from "../../../components/Radio";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const targetOpt = [
  { label: "클라우드 카페", value: "클라우드 카페" },
  { label: "클라우드 9 카페", value: "클라우드 9 카페" },
  { label: "과천 클라우드 카페", value: "과천 클라우드 카페" },
];

const userOpt = [
  { label: "김민수1", value: "김민수1" },
  { label: "김민수2", value: "김민수2" },
  { label: "김민수3", value: "김민수3" },
];

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
        <h1 className="headline2">수령방법</h1>
      </div>
      <ContentBox>
        <Table
          globalClass="flex1"
          colgroup={
            <>
              <col width="12%" />
              <col width="auto" />
              <col width="12%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th className="">판매 매장</th>
            <td>
              <Select
                minwidth="80px"
                maxwidth="400px"
                options={targetOpt}
                defaultValue={targetOpt[0]}
                placeholder="판매 매장"
              />
            </td>
            <th className="">주소</th>
            <td>서울특별시 강남구 논현로85길 46</td>
          </tr>
          <tr>
            <th className="">테이블 수</th>
            <td>12</td>
            <th className="">직원 수</th>
            <td>10</td>
          </tr>
        </Table>
        <div className="mt_30">
          <div style={{ width: "100%" }}>
            <div className="tbl">
              <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <colgroup>
                  <col width="10%" />
                  <col width="10%" />
                  <col width="55%" />
                  <col width="25%" />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2}>수령방법</TableCell>
                    <TableCell>상세옵션</TableCell>
                    <TableCell>사용 여부</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>매장 픽업</TableCell>
                    <TableCell>
                      <Input
                        width="440px"
                        numericOnly={true}
                        placeholder="픽업대 개수"
                        // defaultValue={4}
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
                    <TableCell rowSpan={2}>테이블 수령</TableCell>
                    <TableCell>직원 서빙</TableCell>
                    <TableCell>
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
                    <TableCell>로봇 서빙</TableCell>
                    <TableCell>
                      <div className="align bottom start">
                        <div
                          className="item wrap"
                          style={{ width: "min-content" }}
                        >
                          <div className="align top start">
                            <div className="item">
                              <Button
                                color="gray"
                                icon="Delete"
                                line
                                size="icon_s"
                                txtColor="txtgray"
                                type="pc"
                                iconStyle={{
                                  width: 14,
                                  height: 14,
                                }}
                              >
                                삭제
                              </Button>
                            </div>
                            <div className="item">
                              <Input width="300px" placeholder="로봇명" />
                            </div>
                            <div className="item">
                              <Input
                                width="150px"
                                placeholder="트레이 수"
                                numericOnly
                              />
                            </div>
                          </div>
                          <div className="align top start mt_10">
                            <div className="item">
                              <Button
                                color="gray"
                                icon="Delete"
                                line
                                size="icon_s"
                                txtColor="txtgray"
                                type="pc"
                                iconStyle={{
                                  width: 14,
                                  height: 14,
                                }}
                              >
                                삭제
                              </Button>
                            </div>
                            <div className="item">
                              <Input width="300px" placeholder="로봇명" />
                            </div>
                            <div className="item">
                              <Input
                                width="150px"
                                placeholder="트레이 수"
                                numericOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <Button
                            color="gray"
                            icon="Plus"
                            line
                            size="icon_s"
                            txtColor="txtgray"
                            type="pc"
                            onClick={() => {}}
                          >
                            옵션가 추가
                          </Button>
                        </div>
                      </div>
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
                  <TableRow>
                    <TableCell rowSpan={2}>배달</TableCell>
                    <TableCell>직원 배달</TableCell>
                    <TableCell className="left">
                    </TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          name="contact0112"
                          id="radio1112"
                          value="사용"
                          defaultChecked
                        >
                          사용
                        </Radio>
                        <Radio name="contact0112" id="radio1212" value="미사용">
                          미사용
                        </Radio>
                      </FormGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>로봇 배달</TableCell>
                    <TableCell>
                      <div className="align bottom start">
                        <div
                          className="item wrap"
                          style={{ width: "min-content" }}
                        >
                          <div className="align top start">
                            <div className="item">
                              <Button
                                color="gray"
                                icon="Delete"
                                line
                                size="icon_s"
                                txtColor="txtgray"
                                type="pc"
                                iconStyle={{
                                  width: 14,
                                  height: 14,
                                }}
                              >
                                삭제
                              </Button>
                            </div>
                            <div className="item">
                              <Input width="300px" placeholder="로봇명" />
                            </div>
                            <div className="item">
                              <Input
                                width="150px"
                                placeholder="트레이 수"
                                numericOnly
                              />
                            </div>
                          </div>
                          <div className="align top start mt_10">
                            <div className="item">
                              <Button
                                color="gray"
                                icon="Delete"
                                line
                                size="icon_s"
                                txtColor="txtgray"
                                type="pc"
                                iconStyle={{
                                  width: 14,
                                  height: 14,
                                }}
                              >
                                삭제
                              </Button>
                            </div>
                            <div className="item">
                              <Input width="300px" placeholder="로봇명" />
                            </div>
                            <div className="item">
                              <Input
                                width="150px"
                                placeholder="트레이 수"
                                numericOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <Button
                            color="gray"
                            icon="Plus"
                            line
                            size="icon_s"
                            txtColor="txtgray"
                            type="pc"
                            onClick={() => {}}
                          >
                            옵션가 추가
                          </Button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio name="contact01113" id="radio11113" value="사용">
                          사용
                        </Radio>
                        <Radio
                          defaultChecked
                          name="contact01113"
                          id="radio11213"
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
