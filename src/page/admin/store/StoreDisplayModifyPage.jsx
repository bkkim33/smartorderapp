import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/DefaultLayout";
import ContentBox from "../../../layout/ContentBox";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import FormGroup from "../../../components/FormGroup";
import MuiPage from "../../../components/MuiPage";
import MuiAlert from "../../../components/MuiAlert";

import Table from "../../../components/Table";
import Radio from "../../../components/Radio";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
];

const targetOpt = [
  { label: "클라우드 카페", value: "클라우드 카페" },
  { label: "클라우드 9 카페", value: "클라우드 9 카페" },
  { label: "과천 클라우드 카페", value: "과천 클라우드 카페" },
];

const salesStatusData = [
  { label: "판매중", value: 0 },
  { label: "품절", value: 1 },
  { label: "판매중지", value: 2 },
];

function StoreDisplayModifyPage() {
  const navigate = useNavigate();

  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);

  const handleOpenAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(true);
    } else if (alertNumber === 2) {
      setOpenAlert2(true);
    }
  };
  const handleCloseAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(false);
    } else if (alertNumber === 2) {
      setOpenAlert2(false);
    }
  };
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">상품 전시관리 상세</h1>
      </div>
      <ContentBox>
        <Table
          globalClass="flex1"
          colgroup={
            <>
              <col width="12%" />
              <col width="auto" />
              <col width="12%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th className="">판매 매장</th>
            <td>
              <Select
                minwidth="80px"
                maxwidth="400px"
                options={targetOpt}
                defaultValue={targetOpt[0]}
                placeholder="판매 매장"
              />
            </td>
            <th className="">주소</th>
            <td>서울특별시 강남구 논현로85길 46</td>
          </tr>
          <tr>
            <th className="">테이블 수</th>
            <td>12</td>
            <th className="">직원 수</th>
            <td>10</td>
          </tr>
        </Table>
        <div className="mt_30">
          <div style={{ width: "100%" }}>
            <div className="align start mb_10 mt_10">
              <div className="item">
                <Select
                  minwidth="250px"
                  placeholder="상품 카테고리"
                  options={categoryOpt}
                />
              </div>
              <div className="item">
                <Select
                  minwidth="250px"
                  placeholder="판매상태"
                  options={salesStatusData}
                />
              </div>
              <div className="item">
                <Input
                  width="350px"
                  onClick={() => {}}
                  placeholder="상품ID 또는 상품명을 입력해주세요."
                />
              </div>

              <div className="item">
                <Button
                  type="pc"
                  color="black"
                  icon="Search"
                  iconStyle={{
                    fill: "#fff",
                    height: 15,
                    width: 15,
                  }}
                  round
                  size="icon_s"
                >
                  검색
                </Button>
              </div>
              <div className="item">
                <Button
                  type="pc"
                  color="white"
                  icon="Refresh"
                  iconStyle={{
                    fill: "#000",
                    height: 18,
                    width: 18,
                  }}
                  round
                  size="icon_s"
                >
                  검색
                </Button>
              </div>
            </div>
            <div className="tbl">
              <MuiTable aria-label="simple table">
                <colgroup>
                  <col width="6%" />
                  <col width="10%" />
                  <col width="22%" />
                  <col width="22%" />
                  <col width="20%" />
                  <col width="20%" />
                </colgroup>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>상품명ID</TableCell>
                    <TableCell>카테고리명</TableCell>
                    <TableCell>상품명</TableCell>
                    <TableCell>전시여부</TableCell>
                    <TableCell>판매상태</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>P00001</TableCell>
                    <TableCell>Coffee</TableCell>
                    <TableCell>에스프레소</TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          name="contact1111"
                          id="radio1111"
                          value="exposure"
                          disabled
                        >
                          전시
                        </Radio>
                        <Radio
                          defaultChecked
                          name="contact1111"
                          id="radio1112"
                          value="nonexposed"
                          disabled
                        >
                          미전시
                        </Radio>
                      </FormGroup>
                    </TableCell>
                    <TableCell className="left">
                      <Select
                        disabled
                        placeholder="판매상태를 선택하세요"
                        options={salesStatusData}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>P00002</TableCell>
                    <TableCell>Coffee</TableCell>
                    <TableCell>아메리카노</TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          defaultChecked
                          name="contact11111"
                          id="radio11111"
                          value="exposure"
                          disabled
                        >
                          전시
                        </Radio>
                        <Radio
                          name="contact11111"
                          id="radio11112"
                          value="nonexposed"
                          disabled
                        >
                          미전시
                        </Radio>
                      </FormGroup>
                    </TableCell>
                    <TableCell className="left">
                      <Select
                        placeholder="판매상태를 선택하세요"
                        options={salesStatusData}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>P00003</TableCell>
                    <TableCell>Coffee</TableCell>
                    <TableCell>카푸치노</TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          defaultChecked
                          name="contact111111"
                          id="radio111111"
                          value="exposure"
                          disabled
                        >
                          전시
                        </Radio>
                        <Radio
                          name="contact111111"
                          id="radio111112"
                          value="nonexposed"
                          disabled
                        >
                          미전시
                        </Radio>
                      </FormGroup>
                    </TableCell>
                    <TableCell className="left">
                      <Select
                        placeholder="판매상태를 선택하세요"
                        options={salesStatusData}
                        defaultValue={salesStatusData[0]}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>P00004</TableCell>
                    <TableCell>Coffee</TableCell>
                    <TableCell>카페라떼</TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          defaultChecked
                          name="contact1111111"
                          id="radio1111111"
                          value="exposure"
                          disabled
                        >
                          전시
                        </Radio>
                        <Radio
                          name="contact1111111"
                          id="radio1111112"
                          value="nonexposed"
                          disabled
                        >
                          미전시
                        </Radio>
                      </FormGroup>
                    </TableCell>
                    <TableCell className="left">
                      <Select
                        placeholder="판매상태를 선택하세요"
                        options={salesStatusData}
                        defaultValue={salesStatusData[1]}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>P00005</TableCell>
                    <TableCell>Coffee</TableCell>
                    <TableCell>콜드부르</TableCell>
                    <TableCell>
                      <FormGroup globalClass="align center">
                        <Radio
                          defaultChecked
                          name="contact11111111"
                          id="radio11111111"
                          value="exposure"
                          disabled
                        >
                          전시
                        </Radio>
                        <Radio
                          name="contact11111111"
                          id="radio11111112"
                          value="nonexposed"
                          disabled
                        >
                          미전시
                        </Radio>
                      </FormGroup>
                    </TableCell>
                    <TableCell className="left">
                      <Select
                        placeholder="판매상태를 선택하세요"
                        options={salesStatusData}
                        defaultValue={salesStatusData[2]}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
                  </TableRow>
                </TableBody>
              </MuiTable>
            </div>
            <MuiPage />
            <div className="align center gap_10 mt_30">
              <Button
                onClick={() => handleOpenAlert(2)}
                type="pc"
                color="gray"
                line
                size="small"
              >
                취소
              </Button>
              <Button
                onClick={() => handleOpenAlert(1)}
                type="pc"
                color="black"
                size="small"
              >
                저장
              </Button>
            </div>
            <MuiAlert
              open={openAlert1}
              onClose={() => handleCloseAlert(1)}
              type="admin"
              title={
                <>
                  입력한 내용을 <br />
                  저장하시겠습니까?
                </>
              }
              button={
                <>
                  <Button
                    onClick={() => handleCloseAlert(1)}
                    type="pc"
                    color="gray"
                    line
                    size="small"
                  >
                    취소
                  </Button>
                  <Button
                    onClick={() => handleCloseAlert(1)}
                    type="pc"
                    color="black"
                    size="small"
                  >
                    확인
                  </Button>
                </>
              }
            />
            {/* 카페관리자 및 슈퍼 어드민이 취소버튼 클릭시 해당 팝업 노출 */}
            <MuiAlert
              open={openAlert2}
              onClose={() => handleCloseAlert(2)}
              type="admin"
              iconColor="red"
              title={<>목록으로 이동하시겠습니까?</>}
              desc={<>현재 작성된 내용이 있으면 저장되지 않습니다.</>}
              button={
                <>
                  <Button
                    onClick={() => handleCloseAlert(2)}
                    type="pc"
                    color="gray"
                    line
                    size="small"
                  >
                    취소
                  </Button>
                  <Button
                    onClick={() => navigate("/admin/store/")}
                    type="pc"
                    color="black"
                    size="small"
                  >
                    확인
                  </Button>
                </>
              }
            />
          </div>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default StoreDisplayModifyPage;
