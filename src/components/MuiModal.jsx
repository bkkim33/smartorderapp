/** @jsxImportSource @emotion/react */
import React from "react";
import Modal from "@mui/material/Modal";
import styles from "../styles/components/muimodal.module.scss";

MuiModal.propTypes = {};

MuiModal.defaultProps = {};

export function MuiModal({
  open,
  onClose,
  header,
  button,
  footer,
  children,
  minSize,
  midSize,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`${styles.modal} ${minSize ? styles.minsize : ""} ${
          midSize ? styles.midsize : ""
        }`}
      >
        <div className={`${styles.modal_box}`}>
          <div className={`${styles.modal_header}`}>{header}</div>
          <div className={`${styles.modal_content}`}>{children}</div>
          {button && <div className={`${styles.modal_btn}`}>{button}</div>}
          {footer && <div className={`${styles.modal_footer}`}>{footer}</div>}
        </div>
      </Modal>
    </div>
  );
}

export default MuiModal;
