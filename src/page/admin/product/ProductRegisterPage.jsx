import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Table from "../../../components/Table";
import FileUpload from "../../../components/FileUpload";
import Chip from "../../../components/Chip";
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
  { label: 'Coffee', value: 'Coffee' },
  { label: 'Non-Coffee', value: 'Non-Coffee' },
  { label: 'Ade/Juice', value: 'Ade/Juice' },
  { label: 'Blended', value: 'Blended' },
  { label: 'Tea', value: 'Tea' },
  { label: 'Bread', value: 'Bread' },
  { label: 'Bottle', value: 'Bottle' },
];

const initialTableRows = [
  { 
    id: 0, 
    code: "C0001", 
    name: "아메리카노1잔", 
    discount: "-3,800", 
    selected: false 
  },
  { 
    id: 1, 
    code: "C0002", 
    name: "모든음료1잔", 
    discount: "0", 
    selected: false 
  },
  { 
    id: 2, 
    code: "C0003", 
    name: "아메리카노1잔", 
    discount: "-3,800", 
    selected: false 
  },
  { 
    id: 3, 
    code: "C0004", 
    name: "모든음료1잔", 
    discount: "0", 
    selected: false 
  },
];

function ProductRegisterPage() {
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

  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newCheckedItems = {};
    if (!selectAll) {
      initialTableRows.forEach((item) => {
        newCheckedItems[item.id] = true;
      });
    }
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const [tableRows, setTableRows] = useState(initialTableRows);

  const [newOption, setNewOption] = useState({
    optionName: ["온도", "농도"],
    detailOptionName: ["HOT", "ICED", "HOT ICED", "ICED ONLY"],
    optionPrice: "",
  });

  const handleAddOption = () => {
    const updatedData = [...tableRows, { ...newOption, id: tableRows.length }];
    setTableRows(updatedData);
    setNewOption({
      optionName: "",
      detailOptionName: "",
      optionPrice: "",
    });
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품 정보 등록</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <div className="align column">
          <div>
            <div className="align mt_10 mb_20">
              <h2 className="headline4">기본 정보</h2>
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
                <th className="required">상품 카테고리</th>
                <td>
                  <Select maxwidth="300px" options={categoryOpt} />
                </td>
                <th className="required">상품명</th>
                <td>
                  <Input placeholder="상품명을 입력해주세요." />
                </td>
              </tr>
              <tr>
                <th className="required">상품 이미지</th>
                <td colSpan={3}>
                  <div className="align start">
                    <FileUpload onChange={() => {}} />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="required">판매가</th>
                <td>
                  <Input
                    placeholder="금액을 입력해주세요."
                    type="number"
                    numtxt="원"
                  />
                </td>
                <th>임직원 할인가</th>
                <td>
                  <Input
                    placeholder="금액을 입력해주세요."
                    type="number"
                    numtxt="원"
                  />
                </td>
              </tr>
              <tr>
                <th>쿠폰할인 적용</th>
                <td colSpan={3}>
                  <div className="align start">
                    <div className="item">
                      <Button
                        btntype="c11"
                        onClick={handleOpen}
                        size="small_h35"
                      >
                        쿠폰할인 선택
                      </Button>
                    </div>
                    <div className="item">
                      <Chip
                        label="C0001"
                        onClick={() => {}}
                        globalClass="mr_8"
                      />
                      <Chip
                        label="C0002"
                        onClick={() => {}}
                        globalClass="mr_8"
                      />
                      <Chip
                        label="C0003"
                        onClick={() => {}}
                        globalClass="mr_8"
                      />
                      <Chip label="C0004" onClick={() => {}} />
                    </div>
                  </div>
                </td>
              </tr>
            </Table>
            <div className="align mt_40 mb_20">
              <h2 className="headline4">옵션 등록</h2>
            </div>
            <div className="tbl flex_none">
              <TableContainer>
                <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                  <colgroup>
                    <col width="33%" />
                    <col width="33%" />
                    <col width="33%" />
                    <col width="35px" />
                  </colgroup>
                  <TableHead>
                    <TableRow>
                      <TableCell>옵션명</TableCell>
                      <TableCell>상세옵션명</TableCell>
                      <TableCell>옵션가</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className="top">
                        <div className="align gap_8">
                          <Input
                            value={newOption.optionName}
                            onChange={(e) =>
                              setNewOption({
                                ...newOption,
                                optionName: e.target.value,
                              })
                            }
                            placeholder="옵션명 입력"
                          />
                          <Button
                            icon="Plus"
                            line
                            onClick={handleAddOption}
                            size="icon_s_h35"
                          >
                            옵션명 추가
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="top">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="상세옵션명 입력"
                        />
                      </TableCell>
                      <TableCell className="top">
                        <div className="align gap_8">
                          <Input
                            value={newOption.optionPrice}
                            onChange={(e) =>
                              setNewOption({
                                ...newOption,
                                optionPrice: e.target.value,
                              })
                            }
                            type="number"
                            placeholder="옵션가 입력"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="top">
                        <Button
                          icon="Plus"
                          line
                          onClick={() => {}}
                          size="icon_s_h35"
                        >
                          옵션가 추가
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </MuiTable>
              </TableContainer>
            </div>
          </div>
          <div className="align mt_20">
            <div className="rgt gap_10">
              <Button onClick={() => navigate(-1 || "/")} size="xlarge" line>
                취소
              </Button>
              <Button onClick={handleOpen02} size="xlarge" btntype="c11">
                저장
              </Button>
            </div>
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
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="5%" />
                <col width="25%" />
                <col width="50%" />
                <col width="25%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      id="checkAll"
                      name="checkAll"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>쿠폰코드</TableCell>
                  <TableCell>쿠폰명</TableCell>
                  <TableCell>할인가</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <Checkbox
                        id={row.id.toString()}
                        name={row.name}
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                    <td className="left">{row.code}</td>
                    <td className="left">{row.name}</td>
                    <td>{row.discount}</td>
                  </tr>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <div className="align end mt_20 gap_5">
          <Button onClick={handleClose} size="small_h35" line>
            취소
          </Button>
          <Button onClick={handleClose} size="small_h35" border="point">
            확인
          </Button>
        </div>
      </MuiModal>
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        title={<>저장하시겠습니까?</>}
        button={
          <>
            <Button onClick={handleClose02} line>
              아니오
            </Button>
            <Button
              onClick={() => navigate("/admin/product/product/detail")}
              border="point"
            >
              네
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default ProductRegisterPage;