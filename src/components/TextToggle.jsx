import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/texttoggle.module.scss"

TextToggle.propTypes = {
  // optiontext: PropTypes.bool,
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
}

TextToggle.defaultProps = {
  // optiontext: false,
  globalClass: "",
};

export function TextToggle({ data, ...others }) {
  const { optiontext, globalClass } = others;
  const [active, setActive] = useState(false);
  const onClick = (e) => {
    setActive(e.target === true)
  }
  return (
    <div className={` ${styles.texttoggle} ${globalClass || ''} `}>
      {
        data.map((btns) => (
          <>
            <button
              className={`${active === true ? styles.active : ""} `}
              onClick={onClick}
              key={btns.id}
            >
              {btns.title}
            </button>
            {active === true && <span className={`${optiontext ? styles.optiontext : ""}`}>+500</span>}
          </>      
        ))
      }
    </div>
  );
};

export default TextToggle;