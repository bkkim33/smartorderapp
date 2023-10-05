import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/button.module.scss";

Button.propTypes = {
  children: PropTypes.string,
};

// 기본 상태가 필요시에만 사용됨
Button.defaultProps = {
  children: "text",
};

export function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;