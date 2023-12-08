import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import MuiAlert from "../../../components/MuiAlert";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

const initialCategoryData = [
  { id: 1, order: 1, category: "Coffee" },
  { id: 2, order: 2, category: "Non-Coffee" },
  { id: 3, order: 3, category: "Ade/Juice" },
  { id: 4, order: 4, category: "Blended" },
];

function ProductCategoryPage() {
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
    // console.log("되고 있냐?", id);
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
              <div className="align mt_10 mb_20 gap_20">
                <div className="align start gap_10">
                  <h2 className="headline4">카테고리&nbsp;설정</h2>
                  <div className="btn_set">
                    <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
                      위로
                    </Button>
                    <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
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
                <div className="align end gap_5">
                  <Button onClick={() => { }} type="pc" size="small" color="gray" line>
                    순서 저장
                  </Button>
                  <Button
                    onClick={handleAddCategory} type="pc" size="small" color="point">
                    + 카테고리 추가
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
                        <TableRow
                          key={row.id}
                          onClick={() => handleTableRowClick(row.id)}
                        >
                          <TableCell>{row.order}</TableCell>
                          <TableCell>
                            {row.category === "" ? (
                              <div className="align gap_8">
                                <Input
                                  placeholder="카테고리명 입력"
                                  value={row.category}
                                  onChange={(e) =>
                                    handleCategoryChange(e, row.id)
                                  }
                                />
                                <Button
                                  type="pc"
                                  icon={row.deletable ? "Delete" : "Check"}
                                  line
                                  color="gray"
                                  onClick={() =>
                                    handleCategoryChange(
                                      row.deletable ? "" : row.category,
                                      row.id
                                    )
                                  }
                                  size="icon_s"
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
            </div>
            <div className="align column rgt">
              <div className="align mt_10 mb_20">
                <h2 className="headline4">카테고리&nbsp;정보</h2>
                <div className="align end gap_5">
                  <Button onClick={handleOpen} type="pc" color="gray" size="small" line>
                    삭제
                  </Button>
                  <Button
                    onClick={handleOpen02} type="pc" color="point" size="small">
                    저장
                  </Button>
                </div>
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
            </div>
          </div>
          <div className="align center mt_20">
            <Button
              onClick={() => {}}
              type="pc"
              size="small"
              color="black"
            >
              적용하기
            </Button>
          </div>
        </div>
        <MuiAlert
          open={open}
          onClose={handleClose}
          type="admin"
          iconColor="red"
          title={
            <>
              카테고리를 삭제하시겠습니까?              
            </>
          }
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
      </ContentBox>
    </Layout>
  );
}

export default ProductCategoryPage;
