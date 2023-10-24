import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/tabs.module.scss"

Tabs.propTypes = {
    type: PropTypes.oneOf(["","round"]),
    globalClass: PropTypes.string,
    onClick: PropTypes.func,
}

Tabs.defaultProps = {
    type: "",
    globalClass: "",
};

export function Tabs({ TabsBtn, onClick, ...others }){
    const { type, globalClass } = others;
    const [active, setActive] = useState(null);
    return (
      <div className={` ${styles.tabs} ${styles[type]} ${globalClass || ""} `}>
        {TabsBtn.map((btn) => (
          <button
            className={`
            ${active === btn ? styles.active : ""}
            ${
              btn.defaultActive
                ? active === null ? styles.active
                : "" : ""
            }`}
            onClick={() => setActive(btn)}
            key={btn.id}
          >
            {btn.title}
          </button>
        ))}
      </div>
    );
};

export default Tabs;