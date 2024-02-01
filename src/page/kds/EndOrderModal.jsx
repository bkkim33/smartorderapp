import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../components/Icon";
import Button from "../../components/Button";

import MuiAlert from "../../components/MuiAlert";

function EndOrderModal({ open, handleClose }) {

  const navigate = useNavigate();

  const [open02, setOpen02] = useState(false);

  const handleOpen02 = () => {
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };

  return (
    <>
      <div className={`${"kds_modal"} ${open ? "open" : ""}`}>
        <div className={`${"kds_modal_box"} ${open ? "open" : ""}`}>
          <div
            className={`${"kds_modal_pick"} ${open === "pick" ? "active" : ""}`}
          >
            <div className="kds_modal_top">
              <div className="kds_modal_tit mt_20">
                <h3>픽업대 선택</h3>
              </div>
            </div>
            <div className="kds_modal_picknum" draggable>
              <button>
                <p>110</p>
              </button>
              <button>
                <Icons.KDSDrag />
              </button>
            </div>
            <div className="kds_modal_list">
              <ul>
                <li className="active">
                  <span>1</span>
                  <div className="kds_modal_picknum">
                    <button>
                      <p>110</p>
                    </button>
                    <button>
                      <Icons.KDSDrag />
                    </button>
                  </div>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>3</span>
                </li>
                <li>
                  <span>4</span>
                </li>
                <li>
                  <span>5</span>
                </li>
                <li>
                  <span>6</span>
                </li>
                <li className="none">
                  <span>7</span>
                </li>
                <li className="none">
                  <span>8</span>
                </li>
              </ul>
            </div>
            <div className="kds_modal_btn">
              <button onClick={handleClose}>닫기</button>
              <button onClick={handleOpen02}>확인</button>
            </div>
          </div>
          <div
            className={`${"kds_modal_pick"} ${
              open === "serving" ? "active" : ""
            }`}
          >
            <div className="kds_modal_top">
              <div className="kds_modal_tit">
                <h3>서빙 선택</h3>
              </div>
            </div>
            <div className="kds_modal_tab">
              <div className="kds_modal_tab_lft">
                <button className="active">로봇1</button>
                <button>로봇2</button>
                <button className="disabled">로봇3</button>
                <button>직원 서빙</button>
              </div>
              <div className="kds_modal_tab_rgt">
                <button className="active">트레이1</button>
                <button>트레이2</button>
                <button>트레이3</button>
              </div>
            </div>
            <div className="kds_modal_btn">
              <button onClick={handleClose}>닫기</button>
              <button onClick={handleOpen02}>확인</button>
            </div>
          </div>
          <div
            className={`${"kds_modal_pick"} ${
              open === "delivery" ? "active" : ""
            }`}
          >
            <div className="kds_modal_top">
              <div className="kds_modal_tit">
                <h3>배달 선택</h3>
              </div>
            </div>
            <div className="kds_modal_tab">
              <div className="kds_modal_tab_lft">
                <button>로봇1</button>
                <button>로봇2</button>
                <button className="disabled">로봇3</button>
                <button className="active">직원 서빙</button>
              </div>
              <div className="kds_modal_tab_rgt">
                <button className="active">양땡이</button>
                <button>박땡이</button>
                <button>김땡이</button>
                <button>김땡이</button>
                <button>이땡이</button>
              </div>
            </div>
            <div className="kds_modal_btn">
              <button onClick={handleClose}>닫기</button>
              <button onClick={handleOpen02}>확인</button>
            </div>
          </div>
        </div>
        <div className="kds_modal_dimd" onClick={handleClose}></div>
      </div>
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        type="kds"
        title={
          <>
            {open === "pick" && "주문번호를 픽업대로 이동 시켜주세요."}
            {open === "serving" && "서빙 방법을 선택해주세요."}
            {open === "delivery" && "배달 방법을 선택해주세요."}
          </>
        }
        button={
          <>
            <Button onClick={handleClose02} globalClass="kdsalert_btn confirm">
              확인
            </Button>
          </>
        }
      />
    </>
  );
};

export default EndOrderModal;
