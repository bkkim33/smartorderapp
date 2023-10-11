import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/fromgroup.module.scss";

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
};

// 기본 상태가 필요시에만 사용됨
RadioGroup.defaultProps = {
  children: "from 요소 그룹",
  vertical: false,
};

export function RadioGroup({ children, ...others }) {
  const { vertical } = others;
  return (
    <div className={`${styles.group} ${vertical ? styles.vertical : ""}`}>
      {children}
    </div>
  );
}

export default RadioGroup;