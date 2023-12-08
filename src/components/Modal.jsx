import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/modal.module.scss";
import { Button } from "./Button";

Modal.propTypes = {
    modalsize: PropTypes.oneOf(["", "large"]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

Modal.defaultProps = {
  modalsize: "",
  title: "타이틀",
  subtitle: "타이틀 보조 텍스트",
};


export function Modal({ onClick, onClose, ...others }) {
    const { mobile, modalsize, title, subtitle, } =  others;
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };


  console.log(mobile);

    return (
      <>
        <Button color="point" onClick={() => {handleOpenModal(true)}}>
            button
        </Button>
        {isModalOpen && (
        <div className={`${styles.modalbox} ${mobile ? styles.mobile : ""}`}
        // mobile={mobile}
        >
          <div className={`
            ${styles.modal} 
            ${styles[modalsize]}
            `}>
              <div className={`${styles.modal_content}`}>
              <div className={`${styles.top}`}>
                <div className={`${styles.title}`}>{title}</div>
                  <button 
                      className={`${styles.closebtn}`}
                      onClick={() => {
                      setModalOpen(false);
                      // onClose();
                  }}>x</button>
              </div>
              {subtitle && <div className={`${styles.subtitle}`}>{subtitle}</div>}
              <div className={`${styles.detail}`}>임시 컨텐츠 영역<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              </div>
              </div>
              <div className={`${styles.modal_btns}`}>
                  <Button onClick={() => {}} size="full" line>
                      button
                  </Button>
                  <Button onClick={() => {}} size="full">
                      button
                  </Button>
              </div>
            </div>
        </div>
        )}
      </>
    );
  }
  

  
  export default Modal;
  