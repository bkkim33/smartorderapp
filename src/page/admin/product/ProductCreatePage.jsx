import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";
import FileUpload from "../../../components/FileUpload";
import Chip from "../../../components/Chip";
import Checkbox from "../../../components/Checkbox";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiModal from "../../../components/MuiModal";

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
];

function ProductCreatPage() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([
    { id: 0, code: "C0001", name: "아메리카노1잔", discount: "-3,800", selected: false },
    { id: 1, code: "C0002", name: "모든음료1잔", discount: "0", selected: false },
    { id: 2, code: "C0003", name: "아메리카노1잔", discount: "-3,800", selected: false },
    { id: 3, code: "C0004", name: "모든음료1잔", discount: "0", selected: false },
  ]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const updatedSelectAll = !selectAll;
    setSelectAll(updatedSelectAll);
    const updatedData = data.map((item) => ({
      ...item,
      selected: updatedSelectAll,
    }));
    setData(updatedData);
  };

  const handleSingleCheck = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData);
    setSelectAll(updatedData.every((item) => item.selected));
  };
  
  return (
    <Layout>
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
              <FileUpload onChange={() => {}} />
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
                <div>
                  <Chip label="테스트염" onClick={() => {}} globalClass="mr_8"/>
                  <Chip label="테스트염" onClick={() => {}} globalClass="mr_8"/>
                  <Chip label="테스트염" onClick={() => {}}/>
                </div>
                <Button
                  btntype="c11"
                  onClick={handleOpen}
                  size="small_h35"
                >
                  쿠폰할인 선택
                </Button>
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
                      >
                        옵션명 추가
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
      <MuiModal
        open={open}
        onClose={handleClose}
        header={
          <>
            <h4>쿠폰할인 선택</h4>
            <Button
              icon="Delete"
              none
              onClick={handleClose}
              size="icon_s"
              iconStyle={{
                fill: "var(--c99)",
              }}
            >
              Close
            </Button>
          </>
        }
      >
        <div className="">
          <Table
            colgroup={
              <>
                <col width="10%" />
                <col width="30%" />
                <col width="30%" />
                <col width="30%" />
              </>
            }
          >
            <tr>
              <th>
                <Checkbox
                  id={selectAll.toString()}
                  onChange={handleSelectAll}
                  checked={selectAll}
                ></Checkbox>
              </th>
              <th>쿠폰코드</th>
              <th>쿠폰명</th>
              <th>할인가</th>
            </tr>
            {data.map((item) => (
            <tr key={item.id}>
              <td>
                {data.length > 0 && (
                  <Checkbox
                    id={item.id.toString()}
                    name={item.name}
                    checked={item.selected}
                    onChange={() => handleSingleCheck(item.id)}
                  />  
                )}
              </td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.discount}</td>
            </tr>
              ))}
          </Table>
          <div className="align center mt_20">
            <Button onClick={handleClose} size="xlarge" line globalClass="mr_20">
              취소
            </Button>
            <Button onClick={() => {}} size="xlarge" >
              확인
            </Button>
          </div>
        </div>
      </MuiModal>  
    </Layout>
  );
}

export default ProductCreatPage;