import { style } from '@mui/system';
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

export const Default = (args) => (
  <>
  <CoffeeCard {...args}>{args.children}</CoffeeCard>
  </>
);

// 카드 배열 시 test
export const CardTest = () => {
  const prices = ["3500", "4000", "4500", "5000"];
  const titles = ["아메리카노", "카페라떼", "바닐라라떼(ICE)", "더치커피"];
  const images = ["item.png", "user_img.png", "item.png" , "user_img.png"];

  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 15px" }}>
      {prices.map((price, index) => (
        <CoffeeCard key={index} title={titles[index]} price={price} image={images[index]}/>
      ))}
    </div>
    </>
  );
};