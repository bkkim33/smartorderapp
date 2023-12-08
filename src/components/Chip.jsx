import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/components/chip.module.scss";

Chip.propTypes = {
  label: PropTypes.string,
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
};

// 기본 상태가 필요시에만 사용됨
Chip.defaultProps = {
  label: "",
  globalClass: "",
  onClick: () => {},
};

export function Chip({ onClick, ...others }){

  const { label, globalClass,} = others;

  const [visible, setVisible] = useState(true);

  const handleDelete = () => {
    setVisible(false);
    onClick && onClick();
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={`${styles.chip} ${globalClass || ""}`}>
      {label}
      <button className={`${styles.delete}`} 
        onClick={handleDelete}
      /> 
    </div>
  );
};

export default Chip;