import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/button.module.scss";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["full", "xlarge", "medium", "small", ""]),
  round: PropTypes.bool,
  line: PropTypes.bool,
  disabled: PropTypes.bool,
  classname: PropTypes.string,
  onClick: PropTypes.func,
};

// 기본 상태가 필요시에만 사용됨
Button.defaultProps = {
  children: "button",
  size: "",
  round: false,
  line: false,
  disabled: false,
  onClick: {}
};

export function Button({ children, onClick, ...others }) {
  const { size, round, line, disabled, classname } = others;
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${round ? styles.round : ""} ${
        line ? styles.line : ""
      } ${classname} `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;