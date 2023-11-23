import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

import MuiAlert from "../../../../components/MuiAlert";


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
];


function ProductDisplay() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="align column">
      <div className="align column">
        <div>
          <div className="align mb_20">
            <h2 className="headline4">전시가능 상품 조회</h2>
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
              <th> 상품검색 (ID, 상품명)</th>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <th>상품 카테고리</th>
              <td>
                <Select width="350px" defaultValue={0} options={categoryOpt} />
              </td>
              <th>판매 매장</th>
              <td>
                <Input
                  onClick={() => {}}
                  placeholder="상품ID 또는 상품명을 입력해주세요."
                />
              </td>
            </tr>
          </Table>
          <div className="align center mt_20 pb_20">
            <Button onClick={() => {}} btntype="c11" size="xlarge">
              검색
            </Button>
          </div>
          <hr className="secondary" />
        </div>
        <div className="mt_20 flex1">
          <div className="align">
            <div className="item">
              <div className="store_list_box">

              </div>
            </div>
            <div className="btn_set item">
              <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
                위로
              </Button>
              <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
                아래로
              </Button>
            </div>
            <div className="item"></div>
          </div>
        </div>
      </div>
      <div className="align end gap_10">
        <Button onClick={() => navigate("/admin/store")} line size="xlarge">
          목록
        </Button>
        <Button onClick={handleOpen} btntype="c11" size="xlarge">
          저장
        </Button>
      </div>
      <MuiAlert
        open={open}
        onClose={handleClose}
        title={
          <>
            입력한 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={handleClose} line>
              취소
            </Button>
            <Button onClick={handleClose} border="point">
              확인
            </Button>
          </>
        }
      />
    </div>
  );
}

export default ProductDisplay;