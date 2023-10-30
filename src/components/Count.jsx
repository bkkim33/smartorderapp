import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/count.module.scss";

Count.propTypes = {
  // onClick: PropTypes.func,
  // name: PropTypes.string,
  // title: PropTypes.string.isRequired,
  // type: PropTypes.string,
  // value: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["", "small"]),
};

// 기본 상태가 필요시에만 사용됨
Count.defaultProps = {
  // onClick: () => {}, 
  // type: "text",
  // value: 0,
  // name: "",
  // title: "상품 개수",
  disabled: false,
  size: "",
};

export function Count({ onClick, ...others }) {
  const { disabled, size } = others;
  const [count, setCount] = useState(0);
  const handleMinus = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  const handlePlus = () => {
      setCount(count + 1);
    };

  return (
    <div className={`${styles.countbox} ${styles[size]}`}>
      <button
        className={`${styles.btncount} ${styles.minus}`}
        onClick={handleMinus}
        disabled={disabled}
      >
        -
      </button>
      <input name="" title="상품 개수" value={count} readOnly />
      <button
        className={`${styles.btncount} ${styles.plus}`}
        onClick={handlePlus}
        disabled={disabled}
      >
        +
      </button>
    </div>
  );
}

export default Count;