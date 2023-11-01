import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/count.module.scss";

Count.propTypes = {
  handleItemQuantity: PropTypes.func.isRequired,
  count: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["", "small"]),
};

// 기본 상태가 필요시에만 사용됨
Count.defaultProps = {
  count: 0,
  disabled: false,
  size: "",
};

export function Count({ handleItemQuantity, count, ...others }) {
  const { disabled, size } = others;

  // 진현주 - 코드 간소화 
  const handleMinus = () => {
    if (count > 0) {
      handleItemQuantity(-1); 
    }
  };

  const handlePlus = () => {
    handleItemQuantity(1); 
  };

  return (
    <div className={`${styles.countbox} ${styles[size]}`}>
      <button
        className={`${styles.btncount} ${styles.minus}`}
        onClick={handleMinus}
        disabled={disabled || count === 0}
      />
      <input name="" title="상품 개수" value={count} readOnly />
      <button
        className={`${styles.btncount} ${styles.plus}`}
        onClick={handlePlus}
        disabled={disabled}
      />
    </div>
  );
}

export default Count;