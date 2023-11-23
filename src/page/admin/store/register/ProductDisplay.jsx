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
  const active = false;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleActive = (e) => {
    e.target.setActive(!active);
  };
  return (
    <div className="align column">
      <div className="align column mb_20">
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
        <div className="store_list_box align mt_20 flex1">
          <div className="store_list">
            <h2 className="headline4 mb_10">전시가능 상품리스트</h2>
            <div className="store_list_cont">
              <ul>
                <li
                  onClick={(e) => handleActive(e)}
                  className={`${active ? "active" : ""}`}
                >
                  에스프레소
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  아메리카노
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  카페라떼
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  카푸치노
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  바닐라라떼
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  캬라멜마끼아또
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  더치커피
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  디카페인콜드브루
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  캔 콜드브루
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  달고나라떼
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  에스프레소
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  아메리카노
                </li>
                <li
                  onClick={handleActive}
                  className={`${active ? "active" : ""}`}
                >
                  카페라떼
                </li>
                <li>카푸치노</li>
                <li>바닐라라떼</li>
                <li>캬라멜마끼아또</li>
                <li>더치커피</li>
                <li>디카페인콜드브루</li>
                <li>캔 콜드브루</li>
                <li>달고나라떼</li>
              </ul>
            </div>
          </div>
          <div className="btn_set ml_15">
            <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
              전시
            </Button>
            <Button icon="AdminArrow" onClick={() => {}} size="icon_s">
              전시 안함
            </Button>
          </div>
          <div className="store_list ml_15">
            <h2 className="headline4 mb_10">전시상품 리스트</h2>
            <div className="store_list_cont"></div>
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