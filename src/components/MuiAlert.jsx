/** @jsxImportSource @emotion/react */

import React from "react";
import Dialog from '@mui/material/Dialog';
import styles from "../styles/components/muialert.module.scss";

MuiAlert.propTypes = {};

MuiAlert.defaultProps = {};

export function MuiAlert({ open, onClose, title, button, desc }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={`${styles.alert}`}
        classes={{
          paper: styles.alert_wrap,
        }}
      >
        <div className={`${styles.alert_box}`}>
          <div className={`${styles.alert_content}`}>
            <h2 className={`${styles.alert_title}`}>{<>{title}</>}</h2>
            <p className={`${styles.alert_desc}`}>{<>{desc}</>}</p>
          </div>
          {button && <div className={`${styles.alert_btn}`}>{button}</div>}
        </div>        
      </Dialog>
    </div>
  );
}

export default MuiAlert;
