import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '../../components/CoffeeCard';
import Tabs from "../../components/Tabs";

// import Mainimg from "../../images/main_img.gif";

const CoffeeData = [
  {
    id: 1,
    title: "아메리카노",
    image: require("../../images/item.png"),
    price: 3500,
    type: "coffee",
    favorites: true,
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
  },
  {
    id: 6,
    title: "딸기라떼",
    image: require("../../images/item03.png"),
    price: 5500,
    type: "noncoffee",
    favorites: true,
  },
  {
    id: 7,
    title: "토마토주스",
    image: require("../../images/item04.png"),
    price: 5500,
    type: "adejuice",
    favorites: false,
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

const Coffee = CoffeeData.filter((CoffeeData) => CoffeeData.type === "coffee");
const NonCoffee = CoffeeData.filter(
  (CoffeeData) => CoffeeData.type === "noncoffee"
);
const AdeJuice = CoffeeData.filter(
  (CoffeeData) => CoffeeData.type === "adejuice"
);

// const Blended = CoffeeData.filter(
//   (CoffeeData) => CoffeeData.type === "blended"
// );

const Tea = CoffeeData.filter((CoffeeData) => CoffeeData.type === "tea");


function FullMenuPage() {
  const navigate = useNavigate();
  return (
    <div className="coffeemenu">
      <Tabs
        TabsData={[
          {
            id: 0,
            title: "ALL",
            defaultActive: true,
            content: (
              <>
                <Card
                  data={CoffeeData}
                  onClick={() => {
                    navigate("/order");
                  }}
                />
              </>
            ),
          },
          {
            id: 1,
            title: "Coffee",
            content: (
              <>
                <Card
                  data={Coffee}
                  onClick={() => {
                    navigate("/order");
                  }}
                />
              </>
            ),
          },
          {
            id: 2,
            title: "Non-Coffee",
            content: (
              <>
                <Card
                  data={NonCoffee}
                  onClick={() => {
                    navigate("/order");
                  }}
                />
              </>
            ),
          },
          {
            id: 3,
            title: "Ade/Juice",
            content: (
              <>
                <Card
                  data={AdeJuice}
                  onClick={() => {
                    navigate("/order");
                  }}
                />
              </>
            ),
          },
          // {
          //   id: 4,
          //   title: "Blended",
          //   content: (
          //     <>
          //       <Card data={Blended} />
          //     </>
          //   ),
          // },
          {
            id: 5,
            title: "Tea",
            content: (
              <>
                <Card
                  data={Tea}
                  onClick={() => {
                    navigate("/order");
                  }}
                />
              </>
            ),
          },
        ]}
        type="round"
        globalClass="coffeemenu_tab"
      />
    </div>
  );
}

export default FullMenuPage;