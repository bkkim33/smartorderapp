import React, { useState } from "react";
import Layout from '../../layout/AppDefaultLayout'
import Mainimg from "../../images/main_img.gif";

import FullMenu from "./FullMenuPage";

import Tabs from "../../components/Tabs";

import { Icons } from "../../components/Icon";

const LocationsData = [
  {
    id: 1,
    title: "클라우드 카페",
    location: "서울 강남구 논현로 85길 46 메가존빌딩 1F",
    time: "매일 08:00~22:00",
    state: "주문가능",
  },
  {
    id: 2,
    title: "클라우드9 카페",
    location: "서울 강남구 역삼로17길 57 1F",
    time: "매일 08:00~22:00",
    state: "준비중",
  },
  {
    id: 3,
    title: "클라우드 카페",
    location: "경기 과천시 갈현동 471-1",
    time: "매일 08:00~22:00",
    state: "준비중",
  },
];

function Locations() {
  const [open, setOpen] = useState(false);
  const [titleSelect, setTitleSelect] = useState(
    <p className="headline1">
      <span>주문매장을</span>
      <span>선택해 주세요!</span>
    </p>
  );

  const LocationonCLick = () => {
    setOpen(!open);
  };
  const ListCLick = (location) => {
    setOpen(!open);
    setTitleSelect(
      <p>
        <span className="headline1">{location.title}</span>
        <span className="mt_12">
          {location.state === "준비중" && <em>준비중</em>}
          {location.state === "주문가능" && (
            <em className="red_bg">주문가능</em>
          )}
          {location.time}
        </span>
      </p>
    );
  };
  return (
    <div className="main_locations">
      <button onClick={LocationonCLick}>
        {titleSelect}
        <i className={`${open ? "open" : ""}`}>
          <Icons.ArrowBg
            width={36}
            height={36}
            fill="var(--blue)"
            stroke="#DAEE5F"
          />
        </i>
      </button>
      <div className={`${"main_locations_list"} ${open ? "open" : ""}`}>
        <ul>
          {LocationsData.map((location) => (
            <li key={location.id}>
              <button onClick={() => ListCLick(location)}>
                <i>
                  <Icons.LogoOnly width={20} height={20} />
                </i>
                <p className="optionItem">
                  <span>{location.title}</span>
                  <span>{location.location}</span>
                  <span>{location.time}</span>
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
 
}

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
          <Locations />
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
          />
        </div>
      </div>
    </Layout>
  );
}

export default MainPage;
