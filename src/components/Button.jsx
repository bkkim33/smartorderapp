import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/button.module.scss";
import { Icons } from "./Icon";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  iconStyle: PropTypes.shape({
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  size: PropTypes.oneOf([
    "full",
    "xlarge",
    "medium",
    "small",
    "icon_m",
    "icon_s",
    "",
  ]),
  round: PropTypes.bool,
  line: PropTypes.bool,
  disabled: PropTypes.bool,
  classname: PropTypes.string,
  onClick: PropTypes.func,
};

// 기본 상태가 필요시에만 사용됨
Button.defaultProps = {
  children: "button",
  size: "",
  round: false,
  line: false,
  disabled: false,
  onClick: {},
  iconStyle: {
    fill:'var(--cff)',
    width: 20,
    height: 20,
  },
  icon: '',
};

export function Button({ children, onClick, ...others }) {
  const { size, round, line, disabled, classname, iconStyle, icon } = others;
  const IconComponent = icon ? Icons[icon] : null;
  const mergedIconStyle = { ...iconStyle };
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${round ? styles.round : ""} ${line ? styles.line : ""} ${classname ? classname : ""} `}
      disabled={disabled}
      onClick={onClick}
    >
      {IconComponent && (
        <i>
          <IconComponent
            fill={mergedIconStyle.fill}
            width={mergedIconStyle.width}
            height={mergedIconStyle.height}
          />
        </i>
      )}
      {(size !== "icon_m" && size !== "icon_s") && <>{children}</>}
    </button>
  );
}

export default Button;