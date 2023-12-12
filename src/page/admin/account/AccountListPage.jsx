import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MuiPage from "../../../components/MuiPage";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function AccountListPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">계정/권한 관리</h1>
      </div>
      <ContentBox top>
        <div>
          <Input
            onClick={() => { }}
            shape="none"
            width="310px"
            placeholder="관리자 검색 (관리자 ID, 관리자명)"
          />
        </div>
        <Button
          type="pc"
          color="black"
          icon="Search"
          iconStyle={{
            fill: '#fff',
            height: 24,
            width: 24
          }}
          round
          size="icon_l"
        >
          검색
        </Button>
      </ContentBox>
      <ContentBox>
        <div className="align mb_12">
          <div className="rgt">
            <Button
              type="pc"
              color="point"
              size="small"
              onClick={() => navigate("./create")}
            >
              계정 생성
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="10%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>소속</TableCell>
                  <TableCell>관리자 ID</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>권한</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>메가존클라우드</TableCell>
                  <TableCell>admin01</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/account/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      카페서비스 관리자
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin02</TableCell>
                  <TableCell>010-***-1234</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/account/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      매장 관리자
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin03</TableCell>
                  <TableCell>홍길동3</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/account/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      매장 관리자
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>클라우드카페</TableCell>
                  <TableCell>admin04</TableCell>
                  <TableCell>홍길동4</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/account/modify")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      어드민 관리자
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
          <MuiPage />
        </div>
      </ContentBox>
    </Layout>
  );
}

export default AccountListPage;