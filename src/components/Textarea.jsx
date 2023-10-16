import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/Textarea.module.scss";

Textarea.propTypes = {
  children: PropTypes.string,
  error: PropTypes.bool,
  shape: PropTypes.oneOf(["", "round"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  classname: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  value: PropTypes.string,
  counton: PropTypes.bool,
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
};

export function Textarea({ children, onClick,  ...others }) {
  const [counter, setCounter] = useState("")
  const {error, shape,  placeholder, disabled, classname, maxLength, counton} = others;
  const [focus, setFocus] = useState(false);
  const handleFocusOn = () => {
    setFocus(true);
  };
  const handleFocusOut = () => {
    setFocus(false);
  };

  const onTextareaHandler = (e) => {
    const value = e.target.value;
    if(value.length <= maxLength){  
      setCounter(value);
    }
  };

  return (
    <> 
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
        onFocus={(event) => handleFocusOn(event)}
        onBlur={(event) => handleFocusOut(event)}
        maxLength={maxLength}
        onChange={onTextareaHandler}
        value={counter}
        >
        {children}
      </textarea>
      {counton ? (
          <span>{counter.length}/{maxLength}&nbsp;Character</span>
        ) : null}
        </div>
      </>
  );
}

export default Textarea;