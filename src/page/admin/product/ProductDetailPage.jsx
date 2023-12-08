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

function ProductDetailPage() {
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

  const [data, setData] = useState([
    {
      id: 0,
      code: "C0001",
      name: "[방문] 아메리카노1잔",
      discount: "-3,800",
      selected: false,
    },
    {
      id: 1,
      code: "C0002",
      name: "[방문] 모든음료1잔",
      discount: "0",
      selected: false,
    },
    {
      id: 2,
      code: "C0003",
      name: "[입사] 아메리카노1잔",
      discount: "-3,800",
      selected: false,
    },
    {
      id: 3,
      code: "C0004",
      name: "[입사] 모든음료1잔",
      discount: "0",
      selected: false,
    },
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

  const [newOption, setNewOption] = useState({
    optionName: ["온도", "농도"],
    detailOptionName: ["HOT", "ICED", "HOT ICED", "ICED ONLY"],
    optionPrice: "",
  });

  const handleAddOption = () => {
    const updatedData = [...data, { ...newOption, id: data.length }];
    setData(updatedData);
    setNewOption({
      optionName: "",
      detailOptionName: "",
      optionPrice: "",
    });
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품 정보 상세페이지</h1>
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
                  <Input
                    placeholder="상품명을 입력해주세요."
                    defaultValue="아메리카노"
                  />
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
                    defaultValue="3800"
                    numtxt="원"
                  />
                </td>
                <th>임직원 할인가</th>
                <td>
                  <Input
                    placeholder="금액을 입력해주세요."
                    type="number"
                    defaultValue="990"
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
                        color="point"
                        onClick={handleOpen}
                        size="small"
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
                    <TableRow className="noborder">
                      <TableCell className="top" rowSpan={4}>
                        <div className="align gap_8">
                          <Input
                            value={newOption.optionName}
                            onChange={(e) =>
                              setNewOption({
                                ...newOption,
                                optionName: e.target.value,
                              })
                            }
                            placeholder="온도"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                          <Button
                            icon="Plus"
                            line
                            color="black"
                            onClick={handleAddOption}
                            size="icon_s"
                          >
                            옵션명 추가
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="HOT"
                        />
                      </TableCell>
                      <TableCell className="noborder">
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder"></TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell className="noborder">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="ICED"
                        />
                      </TableCell>
                      <TableCell className="noborder">
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder"></TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell className="noborder">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="HOT ONLY"
                        />
                      </TableCell>
                      <TableCell className="noborder">
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder"></TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell>
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="ICED ONLY"
                        />
                      </TableCell>
                      <TableCell>
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          icon="Plus"
                          line
                          color="black"
                          onClick={() => {}}
                          size="icon_s"
                        >
                          옵션가 추가
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell className="top" rowSpan={4}>
                        <div className="align gap_8">
                          <Input
                            value={newOption.optionName}
                            onChange={(e) =>
                              setNewOption({
                                ...newOption,
                                optionName: e.target.value,
                              })
                            }
                            placeholder="농도"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                          <Button
                            icon="Plus"
                            line
                            color="black"
                            onClick={handleAddOption}
                            size="icon_s"
                          >
                            옵션명 추가
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="HOT"
                        />
                      </TableCell>
                      <TableCell className="noborder">
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder"></TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell className="noborder">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="ICED"
                        />
                      </TableCell>
                      <TableCell className="noborder">
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder"></TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell className="noborder">
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="HOT ONLY"
                        />
                      </TableCell>
                      <TableCell className="noborder">
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="noborder"></TableCell>
                    </TableRow>
                    <TableRow className="noborder">
                      <TableCell>
                        <Input
                          value={newOption.detailOptionName}
                          onChange={(e) =>
                            setNewOption({
                              ...newOption,
                              detailOptionName: e.target.value,
                            })
                          }
                          placeholder="ICED ONLY"
                        />
                      </TableCell>
                      <TableCell>
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
                            placeholder="0원"
                          />
                          <Button
                            icon="Delete"
                            line
                            color="black"
                            onClick={() => {}}
                            size="icon_s"
                          >
                            옵션 삭제
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          icon="Plus"
                          line
                          color="black"
                          onClick={() => {}}
                          size="icon_s"
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
          <div className="align center mt_20 gap_10">
            <Button
              onClick={() => navigate("/admin/product/product")} color="gray" line size="small">
              취소
            </Button>
            <Button onClick={handleOpen02} color="black" size="small">
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
            <th className="center">
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
              <td className="center">{item.code}</td>
              <td className="center">{item.name}</td>
              <td className="center">{item.discount}</td>
            </tr>
          ))}
        </Table>
        <div className="align center mt_20 gap_5">
          <Button onClick={handleClose} color="gray" line size="small">
            취소
          </Button>
          <Button onClick={handleClose} color="black" size="small">
            확인
          </Button>
        </div>
      </MuiModal>
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
            <Button
              onClick={() => navigate("/admin/product/product")} color="black" size="small">
              네
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default ProductDetailPage;