import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/checkbox.module.scss";

Checkbox.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  textposition: PropTypes.oneOf(["left", ""]),
};

// 기본 상태가 필요시에만 사용됨
Checkbox.defaultProps = {
  children: "text",
  value: "value",
  name: "radio1",
  id: "radio0",
  defaultChecked: false,
  disabled: false,
  textposition: "",
};

export function Checkbox({ children, id, ...others }) {
  const { value, name, checked, defaultChecked, textposition, disabled } =
    others;
  const onChange = (e) => {
    const { value } = e.target;
    console.log("clicked", value);
  };
  return (
    <label htmlFor={id} className={`${styles.checkboxlabel}`}>
      <input
        className={`${styles.checkboxinput}`}
        type="checkbox"
        value={value}
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      {textposition === "left" && (
        <span className={`${styles.text}`}>{children}</span>
      )}
      <span className={`${styles.checkboxcustom}`} />
      {textposition !== "left" && (
        <span className={`${styles.text}`}>{children}</span>
      )}
    </label>
  );
}

export default Checkbox;