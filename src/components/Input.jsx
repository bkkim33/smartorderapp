import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/input.module.scss";
import { Icons } from "./Icon";

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "number", "search"]),
  shape: PropTypes.oneOf(["", "round", "line", "none"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  timer: PropTypes.bool,
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
};

Input.defaultProps = {
    type: "text",
    shape: "",
    placeholder: "내용을 입력해 주세요.",
    disabled: false,
    error: false,
    timer: false,
    onClick: {},
};

export function Input({ onClick, ...others }) {
  const { type, shape, placeholder, disabled, error, timer, globalClass } = others;
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
      console.log("time out");
      clearInterval(timerId.current);
    }
  }, [sec]);

  return (
    <div
      className={`${styles.inputbox} ${styles[shape]} ${disabled ? styles.disabled : ""} ${focus ? styles.focus : ""} ${error ? styles.error : ""} ${globalClass || ""} `}
    >
      <input
        className={`${styles.input}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        onFocus={(event) => handleFocusOn(event)}
        onBlur={(event) => handleFocusOut(event)}
      ></input>
      { type === "text" && !timer && (
          <button
            onClick={onReset}
            className={`${styles.delete} ${value ? styles.block : ""}`}
          >
            <span className={`${styles.delete}`} />
          </button>
        )
      }
      { type === "text" && timer && (
        <span className={`${styles.time}`}>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</span>
        )
      }
      {type === "password" && (
        <>          
          <Icons.EyesOff />
        </>
      )
      }
      { type === "search" && (
        <>
          <button
            onClick={onReset}
            className={`${styles.delete} ${value ? styles.block : ""}`}
          >
            <span className={`${styles.delete}`} />
          </button>
          <button className={`${styles.search}`}
            onClick={onClick}
          >
            <Icons.Search />
          </button>
        </>
        )
      }
    </div>
  );
}

export default Input;