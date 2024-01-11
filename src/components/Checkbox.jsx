import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/checkbox.module.scss";

Checkbox.propTypes = {
  // children: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  textposition: PropTypes.oneOf(["left", ""]),
  globalClass: PropTypes.string,
};

// 기본 상태가 필요시에만 사용됨
Checkbox.defaultProps = {
  value: "value",
  name: "radio1",
  id: "radio0",
  // defaultChecked: false,
  disabled: false,
  textposition: "",
  globalClass: "",
};

export function Checkbox({ children, id, onChange, ...others }) {
  const {
    value,
    name,
    checked,
    defaultChecked,
    textposition,
    disabled,
    txt,
    globalClass,
  } = others;
  
  // const onChange = (e) => {
  //   const { value } = e.target;
  //   console.log("clicked", value);
  // };  

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }    
  };
  
  return (
    <label
      htmlFor={id}
      className={`${styles.checkboxlabel} ${globalClass || ""}`}
    >
      <input
        className={`${styles.checkboxinput}`}
        type="checkbox"
        value={value}
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        checked={checked}
      />
      {textposition === "left" && txt && (
        <span className={`${styles.text}`}>{txt}</span>
      )}
      <span className={`${styles.checkboxcustom}`} />
      {children && children}
      {textposition !== "left" && txt && (
        <span className={`${styles.text}`}>{txt}</span>
      )}
    </label>
  );
}

export default Checkbox;