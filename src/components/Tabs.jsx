import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/tabs.module.scss"

Tabs.propTypes = {
  type: PropTypes.oneOf(["", "round", "poingbg", "admin", "linebox"]),
  globalClass: PropTypes.string,
};

Tabs.defaultProps = {
    type: "",
    globalClass: "",
};

export function Tabs({ TabsData, ...others }) {
  const { type, globalClass } = others;
  const [active, setActive] = useState(null);
  return (
    <>
      <div className={` ${styles.tabs} ${styles[type]} ${globalClass || ""} `}>
        {TabsData.map((btn) => (
          <button
            className={`
            ${active === btn ? styles.active : ""}
            ${btn.defaultActive ? (active === null ? styles.active : "") : ""}`}
            onClick={() => setActive(btn)}
            key={btn.id}
          >
            {btn.title}
          </button>
        ))}
      </div>
      {TabsData.map((content) => (
        <div
          key={content.id}
          className={`
            ${styles.tabs_content} 
            ${active === content ? styles.active : ""} 
            ${content.defaultActive ? (active === null ? styles.active : "") : ""}
            ${globalClass + "content" || ""}
          `}
        >
          {content.content}
        </div>
      ))}
    </>
  );
};

export default Tabs;