import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/texttoggle.module.scss"

TextToggle.propTypes = {
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
}

TextToggle.defaultProps = {
  globalClass: "",
};

export function TextToggle({ TextToggleBtn, onClick, ...others }) {
  const { globalClass } = others;
  const [active, setActive] = useState(null);
  return (
    <div className={` ${styles.texttoggle} ${globalClass || ''} `}>
      {
        TextToggleBtn.map((btn) => (
          <button
            className={`${active === btn ? styles.active : ""}`}
            onClick={() => setActive(btn)}
            key={btn.id}
          >
            {btn.title}
          </button>
        ))
      }
    </div>
  );
};

export default TextToggle;