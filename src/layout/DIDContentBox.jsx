import React from 'react';
import styles from "../styles/layout/didlayout.module.scss";

function DIDContentBox({ children, left, right }) {
  return (
    <div
      className={`${styles.content_box} ${left ? styles.content_box_left : ""}  ${right ? styles.content_box_right : "" }`}
    >
      {children}
    </div>
  );
}

export default DIDContentBox;