import React from 'react';
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
  price: 3500,
};

export function CoffeeCard({ data, globalstyle, onClick }) {
  return (
    <div className={`${styles.card_box} ${globalstyle | ""}`}>
      {data.map((Coffee) => (
        <button
          key={Coffee.id}
          className={`${styles.card}`}
          onClick={!Coffee.notsold ? onClick : () => {}}
        >
          <div
            className={`${styles.card_img_box} ${"mb_15"} ${
              Coffee.notsold ? styles.dimd : ""
            }`}
          >
            {Coffee.notsold && <p>{Coffee.notsold}</p>}
            <img
              src={Coffee.image}
              alt={Coffee.title}
              className={`${styles.img}`}
            />
          </div>
          <p className={`${styles.title}`}>{Coffee.title}</p>
          <p className={`${styles.price}`}>
            {Coffee.price.toLocaleString()} 원
          </p>
        </button>
      ))}
    </div>
  );
};

export default CoffeeCard;

