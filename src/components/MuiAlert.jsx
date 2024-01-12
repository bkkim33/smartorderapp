/** @jsxImportSource @emotion/react */

import React from "react";
import PropTypes from "prop-types";
import Dialog from '@mui/material/Dialog';
import styles from "../styles/components/muialert.module.scss";
import { Icons } from "./Icon";

MuiAlert.propTypes = {
  type: PropTypes.oneOf(["","admin","kds"]),
  iconColor: PropTypes.oneOf(["","red"]),
};

MuiAlert.defaultProps = {
  type: "",
  iconColor: "",
};

export function MuiAlert({ open, onClose, title, button, desc, ...others }) {
  const { type, iconColor, minWidth } = others;
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={`${styles.alert} ${styles[type]} ${minWidth ? styles.minwidth : ""}`}
        classes={{
          paper: styles.alert_wrap,          
        }}
      >
        <div className={`${styles.alert_box}`}>
          <div className={`${styles.alert_content}`}>
            {type === "admin" && iconColor !== "red" &&(
              <Icons.AlertIcon></Icons.AlertIcon>
            )}
            {type === "admin" && iconColor === "red" && (
              <Icons.AlertIcon fill="var(--red)"></Icons.AlertIcon>
            )}
            {type === "kds" && iconColor !== "red" && (
              <Icons.AlertIcon width="80px" height="80px"></Icons.AlertIcon>
            )}
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
