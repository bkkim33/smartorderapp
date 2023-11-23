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

const values = [
  { id: 1, text: "에스프레소", display: true },
  { id: 2, text: "아메리카노", display: true },
  { id: 3, text: "카페라떼", display: true },
  { id: 4, text: "카푸치노", display: true },
  { id: 5, text: "바닐라라떼", display: true },
  { id: 6, text: "캬라멜마끼아또", display: true },
  { id: 7, text: "더치커피", display: false },
  { id: 8, text: "디카페인콜드브루", display: false },
  { id: 9, text: "캔 콜드브루", display: false },
  { id: 10, text: "달고나라떼", display: false },
  { id: 11, text: "딸기라떼", display: false },
  { id: 12, text: "초코라떼", display: false },
  { id: 13, text: "얼그레이 밀크티", display: false },
  { id: 14, text: "복숭아아이스티", display: false },
  { id: 15, text: "플레인요거트스무디", display: false },
  { id: 16, text: "딸기요거트스무디", display: false },
  { id: 17, text: "블루베리요거트스무디", display: false },
  { id: 18, text: "한라봉스무디", display: false },
  { id: 19, text: "레몬에이드", display: false },
  { id: 20, text: "샤인머스캣에이드", display: false },
  { id: 21, text: "감귤주스", display: false },
  { id: 22, text: "토마토주스", display: false },
  { id: 23, text: "수박주스", display: false },
  { id: 24, text: "유자차", display: false },
  { id: 25, text: "배도라지모과차", display: false },
  { id: 26, text: "보이차", display: false },
  { id: 27, text: "로얄캐모마일", display: false },
  { id: 28, text: "쿨 민트", display: false },
  { id: 29, text: "현미녹차", display: false },
  { id: 30, text: "루이보스 빌베리", display: false },
  { id: 31, text: "플레인베이글", display: false },
  { id: 32, text: "블루베리베이글", display: false },
  { id: 33, text: "어니언베이글", display: false },
  { id: 34, text: "크림치즈", display: false },
  { id: 35, text: "제로콜라", display: false },
  { id: 36, text: "제로사이다", display: false },
  { id: 37, text: "탐스 애플키위", display: false },
  { id: 38, text: "빅토리아 라임", display: false },
  { id: 39, text: "핫식스", display: false },
];

const Display = values.filter((display) => display.display === true);
const NoDisplay = values.filter((display) => display.display === false);

function ProductDisplay() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
                {NoDisplay.map((val) => (
                  <li
                    key={val.id}
                    id={val.id}
                    onClick={() => setActive(val.id)}
                    className={`${active === val.id ? "active" : ""}`}
                  >
                    {val.text}
                  </li>
                ))}
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
            <div className="store_list_cont">
              <ul>
                {Display.map((val) => (
                  <li
                    key={val.id}
                    id={val.id}
                    onClick={() => setActive(val.id)}
                    className={`${active === val.id ? "active" : ""}`}
                  >
                    {val.text}
                  </li>
                ))}
              </ul>
            </div>
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