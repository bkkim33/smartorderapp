import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/button.module.scss";
import { Icons } from "./Icon";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  round: PropTypes.bool,
  line: PropTypes.bool,
  state: PropTypes.bool,
  none: PropTypes.bool,
  disabled: PropTypes.bool,
  btntype: PropTypes.oneOf(["", "change", "gray", "blue", "googlelogin"]),
  size: PropTypes.oneOf([
    "full",
    "xlarge",
    "medium",
    "small",
    "xsmall",
    "icon_m",
    "icon_s",
    "",
  ]),
  icon: PropTypes.string,
  iconposition: PropTypes.oneOf(["right", ""]),
  iconStyle: PropTypes.shape({
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  badge: PropTypes.bool,
  globalClass: PropTypes.string,
  onClick: PropTypes.func,
};

// 기본 상태가 필요시에만 사용됨
Button.defaultProps = {
  children: "button",
  size: "",
  round: false,
  line: false,
  state: false,
  none: false,
  disabled: false,
  onClick: {},
  iconStyle: {
    // fill: "var(--c00)",
    // width: 20,
    // height: 20,
  },
  icon: "",
  globalClass: "",
  btntype: "",
  badge: false,
};

export function Button({ children, onClick, app, btntype, ...others }) {
  const {
    size,
    round,
    line,
    state,
    none,
    disabled,
    globalClass,
    iconStyle,
    icon,
    iconposition,
    badge,
  } = others;
  const IconComponent = icon ? Icons[icon] : null;
  const mergedIconStyle = { ...iconStyle };
  // const appClass = app ? `color-${color}` : ``;
  const appClass = `type-${btntype}`;

  return (
    <button
      className={`
      ${styles.btn} ${styles[size]} ${round ? styles.round : ""} 
      ${line ? styles.line : ""} ${state ? styles.state : ""} 
      ${none ? styles.none : ""} ${globalClass || ""} 
      ${styles[appClass]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {IconComponent && iconposition !== "right" && (
        <i className={`${styles[iconposition]}`}>
          <IconComponent
            fill={mergedIconStyle.fill}
            width={mergedIconStyle.width}
            height={mergedIconStyle.height}
          />
        </i>
      )}
      {size !== "icon_m" && size !== "icon_s" && <span>{children}</span>}
      {IconComponent && iconposition === "right" && (
        <i className={`${styles[iconposition]}`}>
          <IconComponent
            fill={mergedIconStyle.fill}
            width={mergedIconStyle.width}
            height={mergedIconStyle.height}
          />
        </i>
      )}
      {badge === true && (
        <span className={`${styles.badge}`}>12</span>
      )}
    </button>
  );
}

export default Button;