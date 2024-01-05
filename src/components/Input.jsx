import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/input.module.scss";
import { Icons } from "./Icon";

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "number", "search", "tel", "file"]),
  shape: PropTypes.oneOf(["", "round", "line", "none"]),
  width: PropTypes.string,
  height: PropTypes.oneOf(["", "large"]),
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.oneOf(["", "green"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  timer: PropTypes.bool,
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
  counton: PropTypes.bool,
  maxLength: PropTypes.number,
  readonly: PropTypes.bool,
  defaultValue: PropTypes.string,
  numericOnly: PropTypes.bool,
  noSpecialChars: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  shape: "",
  width: "",
  height: "",
  placeholder: "내용을 입력해 주세요.",
  placeholderColor: "",
  disabled: false,
  error: false,
  timer: false,
  onClick: () => {},
  counton: false,
  readonly: false,
  numericOnly: false,
  noSpecialChars: false,
};

export function Input({ onClick, ...others }) {
  const {
    type,
    shape,
    width,
    height,
    placeholder,
    placeholderColor,
    disabled,
    error,
    timer,
    globalClass,
    maxLength,
    counton,
    phone,
    readonly,
    defaultValue,
    numericOnly,
    noSpecialChars,
    certification,
    numtxt,
    slice,
  } = others;
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    let inputValue = e.target.value;
    if (type === 'tel') {
      inputValue.replace(/\D/g, "");
      if (slice === 3){
        inputValue.slice(0, 3);
      }
      if (slice === 4) {
        inputValue.slice(0, 4);
      } 
      if (!Number(inputValue)) {
        return;
      }
    }
    if (counton && inputValue.length > maxLength) {
      return;
    }
    if (phone) {
      inputValue = inputValue
        .replace(/[^0-9]/g, "")
        .slice(0, 11)
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, (_, p1, p2, p3) => {
          const parts = [p1, p2, p3].filter(Boolean);
          return parts.join('-');
        });
    } else {
      if (numericOnly) {
        inputValue = inputValue.replace(/\D/g, '');
      }
      if (noSpecialChars) {
        inputValue = inputValue.replace(/[^a-zA-Z0-9\s]/g, '');
      }
    }
    setValue(inputValue);
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
  // 타이머
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current < 0) {
      clearInterval(timerId.current);
    }
  }, [sec]);

  
  

  return (
    <div
      style={{
        width: width ? width : "100%",
      }}
      className={`${styles.inputbox} ${styles[shape]} ${styles[height]} ${
        disabled ? styles.disabled : ""
      } ${focus ? styles.focus : ""} ${error ? styles.error : ""} ${
        globalClass || ""
      } ${readonly ? styles.readonly : ""}`}
    >
      <input
        className={`${styles.input} ${styles[placeholderColor]}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        readOnly={readonly}
        onFocus={(event) => handleFocusOn(event)}
        onBlur={(event) => handleFocusOut(event)}
      ></input>
      {type === "text" && !timer && !readonly && !disabled && (
        <button
          onClick={onReset}
          className={`${styles.delete} ${value ? styles.block : ""}`}
        >
          <span className={`${styles.delete}`} />
        </button>
      )}
      {!disabled && phone === true && phone !== "number" && (
        <button onClick={onClick} className={`${styles.certification}`}>
          {!certification && <>인증요청</>}
          {certification && <>재전송</>}
        </button>
      )}
      {type === "text" && timer && (
        <span className={`${styles.time}`}>
          {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
        </span>
      )}
      {type === "text" && counton && (
        <span className={`${styles.time}`}>
          {value.length}/{maxLength}
        </span>
      )}
      {type === "number" && (
        <>
          <p>{numtxt}</p>
        </>
      )}
      {type === "search" && (
        <>
          <button
            onClick={onReset}
            className={`${styles.delete} ${value ? styles.block : ""}`}
          >
            <span className={`${styles.delete}`} />
          </button>
          <button className={`${styles.search}`} onClick={onClick}>
            <Icons.Search />
          </button>
        </>
      )}
    </div>
  );
}

export default Input;