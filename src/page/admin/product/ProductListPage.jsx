import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import MuiPage from "../../../components/MuiPage";
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
  { label: "전체", value: "전체" },
  { label: "Coffee", value: "Coffee" },
  { label: "Non-Coffee", value: "Non-Coffee" },
  { label: "Ade/Juice", value: "Ade/Juice" },
  { label: "Blended", value: "Blended" },
  { label: "Tea", value: "Tea" },
  { label: "Bread", value: "Bread" },
  { label: "Bottle", value: "Bottle" },
]
const storeNameOpt = [
  { label: "전체", value: "전체" },
  { label: "클라우드카페(역삼1호점)", value: "클라우드카페(역삼1호점)" },
  { label: "클라우드9카페(역삼2호점)", value: "클라우드9카페(역삼2호점)" },
];
const numOpt = [
  { label: "20개씩 보기", value: "20개씩 보기" },
  { label: "30개씩 보기", value: "30개씩 보기" },
  { label: "50개씩 보기", value: "50개씩 보기" },
];

function ProductListPage() {

  const navigate = useNavigate();
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

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품관리</h1>
      </div>
      <ContentBox top>
        <div>
          <Select 
            minwidth="210px" 
            round="app" 
            placeholder="상품카테고리"
            options={categoryOpt} 
          />
        </div>
        <div>
          <Select 
            minwidth="210px" 
            round="app"
            placeholder="판매 매장"
            options={storeNameOpt}
          />
        </div>
        <div>
          <Input
            onClick={() => {}}
            width="310px"
            shape="none"
            globalClass="pd_0"
            placeholder="상품 검색 (ID, 상품명)"
          />
        </div>
        <Button
          type="pc"
          color="black"
          icon="Search"
          iconStyle={{
            fill: "#fff",
            height: 24,
            width: 24,
          }}
          round
          size="icon_l"
        >
          검색
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
              <Select minwidth="200px" globalClass="txt_lft" defaultValue={0} options={numOpt} />
            </div>            
          </div>
          <div className="rgt">
            <Button
              onClick={() => navigate("/admin/product/product/register")}
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
                <col width="20%" />
                <col width="auto" />
                <col width="20%" />
                <col width="20%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll" name="checkAll" />
                  </TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>상품 ID</TableCell>
                  <TableCell>상품 카테고리</TableCell>
                  <TableCell>상품명</TableCell>
                  <TableCell>판매 매장</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><Checkbox id="check1" name="check1" /></TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>P00001</TableCell>
                  <TableCell>Tea</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => navigate("/admin/product/product/detail")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      유자차
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      클라우드 카페 외 1개
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check2" name="check2" /></TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>P00002</TableCell>
                  <TableCell>Coffee</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => navigate("/admin/product/product/detail")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      에스프레소
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      클라우드카페(역삼1호점)
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check3" name="check3" /></TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>P00003</TableCell>
                  <TableCell>Coffee</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => navigate("/admin/product/product/detail")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      바닐라라떼
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      클라우드9카페(역삼2호점)
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check4" name="check4" /></TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>P00004</TableCell>
                  <TableCell>Coffee</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => navigate("/admin/product/product/detail")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      캬라멜마끼아또
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      클라우드 카페 외 1개
                    </Button>
                  </TableCell>
                </TableRow>                
                <TableRow>
                  <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <MuiModal        
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>판매 매장 정보</h4>
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
                <col width="20%" />
                <col width="20%" />
                <col width="15%" />
                <col width="45%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>사업자번호</TableCell>
                  <TableCell>가맹점명</TableCell>
                  <TableCell>대표자명</TableCell>
                  <TableCell>주소</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>12345678</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/store")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      클라우드 9 카페
                    </Button>
                  </TableCell>
                  <TableCell>홍길동</TableCell>
                  <TableCell className="left">서울특별시 강남구 논현로 85길 46</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12345678</TableCell>
                  <TableCell className="left">
                    <Button
                      onClick={() => navigate("/admin/store")}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="small"
                    >
                      클라우드 9카페
                    </Button>
                  </TableCell>
                  <TableCell>홍길동</TableCell>
                  <TableCell className="left">서울특별시 강남구 논현로 85길 46</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
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

export default ProductListPage;
