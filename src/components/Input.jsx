import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/input.module.scss";
import { Icons } from "./Icon";

Input.propTypes = {
    type: PropTypes.oneOf(["text", "password", "number"]),
    shape: PropTypes.oneOf(["", "round", "line"]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    classname: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
    shape: "",
    placeholder: "내용을 입력해 주세요.",
    disabled: false,
};

export function Input({ ...others }) {
  const { type, shape, placeholder, disabled, classname } = others;
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onReset = () => {
    setValue("");
  };
  const handleFocusOn = () => {
    setFocus(true);
  };
  const handleFocusOut = () => {
    setFocus(false);
  };
  return (
    <div
      className={`${styles.inputbox} ${styles[shape]} ${
        classname ? styles[classname] : ""
      } ${disabled ? styles.disabled : ""} ${focus ? styles.focus : ""}`}
    >
      <input
        className={`${styles.input}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={(event) => handleFocusOn(event)}
        onBlur={(event) => handleFocusOut(event)}
      ></input>
      <button
        className={`${styles.delete} ${value ? styles.block : ""}`}
        onClick={onReset}
      >
        <Icons.Deletecir />
      </button>
    </div>
  );
}

export default Input;