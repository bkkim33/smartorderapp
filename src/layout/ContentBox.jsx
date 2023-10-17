import React from 'react';
import styles from "../styles/layout/layout.module.scss";

function ContentBox({ children }) {
  return <div className={`${styles.content_box}`}>{children}</div>;
}

export default ContentBox;