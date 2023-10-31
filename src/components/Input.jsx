import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/input.module.scss";
import { Icons } from "./Icon";

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "number", "search"]),
  shape: PropTypes.oneOf(["", "round", "line", "none"]),
  width: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.oneOf(["", "green"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  timer: PropTypes.bool,
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
  counton: PropTypes.bool,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  type: "text",
  shape: "",
  width: "",
  placeholder: "내용을 입력해 주세요.",
  placeholderColor: "",
  disabled: false,
  error: false,
  timer: false,
  onClick: () => {},
  counton: false,
};

export function Input({ onClick, ...others }) {
  const {
    type,
    shape,
    width,
    placeholder,
    placeholderColor,
    disabled,
    error,
    timer,
    globalClass,
    maxLength,
    counton,
    phone,
  } = others;
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
    if (counton === true) {
      if (e.target.value > maxLength) {
        return;
      }
      setValue(e.target.value);
    }
    if (phone === true) {
      setValue(
        e.target.value
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
          .replace(/(\-{1,2})$/g, "")
      );
    }

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
      className={`${styles.inputbox} ${styles[shape]} ${
        disabled ? styles.disabled : ""
      } ${focus ? styles.focus : ""} ${error ? styles.error : ""} ${
        globalClass || ""
        } `}
    >
      <input
        className={`${styles.input} ${styles[placeholderColor]}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        onFocus={(event) => handleFocusOn(event)}
        onBlur={(event) => handleFocusOut(event)}
      ></input>
      {type === "text" && !timer && (
        <button
          onClick={onReset}
          className={`${styles.delete} ${value ? styles.block : ""}`}
        >
          <span className={`${styles.delete}`} />
        </button>
      )}
      {/* 진현주 - disabled시 인증요청 button=none 작업 추가 (내정보 페이지에 사용)*/}
      {!disabled && phone === true && (
        <button onClick={onClick} className={`${styles.certification}`}>
          인증요청
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
      {/* {type === "password" && (
        <>
          <Icons.EyesOn />
        </>
      )} */}
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