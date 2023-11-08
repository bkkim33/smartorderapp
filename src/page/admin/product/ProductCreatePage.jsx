import React from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const categoryOpt = [
  {
    label: 'Coffee',
    value: 'Coffee',
  },
  {
    label: 'Non-Coffee',
    value: 'Non-Coffee',
  },
  {
    label: 'Ade/Juice',
    value: 'Ade/Juice',
  },
  {
    label: 'Blended',
    value: 'Blended',
  },
  {
    label: 'Tea',
    value: 'Tea',
  },
  {
    label: 'Bread',
    value: 'Bread',
  },
  {
    label: 'Bottle',
    value: 'Bottle',
  },
]

function ProductCreatPage() {
  return (
    <Layout>
      <div className="admin_product">
        <div className="align mb_20">
          <h1 className="headline2">상품 정보 등록</h1>
        </div>
        <hr className="primary" />
        <ContentBox>
          <Table
            colgroup={
              <>
                <col width="15%" />
                <col />
              </>
            }
          >
            <tr>
              <th className="required">상품 카테고리</th>
              <td>
                <Select
                  options={categoryOpt}
                />
              </td>            
            </tr>
            <tr>
              <th className="required">상품명</th>
              <td>
                <Input 
                  placeholder="상품명을 입력해주세요." 
                />
              </td>
            </tr>
            <tr>
              <th className="required">상품 이미지</th>
              <td>
                <div className="align start gap_8">
                  <Button
                    btntype="c11"
                    onClick={() => { }}
                    size="small_h35"
                  >
                    File
                  </Button>
                  <Input
                    placeholder="파일을 선택해 주세요."
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th className="required">판매가</th>
              <td>
                <Input
                  placeholder="원"
                  type="number"
                />
              </td>
            </tr>
            <tr>
              <th>임직원 할인가</th>
              <td>
                <Input
                  placeholder="원"
                  type="number"
                />
              </td>
            </tr>
            <tr>
              <th>쿠폰할인 적용</th>
              <td>
                <div className="align start gap_8">
                  <Button
                    btntype="c11"
                    onClick={() => { }}
                    size="small_h35"
                  >
                    쿠폰할인 선택
                  </Button>
                  <Input 
                    placeholder="쿠폰할인을 선택해 주세요."
                  />                  
                </div>
                
              </td>
            </tr>          
          </Table>
          <div className="align mt_40 mb_20">
            <h2 className="headline4">옵션 등록</h2>
          </div>
          <div className="tbl">
            <TableContainer>
              <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <colgroup>
                  <col width="33%" />
                  <col width="33%" />
                  <col width="33%" />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell>옵션명</TableCell>
                    <TableCell>상세옵션명</TableCell>
                    <TableCell>옵션가</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="align gap_8">
                        <Input
                          onClick={() => { }}
                          placeholder="옵션명 입력"
                        />
                        <Button
                          icon="Delete"
                          line
                          onClick={() => { }}
                          size="icon_s_h35"
                          globalClass="btn_del"
                        >
                          삭제
                        </Button>
                        <Button
                          icon="Plus"
                          line
                          onClick={() => { }}
                          size="icon_s_h35"
                        >
                          옵션명 추가
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Input
                        onClick={() => { }}
                        placeholder="상세옵션명 입력"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="align gap_8">
                        <Input
                          onClick={() => { }}
                          type="number"
                          placeholder="옵션가 입력"
                        />
                        <Button
                          icon="Plus"
                          line
                          onClick={() => { }}
                          size="icon_s_h35"
                        >
                          옵션가 추가
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </MuiTable>
            </TableContainer>
          </div>        
          <div className="align mt_20">
            <div className="rgt gap_10">
              <Button
                onClick={() => {}}
                size="medium"
                line
              >
                취소
              </Button>
              <Button
                onClick={() => { }}
                size="medium"
              >
                저장
              </Button>
            </div>
          </div>
        </ContentBox>
      </div>
    </Layout>
  );
}

export default ProductCreatPage;