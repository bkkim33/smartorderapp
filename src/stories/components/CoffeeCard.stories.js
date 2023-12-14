import React from 'react';
import { CoffeeCard }  from "../../components/CoffeeCard";

export default {
  title: 'Components/CoffeeCard',
  component: CoffeeCard,
  args: {
    image: 'item.png',
  },
  tags: ["autodocs"],
  argTypes: {
    image: { 
      control: "select", 
      options: ['item.png', 'user_img.png'] 
    },
    title: { control: 'text' },
    price: { control: 'number' },
  },
};

const CoffeeData = [
  {
    id: 1,
    title: "아메리카노",
    image: require("../../images/item.png"),
    price: 3500,
  },
  {
    id: 2,
    title: "카페라떼",
    image: require("../../images/item01.png"),
    price: 4000,
  },
  {
    id: 3,
    title: "바닐라라떼(ICE)",
    image: require("../../images/item01.png"),
    price: 4300,
  },
  {
    id: 4,
    title: "더치커피",
    image: require("../../images/item.png"),
    price: 3500,
  },
  {
    id: 5,
    title: "청포도에이드",
    image: require("../../images/item02.png"),
    price: 4500,
  },
  {
    id: 6,
    title: "딸기라떼",
    image: require("../../images/item03.png"),
    price: 5500,
  },
  {
    id: 7,
    title: "토마토주스",
    image: require("../../images/item04.png"),
    price: 5500,
  },
  {
    id: 8,
    title: "캐모마일(ICE)",
    image: require("../../images/item05.png"),
    price: 4000,
  },
];


export const Default = (args) => (
  <>
    <CoffeeCard data={CoffeeData} {...args}>
      {args.children}
    </CoffeeCard>
  </>
);