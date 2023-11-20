import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import MuiAlert from "../../../components/MuiAlert";


const initialCategoryData = [
  { id: 1, order: 1, category: "Coffee" },
  { id: 2, order: 2, category: "Non-Coffee" },
  { id: 3, order: 3, category: "Ade/Juice" },
  { id: 4, order: 4, category: "Blended" },
];

function CategoryManagementPage() {

  const [open, setOpen] = useState(false);
  const [open02, setOpen02] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen02 = () => {
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };

  const [categoryData, setCategoryData] = useState(initialCategoryData);

  const handleCategoryChange = (value, id) => {
    const updatedData = categoryData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          category: row.deletable ? "" : value,
          deletable: !row.deletable,
        };
      }
      return row;
    });
  
    setCategoryData(updatedData);
  };

  const handleAddCategory = () => {
    const newCategory = {
      id: categoryData.length + 1,
      order: categoryData.length + 1,
      category: "",
    };

    setCategoryData([...categoryData, newCategory]);
  };

  const handleTableRowClick = (id) => {
    console.log('되고 있냐?', id);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">카테고리 관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <div className="admin_category">
          <div className="categorybox align top gap_30">
            <div className="align column lft">
              <div className="align mt_10 mb_20">
                <h2 className="headline4">카테고리 설정</h2>
                <div className="btn_set align rgt">
                  <Button
                    icon="AdminArrow"
                    onClick={() => {}}
                    size="icon_s"
                  >
                    위로
                  </Button>
                  <Button
                    icon="AdminArrow"
                    onClick={() => {}}
                    size="icon_s"
                  >
                    아래로
                  </Button>
                  <Button
                    icon="AdminArrowBar"
                    onClick={() => {}}
                    size="icon_s"
                  >
                    한 페이지 위로
                  </Button>
                  <Button
                    icon="AdminArrowBar"
                    onClick={() => {}}
                    size="icon_s"
                  >
                    한 페이지 아래로
                  </Button>
                </div>
              </div>
              <div className="tbl">
                <TableContainer>
                  <MuiTable>
                    <colgroup>
                        <col width="20%" />
                        <col width="auto" />
                    </colgroup>
                    <TableHead>
                      <TableRow>
                        <TableCell>순서</TableCell>
                        <TableCell>카테고리명</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {categoryData.map((row) => (
                        <TableRow key={row.id} onClick={() => handleTableRowClick(row.id)}>
                          <TableCell>{row.order}</TableCell>
                          <TableCell className="left">
                            {row.category === "" ? (
                              <div className="align gap_8">
                                <Input
                                  placeholder="카테고리명 입력"
                                  value={row.category}
                                  onChange={(e) => handleCategoryChange(e, row.id)}
                                />
                                <Button
                                  icon={row.deletable ? "Delete" : "Check"}
                                  line
                                   onClick={() => handleCategoryChange(row.deletable ? "" : row.category, row.id)}
                                  size="icon_s_h35"
                                >
                                  {row.deletable ? "옵션 삭제" : "체크"}
                                </Button>
                              </div>
                            ) : (
                              row.category
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </MuiTable>
                </TableContainer>
              </div>
              <div className="align rgt gap_10 mt_20">
                <Button onClick={() => {}} line>
                  순서 저장
                </Button>
                <Button onClick={handleAddCategory} border>
                  + 카테고리 추가
                </Button>
              </div>
            </div>
            <div className="align column rgt">
              <div className="align mt_10 mb_20">
                <h2 className="headline4">카테고리 정보</h2>
              </div>
              <Table
                colgroup={
                  <>
                    <col width="25%" />
                    <col width="auto" />
                  </>
                }
              >
                <tr>
                  <th className="required">카테고리명</th>
                  <td>
                    <Input
                      onClick={() => {}}
                      placeholder="상품명을 입력해주세요."
                    />
                  </td>
                </tr>
                <tr>
                  <th rowSpan={6}>연결된상품</th>
                  <td>에스프레소(00001)</td>
                </tr>
                <tr>
                  <td>아메리카노(00002)</td>
                </tr>
                <tr>
                  <td>카페라떼(00003)</td>
                </tr>
                <tr>
                  <td>카푸치노(00004)</td>
                </tr>
                <tr>
                  <td>바닐라라떼(00005)</td>
                </tr>
                <tr>
                  <td>캬라멜마끼아또(00006)</td>
                </tr>
              </Table>
              <div className="align rgt gap_10 mt_20">
                <Button onClick={handleOpen} line>
                  삭제
                </Button>
                <Button onClick={handleOpen02} btntype="c11">
                  저장
                </Button>
              </div>
            </div>
          </div>
          <div className="align end mt_20">
            <Button onClick={() => {}} btntype="c11" size="xlarge">
              확인
            </Button>
          </div>
        </div>
        <MuiAlert
          open={open}
          onClose={handleClose}
          title={
            <>
               카테고리를 삭제하면 <br/>
               <span className="red_text">카테고리에 연결된 모든 상품이
               매장에 노출되지 않으며, 삭제된 카테고리는 복구되지 않습니다.</span> <br/>
               카테고리를 삭제하시겠습니까?
            </>
          }
          button={
            <>
              <Button onClick={handleClose} line>취소</Button>
              <Button onClick={() => { }} border>확인</Button>
            </>
          }
        />
        <MuiAlert
          open={open02}
          onClose={handleClose02}
          title={
            <>
               수정된 내용을<br/>
               저장하시겠습니까?
            </>
          }
          button={
            <>
              <Button onClick={handleClose02} line>아니요</Button>
              <Button onClick={() => { }} border>네</Button>
            </>
          }
        />
      </ContentBox>
    </Layout>
  );
}

export default CategoryManagementPage;
