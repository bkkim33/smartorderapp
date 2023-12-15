import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../../layout/DefaultLayout";
import ContentBox from "../../../../layout/ContentBox";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";
import MuiPage from "../../../../components/MuiPage";

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

function StoreReceiptListPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품 수령방법</h1>
      </div>
      <ContentBox top>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="가맹점명"
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
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="5%" />
                <col width="12%" />
                <col width="10%" />
                <col width="7%" />
                <col width="15%" />
                <col width="auto" />
                <col width="20%" />
                <col width="8%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>가맹점명</TableCell>
                  <TableCell>사업자번호</TableCell>
                  <TableCell>대표자명</TableCell>
                  <TableCell>연락처</TableCell>
                  <TableCell>주소</TableCell>
                  <TableCell>운영시간</TableCell>
                  <TableCell>수령방법</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell className="left">클라우드 9 카페</TableCell>
                  <TableCell>123456789</TableCell>
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
                      onClick={() => navigate("/admin/store/receipt/modify")}
                      color="point"
                      type="pc"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell className="left">클라우드 카페</TableCell>
                  <TableCell>123456789</TableCell>
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
                      onClick={() => navigate("/admin/store/receipt/modify")}
                      color="point"
                      type="pc"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell className="left">과천 클라우드 카페</TableCell>
                  <TableCell>123456789</TableCell>
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
                      onClick={() => navigate("/admin/store/receipt/modify")}
                      color="point"
                      type="pc"
                      size="small"
                    >
                      설정
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={9}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
    </Layout>
  );
}

export default StoreReceiptListPage;
