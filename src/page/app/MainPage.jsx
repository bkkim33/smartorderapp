import React, { useState, useEffect } from "react";
import Layout from '../../layout/AppDefaultLayout';
import MainimgDefult from "../../images/main_img.gif";

import FullMenu from "./FullMenuPage";
import FavoritesMenu from "./FavoritesMenuPage";

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

const MenuList = [
  "에스프레소",
  "아메리카노",
  "카페라떼",
  "카푸치노",
  "바닐라라떼",
  "캬라멜마끼아또",
  "더치커피",
  "디카페인콜드브루",
  "캔 콜드브루",
  "달고나라떼",
  "딸기라떼",
  "초코라떼",
  "얼그레이 밀크티",
  "복숭아아이스티",
  "플레인요거트스무디",
  "딸기요거트스무디",
  "블루베리요거트스무디",
  "한라봉스무디",
  "레몬에이드",
  "샤인머스캣에이드",
  "감귤주스",
  "토마토주스",
  "수박주스",
  "유자차",
  "배도라지모과차",
  "보이차",
  "로얄캐모마일",
  "쿨 민트",
  "현미녹차",
  "루이보스 빌베리",
];


function MainPage() {

  // const [timer, setTimer] = useState(0);

  const date = new Date();

  const hours = Number(date.getHours());

  // const currentTimer = () => {
  //   const date = new Date();
  //   const hours = Number(date.getHours());
  //   // const minutes = String(date.getMinutes()).padStart(2, "0");
  //   // const seconds = String(date.getSeconds()).padStart(2, "0");
  //   return hours;
  // };
  
  // const currentTime = currentTimer();
  const getRandomIndex = function(length) {
    return parseInt(Math.random() * length)
  }

  // useEffect(() => {
  //   setTimer(currentTime);
  // }, [currentTime]);

  return (
    <Layout Coupon Cart Menu>
      <div className="main">
        <div className="align top main_visual">
          <div className="lft">
            <p>
              <span className="headline4 mb_16">
                {date.getHours() === 0
                  ? "Good night"
                  : date.getHours() === 1
                  ? "Good night"
                  : date.getHours() === 2
                  ? "Good night"
                  : date.getHours() === 3
                  ? "Good night"
                  : date.getHours() === 4
                  ? "Good night"
                  : date.getHours() === 5
                  ? "Good night"
                  : date.getHours() === 6
                  ? "Good morning"
                  : date.getHours() === 7
                  ? "Good morning"
                  : date.getHours() === 8
                  ? "Good morning"
                  : date.getHours() === 9
                  ? "Good morning"
                  : date.getHours() === 10
                  ? "Good morning"
                  : date.getHours() === 11
                  ? "Good morning"
                  : date.getHours() === 12
                  ? "Good afternoon"
                  : date.getHours() === 13
                  ? "Good afternoon"
                  : date.getHours() === 14
                  ? "Good afternoon"
                  : date.getHours() === 15
                  ? "Good afternoon"
                  : date.getHours() === 16
                  ? "Good afternoon"
                  : date.getHours() === 17
                  ? "Good afternoon"
                  : date.getHours() === 18
                  ? "Good night"
                  : date.getHours() === 19
                  ? "Good night"
                  : date.getHours() === 20
                  ? "Good night"
                  : date.getHours() === 21
                  ? "Good night"
                  : date.getHours() === 22
                  ? "Good night"
                  : date.getHours() === 23
                  ? "Good night"
                  : date.getHours() === 24
                  ? "Good night"
                  :  ""}
              </span>
              <span>
                <strong>하루가 달콤해지는</strong>
              </span>
              <span>
                <em className="neon">
                  {MenuList[getRandomIndex(MenuList.length)]}
                </em>
              </span>
              <span>
                <em className="neon">한잔 어때요?</em>
              </span>
            </p>
          </div>
          <div className="rgt">
            <img src={MainimgDefult} alt="유저 이미지" />
          </div>
        </div>
        <div className="main_content">
          <Locations />
          <Tabs
            TabsData={[
              {
                id: 1,
                title: "전체 메뉴",
                defaultActive: true,
                content: (
                  <>
                    <FullMenu />
                  </>
                ),
              },
              {
                id: 2,
                title: "즐겨 찾는 메뉴",
                content: (
                  <>
                    <FavoritesMenu />
                  </>
                ),
              },
            ]}
            globalClass="main_tab"
          />
        </div>
      </div>
    </Layout>
  );
}

export default MainPage;
