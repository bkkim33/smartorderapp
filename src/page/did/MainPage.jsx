import React from "react";
import Layout from "../../layout/DIDDefaultLayout";
import { Icons } from "../../components/Icon";
import DIDContentBox from "../../layout/DIDContentBox";
import Openimg01 from "../../images/DID_main_open.png";
import Openimg02 from "../../images/DID_main_open01.png";
import Openimg03 from "../../images/DID_main_open02.png";
import Closeimg01 from "../../images/DID_main_close.png";
import Closeimg02 from "../../images/DID_main_close01.png";
import Closeimg03 from "../../images/DID_main_close02.png";

function MainPage() {
  return (
    <Layout>
      {/* <DIDContentBox>
        <img src={Openimg01} alt="오픈 이미지 01" />
        <img src={Openimg02} alt="오픈 이미지 02" />
        <img src={Openimg03} alt="오픈 이미지 03" />
        <img src={Closeimg01} alt="마감 이미지 01" />
        <img src={Closeimg02} alt="마감 이미지 02" />
        <img src={Closeimg03} alt="마감 이미지 03" />
      </DIDContentBox> */}
      <DIDContentBox left>
        {/* 제조 완료 리스트 */}
        <div className="did_done">
          <h2>메뉴가 준비되었습니다.</h2>
          <p>주문 번호를 확인해 주세요.</p>
          <ul className="did_done_list">
            <li>
              <div className="did_done_list_tit">
                <span>
                  <em>1</em>
                  <Icons.KDSPickNum fill="#656F79" />
                </span>
                <p>픽업대</p>
              </div>
              <p>101</p>
            </li>
            <li>
              <div className="did_done_list_tit">
                <span>
                  <em>2</em>
                  <Icons.KDSPickNum fill="#656F79" />
                </span>
                <p>픽업대</p>
              </div>
              <p>102</p>
            </li>
            <li>
              <div className="did_done_list_tit">
                <span>
                  <em>3</em>
                  <Icons.KDSPickNum fill="#656F79" />
                </span>
                <p>픽업대</p>
              </div>
              <p>103</p>
            </li>
            <li>
              <div className="did_done_list_tit">
                <span>
                  <em>4</em>
                  <Icons.KDSPickNum fill="#656F79" />
                </span>
                <p>픽업대</p>
              </div>
              <p>104</p>
            </li>
            <li>
              <div className="did_done_list_tit">
                <span>
                  <em>5</em>
                  <Icons.KDSPickNum fill="#656F79" />
                </span>
                <p>픽업대</p>
              </div>
              <p>
                <Icons.DIDCup fill="#656F79" />
              </p>
            </li>
            <li>
              <div className="did_done_list_tit">
                <span>
                  <em>6</em>
                  <Icons.KDSPickNum fill="#656F79" />
                </span>
                <p>픽업대</p>
              </div>
              <p>
                <Icons.DIDCup fill="#656F79" />
              </p>
            </li>
            <li className="did_done_list_none">
              <p>
                <Icons.DIDCup fill="#656F79" />
              </p>
            </li>
            <li className="did_done_list_none">
              <p>
                <Icons.DIDCup fill="#656F79" />
              </p>
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
            <p><span>8번 픽업대</span>에서 픽업해 주세요.</p>
          </div>
        </div> */}
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