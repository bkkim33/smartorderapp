import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/formgroup.module.scss";

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  globalClass: PropTypes.string,
};

// 기본 상태가 필요시에만 사용됨
FormGroup.defaultProps = {
  children: "form 요소 그룹",
  vertical: false,
};

export function FormGroup({ children, ...others }) {
  const { vertical, globalClass } = others;
  return (
    <div
      className={`${styles.group} ${
        vertical ? styles.vertical : ""
      } ${globalClass || ''}`}
    >
      {children}
    </div>
  );
}

export default FormGroup;