import React from "react";
import Layout from "../../layout/DIDDefaultLayout";
import { Icons } from "../../components/Icon";
import DIDContentBox from "../../layout/DIDContentBox";
import Openimg01 from "../../images/DID_main_open.png";
import Closeimg01 from "../../images/DID_main_close.png";

function MainPage() {
  return (
    <Layout>
      {/* <DIDContentBox>
        <img src={Openimg01} alt="오픈 이미지 01" />
        <img src={Closeimg01} alt="마감 이미지 01" />
      </DIDContentBox> */}
      <DIDContentBox left>
        {/* 제조 완료 리스트 */}
        {/* <div className="did_done">
          <h2>메뉴가 준비되었습니다.</h2>
          <p>주문 번호를 확인해 주세요.</p>
          <ul className="did_done_list">
            <li>
              <span>1</span>
              <p>D101</p>
            </li>
            <li>
              <span>2</span>
              <p>S102</p>
            </li>
            <li>
              <span>3</span>
              <p>107</p>
            </li>
            <li>
              <span>4</span>
              <p>108</p>
            </li>
            <li>
              <span>5</span>
              <p>109</p>
            </li>
            <li>
              <span>6</span>
              <p>201</p>
            </li>
            <li>
              <span>7</span>
              <Icons.DIDCup />
            </li>
            <li>
              <span>8</span>
              <Icons.DIDCup />
            </li>            
          </ul>
        </div> */}
        {/* 제조 완료 팝업 */}
        <div className="did_done_popup">
          <div className="did_done_popup_tit">
            <Icons.DIDCup />
            <h2>주문번호</h2>
          </div>
          <div className="did_done_popup_num">
            125
          </div>
          <div className="did_done_popup_desc">
            <p>메뉴가 준비되었습니다.</p>
            <p><span>8번 픽업대</span>에서 픽업해 주세요.</p>
          </div>
        </div>
      </DIDContentBox>
      <DIDContentBox right>
        {/* 픽업 번호 리스트 */}
        <div className="did_preparing">
          <h2>메뉴를 준비중입니다.</h2>
          <ul>
            <li>125</li>
            <li>126</li>
            <li>127</li>
            <li>129</li>
            <li>130</li>
            <li>133</li>
          </ul>
        </div>
      </DIDContentBox>
    </Layout>
  );
}

export default MainPage;