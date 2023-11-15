import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Select from "../../../components/Select";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const categoryOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "Coffee",
    value: "Coffee",
  },
  {
    label: "Non-Coffee",
    value: "Non-Coffee",
  },
  {
    label: "Ade/Juice",
    value: "Ade/Juice",
  },
  {
    label: "Blended",
    value: "Blended",
  },
  {
    label: "Tea",
    value: "Tea",
  },
  {
    label: "Bread",
    value: "Bread",
  },
  {
    label: "Bottle",
    value: "Bottle",
  },
]

const storeNameOpt = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "클라우드카페(역삼1호점)",
    value: "클라우드카페(역삼1호점)",
  },
  {
    label: "클라우드9카페(역삼2호점)",
    value: "클라우드9카페(역삼2호점)",
  },
];

// const numOpt = [
//   {
//     label: "20개씩 보기",
//     value: "20개씩 보기",
//   },
//   {
//     label: "30개씩 보기",
//     value: "30개씩 보기",
//   },
//   {
//     label: "50개씩 보기",
//     value: "50개씩 보기",
//   },
// ];


function ProductListPage() {
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
        <h1 className="headline2">카테고리 관리</h1>
      </div>
      <hr className="primary" />
      <div className="align gap_30">
        <ContentBox left>
          <div className="align mt_10 mb_20">
            <h2 className="headline4">카테고리 설정</h2>
            <div className="btn_set align rgt">
                <Button
                  line
                  onClick={() => {}}
                >
                  <i class="admin_arrow up"></i>
                </Button>
                <Button
                  line
                  onClick={() => {}}
                >
                  <i class="admin_arrow down"></i>
                </Button>
                <Button
                  none
                  onClick={() => {}}
                >
                  <i class="admin_arrow up"></i>
                </Button>
                <Button
                  none
                  onClick={() => {}}
                >
                  <i class="admin_arrow down"></i>
                </Button>
            </div>
          </div>
          {/* <TableContainer> */}
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                  <col width="10%" />
                  <col width="auto" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>순서</TableCell>
                  <TableCell>상세옵션명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="align gap_8">
                      <Input

                        placeholder="옵션명 입력"
                      />
                      <Button
                        icon="Delete"
                        line
                        onClick={() => { }}
                        size="icon_s_h35"
                      >
                        옵션 삭제
                      </Button>
                      <Button
                        icon="Plus"
                        line
                        size="icon_s_h35"
                      >
                        옵션명 추가
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input

                      placeholder="상세옵션명 입력"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
           <>
  <MuiTable
    cols={[
      {
        colWidth: '8%'
      },
      {
        colWidth: '8%'
      },
      {
        colWidth: '30%'
      },
      {
        colWidth: 'auto'
      },
      {
        colWidth: '10%'
      },
      {
        colWidth: '5%'
      },
      {
        colWidth: '5%'
      }
    ]}
    columns={[
      {
        colSpan: null,
        field: '쿠폰 코드',
        headerName: 'couponnum'
      },
      {
        colSpan: null,
        field: '유효기한',
        headerName: 'period'
      },
      {
        colSpan: null,
        field: '쿠폰명',
        headerName: 'name'
      },
      {
        colSpan: null,
        field: '쿠폰 설명',
        headerName: 'ex'
      },
      {
        colSpan: null,
        field: '발급한 수량',
        headerName: 'amount'
      },
      {
        colSpan: null,
        field: '미리보기',
        headerName: '미리보기'
      },
      {
        colSpan: null,
        field: '관리',
        headerName: '관리'
      }
    ]}
    rows={[
      {
        id: 1,
        rowdata: [
          {
            align: 'center',
            data: '1084',
            fnc: null
          },
          {
            align: 'center',
            data: '2023.10.20',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰이름',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰설명 입니다.',
            fnc: null
          },
          {
            align: 'right',
            data: 100,
            fnc: null
          },
          {
            align: 'center',
            data: '미리보기',
            fnc: true
          },
          {
            align: 'center',
            data: '삭제',
            fnc: true
          }
        ]
      },
      {
        id: 2,
        rowdata: [
          {
            align: 'center',
            data: '1084',
            fnc: null
          },
          {
            align: 'center',
            data: '2023.10.20',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰이름',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰설명 입니다.',
            fnc: null
          },
          {
            align: 'right',
            data: 100,
            fnc: null
          },
          {
            align: 'center',
            data: '미리보기',
            fnc: true
          },
          {
            align: 'center',
            data: '삭제',
            fnc: true
          }
        ]
      },
      {
        id: 3,
        rowdata: [
          {
            align: 'center',
            data: '1084',
            fnc: null
          },
          {
            align: 'center',
            data: '2023.10.20',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰이름',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰설명 입니다.',
            fnc: null
          },
          {
            align: 'right',
            data: 100,
            fnc: null
          },
          {
            align: 'center',
            data: '미리보기',
            fnc: true
          },
          {
            align: 'center',
            data: '삭제',
            fnc: true
          }
        ]
      },
      {
        id: 4,
        rowdata: [
          {
            align: 'center',
            data: '1084',
            fnc: null
          },
          {
            align: 'center',
            data: '2023.10.20',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰이름',
            fnc: null
          },
          {
            align: 'left',
            data: '쿠폰설명 입니다.',
            fnc: null
          },
          {
            align: 'right',
            data: 100,
            fnc: null
          },
          {
            align: 'center',
            data: '미리보기',
            fnc: true
          },
          {
            align: 'center',
            data: '삭제',
            fnc: true
          }
        ]
      }
    ]}
  />
</>

          {/* </TableContainer> */}
          <div className="align center mt_20">
            <Button onClick={handleOpen} btntype="c11" size="xlarge">
              검색
            </Button>
          </div>
        </ContentBox>
        <ContentBox right>
          <div className="align mt_10 mb_20">
            <h2 className="headline4">카테고리 정보</h2>
          </div>
          <Table
            colgroup={
              <>
                <col width="15%" />
                <col width="auto" />
                <col width="15%" />
                <col width="auto" />
              </>
            }
          >
            <tr>
              <th>상품 카테고리</th>
              <td>
                <Select
                  width="350px"
                  defaultValue={0}
                  options={categoryOpt}
                />
              </td>
              <th>판매 매장</th>
              <td>
                <Select
                  width="350px"
                  defaultValue={0}
                  options={storeNameOpt}
                />
              </td>
            </tr>
            <tr>
              <th> 상품검색 (ID, 상품명)</th>
              <td colSpan={3}>
                <Input
                  onClick={() => {}}
                  placeholder="상품ID 또는 상품명을 입력해주세요."
                />
              </td>
            </tr>
          </Table>
          <div className="align center mt_20">
            <Button onClick={handleOpen} btntype="c11" size="xlarge">
              검색
            </Button>
          </div>
        </ContentBox>
      </div>
    </Layout>
  );
}

export default ProductListPage;
