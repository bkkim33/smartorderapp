import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../../styles/components/error.module.scss";
import {Icons} from "../../components/Icon"
import Button from "../../components/Button";

export function KDSError({title, txt, btn}) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.kdserror_wrap}`}>
      <div className={`${styles.kdserror_box}`}>
        <Icons.KDSError />
        <h1 className={`${styles.kdserror_title} ${"mt_80"}`}>{title}</h1>
        <p className={`${styles.kdserror_txt} ${"mt_35 pb_60"}`}>{txt}</p>
        {btn && (
          <button onClick={() => navigate("/kds")} className={`${styles.kdserror_btn}`}>
            <span>새로고침</span>
          </button>
         
        )}
      </div>
    </div>
  );
}

export default KDSError;