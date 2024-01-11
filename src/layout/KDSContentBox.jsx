import React from 'react';
import styles from "../styles/layout/kdslayout.module.scss";

function KDSContentBox({ children, top, bottom }) {
  return (
    <div
      className={`${styles.content_box} ${top ? styles.content_box_top : ""}  ${
        bottom ? styles.content_box_bottom : ""
      }`}
    >
      {children}
    </div>
  );
}

export default KDSContentBox;