import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/coffeecard.module.scss';

CoffeeCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

CoffeeCard.defaultProps = {
  image: "item.png",
  title: "아메리카노",
  price: "3500",
};

export function CoffeeCard ({ onClick, ...others }) {
  const {title, price, image} = others;

  let formattedPrice;
  if (!isNaN(price)) {
    const parsedPrice = parseInt(price, 10);
    formattedPrice = parsedPrice.toLocaleString("ko-KR") + "원";
  } else {
    formattedPrice = price;
  }

  return (
    <>
      <div className={`${styles.card}`} onClick={onClick}>
        <img src={require("../../src/images/" + image)} alt={title} className={`${styles.image}`} />
        <p className={`${styles.title}`}>{title}</p>
        <p className={`${styles.price}`}>{formattedPrice}</p>
      </div>
    </>
  );
};

export default CoffeeCard;

