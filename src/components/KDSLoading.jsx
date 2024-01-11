import React from 'react';
import styles from "../styles/components/loading.module.scss";

export function KDSLoading() {
  return (
    <div className={`${styles.kdsloading_wrap}`}>
      <div className={`${styles.kdsloading_box}`}>
        <div className={`${styles.kdsloading_item}`}>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KDSLoading;