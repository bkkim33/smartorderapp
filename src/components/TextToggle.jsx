import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/texttoggle.module.scss"

TextToggle.propTypes = {
  type: PropTypes.oneOf(["", "linebox"]),
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
}

TextToggle.defaultProps = {
  type: "",
  globalClass: "",
};

export function TextToggle({ data, ...others }) {
  const { type, globalClass } = others;
  const [active, setActive] = useState(null);
  return (
    <div className={` ${styles.texttoggle} ${styles[type]} ${globalClass || ""}  `}>
      {data.map((btns) => (
        <div
          key={btns.id}
          className={` 
          ${styles.btn} 
          ${active === btns ? styles.active : ""}
          ${btns.defaultActive ? (active === null ? styles.active : "") : ""}
          `}
        >
          <button
            className={`
            ${active === btns ? styles.active : ""} 
            ${btns.defaultActive ? (active === null ? styles.active : "") : ""}`}
            onClick={(e) => setActive(btns)}
          >
            {btns.title}
          </button>
          {btns.option === true && active === btns && (
            <span className={`${styles.optiontext}`}>+500</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TextToggle;