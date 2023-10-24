import React from "react";
import Layout from '../../layout/AppDefaultLayout'
import Mainimg from "../../images/main_img.gif";

import Tabs from "../../components/Tabs";

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
          <div className="main_locations"></div>
          <Tabs
            TabsBtn={[
              {
                id: 1,
                title: "전체메뉴",
                defaultActive: true,
              },
              {
                id: 2,
                title: "즐겨찾는메뉴",
              },
            ]}
            onClick={() => {}}
          />
          <div style={{ height: '100%' }}>main</div>
        </div>
      </div>
    </Layout>
  );
}

export default MainPage;
