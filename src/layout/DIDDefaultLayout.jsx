import React from 'react';
import styles from "../styles/layout/didlayout.module.scss";

function DidDefaultLayout({ children }) {
  return (
    <>
      <div className={`${styles.layout}`}>
        <div className={`${styles.content}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default DidDefaultLayout;