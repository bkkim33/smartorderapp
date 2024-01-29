import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/textarea.module.scss";

Textarea.propTypes = {
  children: PropTypes.string,
  error: PropTypes.bool,
  shape: PropTypes.oneOf(["", "round"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number.isRequired,
  value: PropTypes.string,
  counton: PropTypes.bool,
  Height: PropTypes.number,
};

// 기본 상태가 필요시에만 사용됨
Textarea.defaultProps = {
  children: "",
  error: false,
  shape: "",
  placeholder: "내용을 입력해 주세요.",
  disabled: false,
  maxLength: 10,
  value: "",
  counton: false,
  Height: 50,
};

export function Textarea({ children, onClick, ...others }) {
  const [counter, setCounter] = useState(children);
  const {
    error,
    shape,
    placeholder,
    disabled,
    maxLength,
    counton,
    globalClass,
    Height,
  } = others;
  const [focus, setFocus] = useState(false);
  const handleFocusOn = () => {
    setFocus(true);
  };
  const handleFocusOut = () => {
    setFocus(false);
  };

  const onTextareaHandler = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setCounter(value);
    }
  };

  return (
    <>
      <div
        className={`
     ${styles.textareabox} 
     ${styles[shape]} 
     ${disabled ? styles.disabled : ""} 
     ${focus ? styles.focus : ""}
     ${error ? styles.error : ""}
     ${globalClass || ""}
     `}
      >
        <textarea
          className={` ${styles.textarea}`}
          placeholder={placeholder}
          onFocus={(event) => handleFocusOn(event)}
          onBlur={(event) => handleFocusOut(event)}
          maxLength={maxLength}
          onChange={onTextareaHandler}
          value={counter}
          style={{ height: Height }}
        >
          {children}
        </textarea>
        {counton ? (
          <span>
            {counter.length}/{maxLength}&nbsp;Character
          </span>
        ) : null}
      </div>
    </>
  );
}

export default Textarea;