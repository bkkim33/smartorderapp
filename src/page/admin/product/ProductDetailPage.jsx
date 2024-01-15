import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";
import FileUpload from "../../../components/FileUpload";
import Chip from "../../../components/Chip";
import Checkbox from "../../../components/Checkbox";
import MuiModal from "../../../components/MuiModal";
import MuiAlert from "../../../components/MuiAlert";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const categoryOpt = [
  { label: 'Coffee', value: 'Coffee' },
  { label: 'Non-Coffee', value: 'Non-Coffee' },
  { label: 'Ade/Juice', value: 'Ade/Juice' },
  { label: 'Blended', value: 'Blended' },
  { label: 'Tea', value: 'Tea' },
  { label: 'Bread', value: 'Bread' },
  { label: 'Bottle', value: 'Bottle' },
];

function ProductDetailPage() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const [open01, setOpen01] = useState(false);
  // const handleOpen01 = () => {
  //   setOpen01(true);
  // };
  // const handleClose01 = () => {
  //   setOpen01(false);
  // }; 

  const [open02, setOpen02] = useState(false);
  const handleOpen02 = () => {
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };

  const [open03, setOpen03] = useState(false);
  const handleOpen03 = () => {
    setOpen03(true);
  };
  const handleClose03 = () => {
    setOpen03(false);
  };

  const [open05, setOpen05] = useState(false);
  const handleOpen05 = () => {
    setOpen05(true);
  };
  const handleClose05 = () => {
    setOpen05(false);
  };


  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품 정보 상세</h1>
      </div>
      <ContentBox>
        <Table
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
            <th className="required">상품 카테고리</th>
            <td>
              <Select
                maxwidth="300px"
                options={categoryOpt}
                defaultValue={categoryOpt[0]}
              />
            </td>
            <th className="required">상품명</th>
            <td>
              <Input width="300px" defaultValue="아메리카노" />
            </td>
          </tr>
          <tr>
            <th className="required">판매가</th>
            <td>
              <Input
                width="300px"
                placeholder="금액을 입력해주세요."
                type="number"
                defaultValue="3800"
                numtxt="원"
              />
            </td>
            <th>임직원 할인가</th>
            <td>
              <Input
                width="300px"
                placeholder="금액을 입력해주세요."
                type="number"
                defaultValue="990"
                numtxt="원"
              />
            </td>
          </tr>
          <tr>
            <th className="required">APP 이미지</th>
            <td className="vertical_top">
              <FileUpload onChange={() => {}} />
            </td>
            <th>쿠폰할인 적용</th>
            <td className="vertical_top">
              <div className="align top start">
                <div className="item" style={{ minWidth: "117px" }}>
                  <Button
                    size="xsmall"
                    onClick={handleOpen}
                    color="point"
                    type="pc"
                  >
                    쿠폰할인 선택
                  </Button>
                </div>
                <div className="item wrap gap_5">
                  <Chip label="C0001" onClick={() => {}} />
                  <Chip label="C0002" onClick={() => {}} />
                </div>
              </div>
            </td>
          </tr>
          {/* <tr>
            <th className="required">판매 매장</th>
            <td colSpan={3}>
              <div className="align top start">
                <div className="item" style={{ minWidth: "117px" }}>
                  <Button
                    size="small"
                    onClick={handleOpen01}
                    color="point"
                    type="pc"
                  >
                    판매 매장 선택
                  </Button>
                </div>
                <div className="item wrap gap_10">
                  <Chip label="클라우드 카페" onClick={() => {}} />
                  <Chip label="클라우드 9 카페" onClick={() => {}} />
                </div>
              </div>
            </td>
          </tr> */}
        </Table>
        <div className="align mt_30 mb_10">
          <div className="lft">
            <Button
              onClick={handleOpen03}
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
              옵션 추가
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="39%" />
                <col width="59%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll" name="checkAll" />
                  </TableCell>
                  <TableCell>옵션명</TableCell>
                  <TableCell>상세옵션</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="top">
                    <div className="pt_5">
                      <Checkbox id="checkbox01" name="checkbox01" />
                    </div>
                  </TableCell>
                  <TableCell className="top">
                    <Input
                      width="300px"
                      placeholder="옵션명 입력"
                      defaultValue="온도"
                    />
                  </TableCell>
                  <TableCell className="top">
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
                            <Input
                              width="300px"
                              placeholder="상세옵션명 입력"
                              defaultValue="HOT"
                            />
                          </div>
                          <div className="item">
                            <Input
                              width="300px"
                              placeholder="금액을 입력해주세요."
                              type="number"
                              defaultValue="0"
                              numtxt="원"
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
                            <Input
                              width="300px"
                              placeholder="상세옵션명 입력"
                              defaultValue="ICED"
                            />
                          </div>
                          <div className="item">
                            <Input
                              width="300px"
                              placeholder="금액을 입력해주세요."
                              type="number"
                              defaultValue="0"
                              numtxt="원"
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
                </TableRow>
                <TableRow>
                  <TableCell className="top">
                    <div className="pt_5">
                      <Checkbox id="checkbox01" name="checkbox01" />
                    </div>
                  </TableCell>
                  <TableCell className="top">
                    <Input
                      width="300px"
                      placeholder="옵션명 입력"
                      defaultValue="농도"
                    />
                  </TableCell>
                  <TableCell className="top">
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
                            <Input
                              width="300px"
                              placeholder="상세옵션명 입력"
                              defaultValue="기본"
                            />
                          </div>
                          <div className="item">
                            <Input
                              width="300px"
                              placeholder="금액을 입력해주세요."
                              type="number"
                              defaultValue="0"
                              numtxt="원"
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
                            <Input
                              width="300px"
                              placeholder="상세옵션명 입력"
                              defaultValue="연하게"
                            />
                          </div>
                          <div className="item">
                            <Input
                              width="300px"
                              placeholder="금액을 입력해주세요."
                              type="number"
                              defaultValue="0"
                              numtxt="원"
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
                            <Input
                              width="300px"
                              placeholder="상세옵션명 입력"
                              defaultValue="진하게"
                            />
                          </div>
                          <div className="item">
                            <Input
                              width="300px"
                              placeholder="금액을 입력해주세요."
                              type="number"
                              defaultValue="500"
                              numtxt="원"
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
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <div className="align center mt_30 gap_10">
          <Button
            onClick={handleOpen05}
            type="pc"
            color="gray"
            line
            size="small"
          >
            취소
          </Button>
          <Button onClick={handleOpen02} type="pc" color="black" size="small">
            저장
          </Button>
        </div>
      </ContentBox>
      <MuiModal
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>쿠폰할인 선택</h4>
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
                <col width="5%" />
                <col width="25%" />
                <col width="50%" />
                <col width="25%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll01" name="checkbox02" />
                  </TableCell>
                  <TableCell>쿠폰코드</TableCell>
                  <TableCell>쿠폰명</TableCell>
                  <TableCell>할인가</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox02" name="checkbox02" />
                  </TableCell>
                  <TableCell>C0001</TableCell>
                  <TableCell className="left">[방문]아메리카노1잔</TableCell>
                  <TableCell className="right">-3,800 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox03" name="checkbox02" />
                  </TableCell>
                  <TableCell>C0001</TableCell>
                  <TableCell className="left">[방문]모든음료1잔</TableCell>
                  <TableCell className="right">-3,800 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox04" name="checkbox02" />
                  </TableCell>
                  <TableCell>C0001</TableCell>
                  <TableCell className="left">[입사]아메리카노1잔</TableCell>
                  <TableCell className="right">-3,800 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox05" name="checkbox02" />
                  </TableCell>
                  <TableCell>C0001</TableCell>
                  <TableCell className="left">[입사]모든음료1잔</TableCell>
                  <TableCell className="right">-3,800 원</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <div className="align center mt_30 gap_5">
          <Button onClick={handleClose} color="gray" line size="small">
            취소
          </Button>
          <Button onClick={handleClose} color="black" size="small">
            저장
          </Button>
        </div>
      </MuiModal>
      {/* <MuiModal
        open={open01}
        onClose={handleClose01}
        header={
          <>
            <h4>판매 매장 선택</h4>
            <Button
              icon="Delete"
              none
              onClick={handleClose01}
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
          <MuiTable aria-label="simple table">
            <colgroup>
              <col width="2%" />
              <col width="20%" />
              <col width="20%" />
              <col width="15%" />
              <col width="45%" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox id="checkAll1111" name="checkAll1111" />
                </TableCell>
                <TableCell>사업자번호</TableCell>
                <TableCell>가맹점명</TableCell>
                <TableCell>대표자명</TableCell>
                <TableCell>주소</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox id="check11111" name="check11111" />
                </TableCell>
                <TableCell>12345678</TableCell>
                <TableCell className="left">클라우드 9 카페</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">
                  서울특별시 강남구 논현로 85길 46
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox id="check11112" name="check11111" />
                </TableCell>
                <TableCell>12345678</TableCell>
                <TableCell className="left">클라우드 9카페</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">
                  서울특별시 강남구 논현로 85길 46
                </TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
          <div className="align center mt_30 gap_5">
            <Button onClick={handleClose01} color="gray" line size="small">
              취소
            </Button>
            <Button onClick={handleClose01} color="black" size="small">
              저장
            </Button>
          </div>
        </div>
      </MuiModal> */}
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        type="admin"
        title={<>저장 하시겠습니까?</>}
        button={
          <>
            <Button onClick={handleClose02} color="gray" line size="small">
              아니오
            </Button>
            <Button
              onClick={() => navigate("/admin/product/product/")}
              color="black"
              size="small"
            >
              네
            </Button>
          </>
        }
      />
      <MuiAlert
        open={open03}
        onClose={handleClose03}
        type="admin"
        title={<>옵션을 삭제 하시겠습니까?</>}
        iconColor="red"
        desc={
          <>
            옵션을 삭제하면
            <br />
            <span className="red_text">
              옵션에 등록된 상세옵션은 전부 삭제 되며, <br />
              삭제된 상세옵션은 복구되지 않습니다.
            </span>
          </>
        }
        button={
          <>
            <Button color="gray" line onClick={handleClose03} size="small">
              취소
            </Button>
            <Button color="black" onClick={handleClose03} size="small">
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={open05}
        onClose={handleClose05}
        type="admin"
        iconColor="red"
        title={<>이전에 저장된 내용으로 되돌리시겠습니까?</>}
        desc={<>작성된 내용이 저장되지 않습니다.</>}
        button={
          <>
            <Button onClick={handleClose05} color="gray" line size="small">
              아니오
            </Button>
            <Button onClick={handleClose05} color="black" size="small">
              네
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default ProductDetailPage;