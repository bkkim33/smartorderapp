import React, { useState } from "react";
import Layout from '../../../../layout/DefaultLayout'
import ContentBox from "../../../../layout/ContentBox";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import Select from "../../../../components/Select";


//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

const inUse = [
  { value: "Y", label: "Y" },
  { value: "N", label: "N" },
];

function PickupMethod() {
  const [receiptMethodsData, setReceiptMethodsData] = useState([
    { id: 1, name: "매장픽업", selectedOption: "Y" },
    { id: 2, name: "테이블 수령", selectedOption: "Y" },
    { id: 3, name: "배달 요청", selectedOption: "N" },
  ]);

  const handleSelectChange = (id, value) => {
    setReceiptMethodsData((prevData) =>
      prevData.map((method) =>
        method.id === id ? { ...method, selectedOption: value } : method
      )
    );
  };

  return (
    <div className="admin_receivingmethod">
      <div className="align mb_20">
        {/* <h2 className="headline4">수령방법 등록</h2> */}
        <div className="btn_set">
          <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
            위로
          </Button>
          <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
            아래로
          </Button>
          <Button icon="AdminArrowBar" onClick={() => {}} size="icon_s">
            한 페이지 위로
          </Button>
          <Button icon="AdminArrowBar" onClick={() => {}} size="icon_s">
            한 페이지 아래로
          </Button>
        </div>
        <Button onClick={() => {}} size="small_h35" border="point">
          추가
        </Button>
      </div>
      <div className="tbl">
        <TableContainer>
          <MuiTable>
            <colgroup>
              <col width="10%" />
              <col width="auto" />
              <col width="auto" />
              <col width="30px" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>순서</TableCell>
                <TableCell>수령방법</TableCell>
                <TableCell>사용 여부</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <Input onClick={() => {}} />
                </TableCell>
                <TableCell>
                  <Select
                    minwidth="100%"
                    options={inUse}
                    defaultValue={0}
                    value={receiptMethodsData.selectedOption}
                    onChange={(e) =>
                      handleSelectChange(receiptMethodsData.id, e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    globalClass="rgt"
                    icon="Plus"
                    line={{}}
                    onClick={() => {}}
                    size="icon_s"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </TableContainer>
      </div>
      {/* <div className="align column rgt">
        <div className="align mb_20">
          <h2 className="headline4">수령방법 설정</h2>
          <Button onClick={() => {}} size="small_h35" border="point">
            적용하기
          </Button>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable>
              <colgroup>
                <col width="20%" />
                <col width="auto" />
                <col width="auto" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>순서</TableCell>
                  <TableCell>수령 방법</TableCell>
                  <TableCell>사용 여부</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {receiptMethodsData.map((method) => (
                  <TableRow key={method.id}>
                    <TableCell>{method.id}</TableCell>
                    <TableCell>{method.name}</TableCell>
                    <TableCell>
                      <Select
                        minwidth="100%"
                        options={inUse}
                        defaultValue={0}
                        value={method.selectedOption}
                        onChange={(e) =>
                          handleSelectChange(method.id, e.target.value)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
      </div> */}
    </div>
  );
}

export default PickupMethod;