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
  const { globalClass } = others;
  const [active, setActive] = useState(null);
  return (
    <div className={` ${styles.texttoggle} ${globalClass || ""}  `}>
      {data.map((btns) => (
        <div
          key={btns.id}
          className={`${styles.btn} ${active === btns ? styles.active : ""}`}
        >
          <button
            className={`${active === btns ? styles.active : ""} `}
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