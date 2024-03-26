import React, { useState } from "react";
import Layout from '../../../layout/KDSDefaultLayout'
import KDSContentBox from "../../../layout/KDSContentBox";
import { Icons } from "../../../components/Icon";
import Button from "../../../components/Button";
import MuiAlert from "../../../components/MuiAlert";
   
function PickPage() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [open03, setOpen03] = useState(false);

  const handleOpen01 = () => {
    setOpen01(true);
  };
  const handleClose01 = () => {
    setOpen01(false);
  };

  const handleOpen02 = () => {
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };
  const handleOpen03 = () => {
    setOpen03(true);
  };
  const handleClose03 = () => {
    setOpen03(false);
  };

  return (
    <Layout>
      <KDSContentBox pick>
        <h1 className="kds_title mb_40">픽업현황</h1>
        <div className="kds_pick_list">
          <ul>
            <li className="active">
              <span>
                <em>1</em>
                <Icons.KDSPickNum fill="#00C0FF" />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>110</p>
                </button>
                <button onClick={handleOpen02}>
                <Icons.Delete width={30} height={30} fill="#00C0FF" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>2</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>111</p>
                </button>
                <button onClick={handleOpen02}>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>3</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>112</p>
                </button>
                <button onClick={handleOpen02}>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>4</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>113</p>
                </button>
                <button onClick={handleOpen02}>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>5</em>
                <Icons.KDSPickNum />
              </span>
            </li>
            <li>
              <span>
                <em>6</em>
                <Icons.KDSPickNum />
              </span>
            </li>
            <li className="none"></li>
            <li className="none"></li>
          </ul>
        </div>
        <div className="kds_pick_btn mt_30">
          <button onClick={handleOpen01}>전체 초기화</button>
          <button onClick={handleOpen03}>재호출</button>
          {/* <button className="disabled">재호출</button> */}
        </div>
      </KDSContentBox>
      <MuiAlert
        open={open02}
        onClose={handleClose02}
        type="kds"
        title={<>선택하신 {"1"}번 픽업대를 정리하시겠습니까?</>}
        button={
          <>
            <Button onClick={handleClose02} globalClass="kdsalert_btn cancle">
              취소
            </Button>
            <Button onClick={handleClose02} globalClass="kdsalert_btn confirm">
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={open01}
        onClose={handleClose01}
        type="kds"
        title={<>모든 픽업대를 정리하시겠습니까?</>}
        button={
          <>
            <Button onClick={handleClose01} globalClass="kdsalert_btn cancle">
              취소
            </Button>
            <Button onClick={handleClose01} globalClass="kdsalert_btn confirm">
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={open03}
        onClose={handleClose03}
        type="kds"
        title={
          <>
            선택하신 {"1"}번 픽업대의 <br /> 주문번호 {"110"}번을 재호출
            하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={handleClose03} globalClass="kdsalert_btn cancle">
              취소
            </Button>
            <Button onClick={handleClose03} globalClass="kdsalert_btn confirm">
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default PickPage;
