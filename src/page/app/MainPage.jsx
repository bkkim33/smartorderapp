import React from "react";
import Layout from '../../layout/AppDefaultLayout'
import Mainimg from "../../images/main_img.gif";

import FullMenu from "./FullMenuPage";

import Tabs from "../../components/Tabs";

// import { Icons } from "../../components/Icon";

function MainPage() {
  return (
    <Layout>
      <div className="main">
        <div className="align top main_visual">
          <div className="lft">
            <p>
              <span className="headline4 mb_16">Good morning</span>
              <span>
                <strong>하루가 달콤해지는</strong>
              </span>
              <span>
                <em className="neon">바닐라라떼</em>
              </span>
              <span>
                <em className="neon">한잔 어때요?</em>
              </span>
            </p>
          </div>
          <div className="rgt">
            <img src={Mainimg} alt="유저 이미지" />
          </div>
        </div>
        <div className="main_content">
          <div className="main_locations">
            <button>
              <p>
                <span>주문매장을</span>
                <span>선택해 주세요</span>
              </p>

            </button>
          </div>
          <Tabs
            TabsData={[
              {
                id: 1,
                title: "전체메뉴",
                defaultActive: true,
                content: (
                  <>
                    <FullMenu />
                  </>
                ),
              },
              {
                id: 2,
                title: "즐겨찾는메뉴",
                content: (
                  <>
                    <FullMenu />
                  </>
                ),
              },
            ]}
            onClick={() => {}}
          ></Tabs>
          <div style={{ height: "100%" }}>main</div>
        </div>
      </div>
    </Layout>
  );
}

export default MainPage;
