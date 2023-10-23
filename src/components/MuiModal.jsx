import React from 'react';
import Modal from "@mui/material/Modal";
// import PropTypes from "prop-types";
import styles from "../styles/components/muimodal.module.scss";
// import { Button } from "./Button";

MuiModal.propTypes = {};

MuiModal.defaultProps = {

};


export function MuiModal({ open, onClose, header, button, children }) {
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={`${styles.modal}`}
        >
          <div className={`${styles.modal_box}`}>
            <div className={`${styles.modal_header} ${"mb_20"}`}>{header}</div>
            <div>{children}</div>
            {button && <div className={`${styles.modal_btn}`}>{button}</div>}
          </div>
        </Modal>
      </div>
    </>
  );
}
  

  
export default MuiModal;
  