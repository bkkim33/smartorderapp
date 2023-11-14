import React from 'react';
import styles from "../styles/layout/layout.module.scss";

function ContentBox({ children, top, bottom, left, right }) {

  const classNames = [
    styles.content_box,
    top ? styles.content_box_top : "",
    bottom ? styles.content_box_bottom : "",
    left ? styles.content_box_left : "",
    right ? styles.content_box_right : "",
  ].join(' ');


  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default ContentBox;