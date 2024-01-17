import React from "react";
import Layout from "../../layout/DIDDefaultLayout";
import { Icons } from "../../components/Icon";
import DIDContentBox from "../../layout/DIDContentBox";
import LeftimgDefault from "../../images/DID_bg_left.png";
import RightimgDefault from "../../images/DID_bg_right.png";

function MainPage() {
  return (
    <Layout>
      <DIDContentBox left>
        {/* 기본 */}
        {/* <img src={LeftimgDefault} alt="기본 이미지" /> */}
        {/* 제조 완료 리스트 */}
        <div className="did_done">
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
              <p>202</p>
            </li>
            <li>
              <span>8</span>
              <p>203</p>
            </li>
            <li>
              <span>9</span>
              <p>204</p>
            </li>
            <li>
              <span>10</span>
              <p>205</p>
            </li>
            <li>
              <span>11</span>
              <Icons.DIDCup />
            </li>
            <li>
              <span>12</span>
              <Icons.DIDCup />
            </li>            
          </ul>
        </div>
        {/* 제조 완료 팝업 */}
        {/* <div className="did_done_popup">
          <div className="did_done_popup_tit">
            <Icons.DIDCup />
            <h2>주문번호</h2>
          </div>
          <div className="did_done_popup_num">
            125
          </div>
          <div className="did_done_popup_desc">
            <p>메뉴가 준비되었습니다.</p>
            <p><span className="blue">8번 픽업대</span>에서 픽업해 주세요.</p>
          </div>
        </div> */}
      </DIDContentBox>
      <DIDContentBox right>
        {/* 기본 */}
        {/* <img src={RightimgDefault} alt="기본 이미지" /> */}
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