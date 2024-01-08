import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import FormGroup from "../../../components/FormGroup";
import Radio from "../../../components/Radio";
import Checkbox from "../../../components/Checkbox";
import MuiAlert from "../../../components/MuiAlert";
import MuiModal from "../../../components/MuiModal";
import Table from "../../../components/Table";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

function ProductCategoryPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        <h1 className="headline2">카테고리 관리</h1>
      </div>
      <ContentBox>
        <div className="align mb_10">
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
            <Button onClick={() => {}} type="pc" color="point" size="small">
              카테고리 추가
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="8%" />
                <col width="20%" />
                <col width="40%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll" name="checkAll" />
                  </TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>순서설정</TableCell>
                  <TableCell>카테고리명</TableCell>
                  <TableCell>노출여부</TableCell>
                  <TableCell>연결 상품</TableCell>
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
                      placeholder="카테고리명을 입력하세요."
                      defaultValue="Coffee"
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
                        노출
                      </Radio>
                      <Radio name="contact0" id="radio2" value="비노출">
                        비노출
                      </Radio>
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen03}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      5개
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox01" name="checkbox01" />
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
                      placeholder="카테고리명을 입력하세요."
                      defaultValue="Non-Coffee"
                    />
                  </TableCell>
                  <TableCell>
                    <FormGroup globalClass="align center">
                      <Radio name="contact01" id="radio01" value="노출">
                        노출
                      </Radio>
                      <Radio
                        name="contact01"
                        id="radio02"
                        value="비노출"
                        defaultChecked
                      >
                        비노출
                      </Radio>
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen03}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      5개
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox01" name="checkbox01" />
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
                      placeholder="카테고리명을 입력하세요."
                      defaultValue="Ade/Juice"
                    />
                  </TableCell>
                  <TableCell>
                    <FormGroup globalClass="align center">
                      <Radio name="contact011" id="radio011" value="노출">
                        노출
                      </Radio>
                      <Radio
                        name="contact011"
                        id="radio021"
                        value="비노출"
                        defaultChecked
                      >
                        비노출
                      </Radio>
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen03}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      5개
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkbox01" name="checkbox01" />
                  </TableCell>
                  <TableCell>4</TableCell>
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
                      placeholder="카테고리명을 입력하세요."
                    />
                  </TableCell>
                  <TableCell>
                    <FormGroup globalClass="align center">
                      <Radio name="contact012" id="radio012" value="노출">
                        노출
                      </Radio>
                      <Radio
                        name="contact012"
                        id="radio022"
                        value="비노출"
                        defaultChecked
                      >
                        비노출
                      </Radio>
                    </FormGroup>
                  </TableCell>
                  <TableCell>
                    {/* <Button
                      onClick={() => {}}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      0개
                    </Button> */}
                    0개
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
        <MuiModal
          minSize
          open={open03}
          onClose={handleClose03}
          header={
            <>
              <h4>Coffee</h4>
              <Button
                icon="Delete"
                none
                onClick={handleClose03}
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
          <Table
            colgroup={
              <>
                <col width="30%" />
                <col width="auto" />
              </>
            }
          >
            <tr>
              <th className="center">
                연결 상품 <br /> 5개
              </th>
              <td className="center">
                <p>아메리카노(P1084)</p>
                <p className="mt_6">아메리카노(P1084)</p>
                <p className="mt_6">아메리카노(P1084)</p>
                <p className="mt_6">아메리카노(P1084)</p>
                <p className="mt_6">아메리카노(P1084)</p>
                <p className="mt_6">아메리카노(P1084)</p>
                <p className="mt_6">아메리카노(P1084)</p>
              </td>
            </tr>
          </Table>
        </MuiModal>
        <MuiAlert
          open={open}
          onClose={handleClose}
          type="admin"
          iconColor="red"
          title={<>카테고리를 삭제하시겠습니까?</>}
          desc={
            <>
              카테고리를 삭제하면 <br />
              <span className="red_text">
                카테고리에 연결된 모든 상품이 매장에 노출되지 않으며, 삭제된
                카테고리는 복구되지 않습니다.
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
          open={open02}
          onClose={handleClose02}
          type="admin"
          title={
            <>
              수정된 내용을
              <br />
              저장하시겠습니까?
            </>
          }
          button={
            <>
              <Button onClick={handleClose02} color="gray" line size="small">
                아니오
              </Button>
              <Button onClick={handleClose02} color="black" size="small">
                네
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
      </ContentBox>
    </Layout>
  );
}

export default ProductCategoryPage;