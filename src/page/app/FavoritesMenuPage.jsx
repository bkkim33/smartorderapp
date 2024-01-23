import React from "react";
import Card from "../../components/CoffeeCard";
import NoData from "../../components/NoData";
// import Mainimg from "../../images/main_img.gif";

const CoffeeData = [
  {
    id: 1,
    title: "아메리카노",
    image: require("../../images/item.png"),
    price: 3500,
    type: "coffee",
    favorites: false,
  },
  {
    id: 2,
    title: "카페라떼",
    image: require("../../images/item01.png"),
    price: 4000,
    type: "coffee",
    favorites: false,
  },
  {
    id: 3,
    title: "바닐라라떼(ICE)",
    image: require("../../images/item01.png"),
    price: 4300,
    type: "coffee",
    favorites: false,
  },
  {
    id: 4,
    title: "더치커피",
    image: require("../../images/item.png"),
    price: 3500,
    type: "coffee",
    favorites: false,
  },
  {
    id: 5,
    title: "청포도에이드",
    image: require("../../images/item02.png"),
    price: 4500,
    type: "adejuice",
    favorites: false,
    notsold: "판매중지",
  },
  {
    id: 6,
    title: "딸기라떼",
    image: require("../../images/item03.png"),
    price: 5500,
    type: "noncoffee",
    favorites: true,
    notsold: "품절",
  },
  {
    id: 7,
    title: "토마토주스",
    image: require("../../images/item04.png"),
    price: 5500,
    type: "adejuice",
    favorites: false,
    notsold: "판매중지",
  },
  {
    id: 8,
    title: "캐모마일(ICE)",
    image: require("../../images/item05.png"),
    price: 4000,
    type: "tea",
    favorites: false,
  },
];

const Favorites = CoffeeData.filter(
  (FavoritesData) => FavoritesData.favorites === true
);


function FavoritesMenuPage() {
  return (
    <div className="coffeemenu mt_20">
      {Favorites?.length > 0 ? (
        <Card data={Favorites} />
      ) : (
        <NoData globalClass="mt_80 mb_80" txt="즐겨찾는 메뉴가 없습니다." />
      )}
    </div>
  );
}

export default FavoritesMenuPage;
