import React from 'react';
import styles from "../styles/components/loading.module.scss";

export function Loading(){
  return (
    <div className={`${styles.loading_wrap}`}>
      <div className={`${styles.loading_box}`}>
        <div className={`${styles.loading_item}`}>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;