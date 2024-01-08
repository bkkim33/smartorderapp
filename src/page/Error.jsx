import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/error.module.scss";
import {Icons} from "../components/Icon"
import Button from "../components/Button";

export function Error({title, txt, btn, type}) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.error_wrap}`}>
      <div className={`${styles.error_box}`}>
        {type === "404" && <Icons.Error />}
        {type === "403" && <Icons.ErrorWarning />}
        {type === "503" && <Icons.ErrorInfo />}
        <h1 className={`${styles.error_title} ${"mt_50"}`}>{title}</h1>
        <p className={`${styles.error_txt} ${"mt_30 pb_100"}`}>{txt}</p>
        {btn && (
          <Button onClick={() => navigate("/main")} color="point" size="xlarge">
            홈으로 돌아가기
          </Button>
        )}
      </div>
    </div>
  );
}

export default Error;