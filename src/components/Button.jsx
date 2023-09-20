import React from 'react';
import styles from "../styles/components/button.module.scss";

function Button({children, name}) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;