import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MuiPage from "../../../components/MuiPage";
import Select from "../../../components/Select";
import Checkbox from "../../../components/Checkbox";
import MuiModal from "../../../components/MuiModal";
import MuiAlert from "../../../components/MuiAlert";

//mui table import
import MuiTable from "@mui/material/Table";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const targetOpt = [
  { label: "전체", value: "전체" },
  { label: "클라우드 카페", value: "클라우드 카페" },
  { label: "클라우드 9 카페", value: "클라우드 9 카페" },
  { label: "과천 클라우드 카페", value: "과천 클라우드 카페" },
];

function UserListPage() {
  const navigate = useNavigate();
  const [open01, setOpen01] = useState(false);
  const handleOpen01 = () => {
    setOpen01(true);
  };
  const handleClose01 = () => {
    setOpen01(false);
  };
  const [open02, setOpen02] = useState(false);
  const handleOpen02 = () => {
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">고객 관리</h1>
      </div>
      <ContentBox top>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="구분"
            options={targetOpt}
          />
        </div>
        <div>
          <Input
            onClick={() => {}}
            shape="none"
            width="310px"
            placeholder="사용자 검색 (사용자 ID, 사용자명)"
          />
        </div>
        <Button
          type="pc"
          color="black"
          icon="Search"
          iconStyle={{
            fill: "#fff",
            height: 18,
            width: 18,
          }}
          round
          size="icon_l"
        >
          검색
        </Button>
        <Button
          type="pc"
          color="white"
          size="icon_l"
          round
          icon="Refresh"
          globalClass="ml_10"
        >
          초기화
        </Button>
      </ContentBox>
      <ContentBox>
        <div className="align mb_12">
          <div className="lft">
            <div className="item">
              <Button
                onClick={handleOpen02}
                type="pc"
                color="gray"
                line
                size="small"
              >
                삭제
              </Button>
            </div>
            <div className="item">
              <Button onClick={() => {}} type="pc" color="point" size="small">
                가입 메일 발송
              </Button>
            </div>
          </div>
          <div className="rgt">
            <div className="item">
              <Button
                onClick={handleOpen01}
                type="pc"
                size="small"
                color="point"
                icon="Upload"
                iconStyle={{
                  width: 15,
                  height: 15,
                }}
              >
                엑셀 업로드
              </Button>
            </div>
            <div className="item">
              <Button
                onClick={() => navigate("/admin/users/user/create")}
                type="pc"
                color="point"
                size="small"
              >
                고객 등록
              </Button>
            </div>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="8%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll" name="checkAll" />
                  </TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>구분</TableCell>
                  <TableCell>사용자 ID</TableCell>
                  <TableCell>사용자명</TableCell>
                  <TableCell>전화번호</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check1" name="check1" />
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin01@mz.co.kr</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => navigate("/admin/users/user/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      홍길동1
                    </Button>
                  </TableCell>
                  <TableCell>010-****-7532</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check2" name="check1" />
                  </TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>메가존</TableCell>
                  <TableCell>admin02@mz.co.kr</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => navigate("/admin/users/user/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      홍길동2
                    </Button>
                  </TableCell>
                  <TableCell>010-****-1741</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check3" name="check1" />
                  </TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>메가존</TableCell>
                  <TableCell>admin03@mz.co.kr</TableCell>
                  <TableCell>홍길동3</TableCell>
                  <TableCell>010-****-8234</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check4" name="check1" />
                  </TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin04@mz.co.kr</TableCell>
                  <TableCell>홍길동4</TableCell>
                  <TableCell>010-****-4253</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check5" name="check1" />
                  </TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>9876</TableCell>
                  <TableCell>010-****-9876</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check6" name="check1" />
                  </TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>1234</TableCell>
                  <TableCell>010-****-1234</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check7" name="check1" />
                  </TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>5678</TableCell>
                  <TableCell>010-****-5678</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check8" name="check1" />
                  </TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin17@mz.co.kr</TableCell>
                  <TableCell>홍길동17</TableCell>
                  <TableCell>010-****-8523</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check9" name="check1" />
                  </TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin18@mz.co.kr</TableCell>
                  <TableCell>홍길동18</TableCell>
                  <TableCell>010-****-7436</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check10" name="check1" />
                  </TableCell>
                  <TableCell>9</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin19@mz.co.kr</TableCell>
                  <TableCell>홍길동19</TableCell>
                  <TableCell>010-****-3267</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check11" name="check1" />
                  </TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>쿠버릭스</TableCell>
                  <TableCell>admin19@mz.co.kr</TableCell>
                  <TableCell>홍길동19</TableCell>
                  <TableCell>010-****-3267</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <MuiModal
        open={open01}
        onClose={handleClose01}
        header={
          <>
            <h4>등록 실패 리스트</h4>
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
              <col width="20%" />
              <col width="20%" />
              <col width="auto" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>실패사유</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">ID 미입력</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>admin19mz.co.kr</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">올바르지 않은 ID 형식</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>admin19@mz.co.kr</TableCell>
                <TableCell></TableCell>
                <TableCell className="left">이름 미입력</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>admin19@mz.co.kr</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">전화번호 미입력</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>admin19@mz.co.kr</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">소속 미입력</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>admin19@mz.co.kr</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">미등록 소속 입력</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>admin19@mz.co.kr</TableCell>
                <TableCell>홍길동</TableCell>
                <TableCell className="left">동일 소속 중복 입력</TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </div>
      </MuiModal>
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        type="admin"
        iconColor="red"
        title={<>정말 삭제하시겠습니까?</>}
        button={
          <>
            <Button color="gray" line size="small" onClick={handleClose02}>
              취소
            </Button>
            <Button color="black" size="small" onClick={handleClose02}>
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default UserListPage;