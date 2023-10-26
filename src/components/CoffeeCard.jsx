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
  price: "3500",
};

export function CoffeeCard({ data, onClick }) {

  return (
    <div className={`${styles.card_box}`}>
      {data.map((Coffee) => (
        <div key={Coffee.id} className={`${styles.card}`} onClick={onClick}>
          <div className={`${styles.card_img_box} ${"mb_15"}`}>
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
        </div>
      ))}
    </div>
  );
};

export default CoffeeCard;

