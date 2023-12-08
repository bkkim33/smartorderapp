import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/count.module.scss";

Count.propTypes = {
  // count: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["", "small"]),
};

// 기본 상태가 필요시에만 사용됨
Count.defaultProps = {
  count: 0,
  disabled: false,
  size: "",
};

export function Count({ count, handleItemQuantity, ...others }) {
  const { disabled, size } = others;
  const [currentCount, setCount] = useState(count);

  const handleMinus = () => {
    if (currentCount > 0) {
      setCount(currentCount - 1);
      handleItemQuantity ? handleItemQuantity(-1) : setCount(currentCount - 1);
    }
  };

  const handlePlus = () => {
    setCount(currentCount + 1);
    handleItemQuantity ? handleItemQuantity(1) : setCount(currentCount + 1);
  };

  return (
    <div className={`${styles.countbox} ${styles[size]}`}>
      <button
        className={`${styles.btncount} ${styles.minus}`}
        onClick={handleMinus}
        disabled={disabled || currentCount === 0}
      />
      <input name="" title="상품 개수" value={currentCount} readOnly />
      <button
        className={`${styles.btncount} ${styles.plus}`}
        onClick={handlePlus}
        disabled={disabled}
      />
    </div>
  );
}

export default Count;