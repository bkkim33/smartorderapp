import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/Textarea.module.scss";
// import { Icons2 } from "./Icon2";

Textarea.propTypes = {
  children: PropTypes.string,
  error: PropTypes.bool,
  shape: PropTypes.oneOf(["", "round"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  classname: PropTypes.string,
  maxLength: PropTypes.any.isRequired,
};

// 기본 상태가 필요시에만 사용됨
Textarea.defaultProps = {
  children: "",
  error: false,
  shape: "",
  placeholder: "내용을 입력해 주세요.",
  disabled: false,
  maxLength: 10,
};

export function Textarea({ children, onClick,  ...others }) {
  const { error, shape,  placeholder, disabled, classname, maxLength } = others;
  const [focus, setFocus] = useState(false);
  const handleFocusOn = () => {
    setFocus(true);
  };
  const handleFocusOut = () => {
    setFocus(false);
  };
  const [textareaCount, setTextareaCount] = useState(0);
  const onTextareaHandler = (e) => {
    setTextareaCount(e.target.value.length);
  };

  return (
    <div className={`
     ${styles.textareabox} 
     ${styles[shape]} 
     ${classname || ''}
     ${disabled ? styles.disabled : ""} 
     ${focus ? styles.focus : ""}
     ${error ? styles.error : ""}`}
    >
      <textarea 
        className={` ${styles.textarea} ${classname || ''}`}
        placeholder={placeholder}
        
        disabled={disabled}
        onFocus={(event) => handleFocusOn(event)}
        onBlur={(event) => handleFocusOut(event)}
        maxLength={maxLength}
        onChange={onTextareaHandler}
        >
        {children}
      </textarea>
      <p>
          <span>{textareaCount}/{maxLength}&nbsp;Character</span> 
      </p>
    </div>
  );
}

export default Textarea;