import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiPage from "../../../components/MuiPage";
import Checkbox from "../../../components/Checkbox";
import MuiAlert from "../../../components/MuiAlert";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const targetOpt = [
  { label: "전체", value: "전체" },
  { label: "클라우드 카페", value: "클라우드 카페" },
  { label: "클라우드 9 카페", value: "클라우드 9 카페" },
  { label: "과천 클라우드 카페", value: "과천 클라우드 카페" }
]

function StoreListPage() {

  const navigate = useNavigate();
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
        <h1 className="headline2">매장정보 관리</h1>
      </div>
      <ContentBox top>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="판매 매장"
            options={targetOpt}
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
          <div className="item">
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
          <div className="item">
            <Button
              onClick={() => {
                navigate("/admin/store/info/register");
              }}
              type="pc"
              color="point"
              size="small"
            >
              신규등록
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="3%" />
                <col width="12%" />
                <col width="7%" />
                <col width="15%" />
                <col width="auto" />
                <col width="20%" />
                <col width="8%" />
                <col width="8%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll" name="checkAll" />
                  </TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>판매 매장</TableCell>
                  <TableCell>대표자명</TableCell>
                  <TableCell>연락처</TableCell>
                  <TableCell>주소</TableCell>
                  <TableCell>운영시간</TableCell>
                  <TableCell>전시관리</TableCell>
                  <TableCell>수령방법</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check1" name="check1" />
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/store/info/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      클라우드 9 카페
                    </Button>
                  </TableCell>
                  <TableCell>양땡열</TableCell>
                  <TableCell>010-1234-5678</TableCell>
                  <TableCell className="left">
                    서울특별시 강남구 논현로85길 46
                  </TableCell>
                  <TableCell className="left">
                    월~금 오전 8시 ~ 오후 10시
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/admin/store/display/modify");
                      }}
                      type="pc"
                      color="point"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/admin/store/receipt/modify");
                      }}
                      type="pc"
                      color="point"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check1" name="check1" />
                  </TableCell>
                  <TableCell>2</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/store/info/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      클라우드 카페
                    </Button>
                  </TableCell>
                  <TableCell>양땡열</TableCell>
                  <TableCell>010-1234-5678</TableCell>
                  <TableCell className="left">
                    서울특별시 강남구 논현로85길 46
                  </TableCell>
                  <TableCell className="left">
                    월~금 오전 8시 ~ 오후 10시
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/admin/store/display/modify");
                      }}
                      type="pc"
                      color="point"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/admin/store/receipt/modify");
                      }}
                      type="pc"
                      color="point"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox id="check1" name="check1" />
                  </TableCell>
                  <TableCell>3</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/store/info/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      과천 클라우드 카페
                    </Button>
                  </TableCell>
                  <TableCell>양땡열</TableCell>
                  <TableCell>010-1234-5678</TableCell>
                  <TableCell className="left">
                    서울특별시 강남구 논현로85길 46
                  </TableCell>
                  <TableCell className="left">
                    월~금 오전 8시 ~ 오후 10시
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/admin/store/display/modify");
                      }}
                      type="pc"
                      color="point"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        navigate("/admin/store/receipt/modify");
                      }}
                      type="pc"
                      color="point"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={10}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        iconColor="red"
        title={<>가맹점을 삭제하시겠습니까?</>}
        desc={
          <>
            가맹점을 삭제하면 <br />
            <span className="red_text">
              가맹점에 연결된 모든 정보가 삭제되며, <br />
              삭제된 가맹점은 복구되지 않습니다.
            </span>
          </>
        }
        button={
          <>
            <Button onClick={handleClose} color="gray" line size="small">
              아니오
            </Button>
            <Button onClick={handleClose} color="black" size="small">
              네
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default StoreListPage;
