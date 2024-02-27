import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/button.module.scss";
import { Icons } from "./Icon";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["", "pc"]),
  round: PropTypes.bool,
  none: PropTypes.bool,
  disabled: PropTypes.bool, 
  line: PropTypes.bool,
  txtColor: PropTypes.oneOf(["", "txtgray", "txtwhite"]),
  color: PropTypes.oneOf(["", "point", "black", "gray", "red", "blue", "trans", "white", ""]),
  size: PropTypes.oneOf(["", "full", "xlarge", "large", "medium", "small", "xsmall", "xxsmall", "icon_l", "icon_m", "icon_s"]),
  icon: PropTypes.string,
  iconposition: PropTypes.oneOf(["", "right"]),
  iconStyle: PropTypes.shape({
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  badge: PropTypes.bool,  
  globalClass: PropTypes.string,
};

Button.defaultProps = {
  children: "button",
  type: "",
  round: false,
  none: false,
  disabled: false,
  line: false,
  txtColor: "",
  color: "",
  size: "",
  icon: "",
  badge: false,
  globalClass: "",
};

export function Button({ children, onClick, ...others }){
  const {
    type,
    round,
    none,
    disabled,
    line,
    txtColor,
    color,
    size,
    iconStyle,
    icon,
    iconposition,
    badge,
    active,    
    globalClass,
  } = others;
  const IconComponent = icon ? Icons[icon] : null;
  const mergedIconStyle = { ...iconStyle };
  // 탭버튼일 때 default 
  const tabdefault = active ? 'active' : '';
  return (
    <button className={` 
        ${styles.btn} 
        ${styles[type]}
        ${round ? styles.round : ""}
        ${none ? styles.none : ""}
        ${line ? styles.line : ""}
        ${styles[txtColor]}
        ${styles[color]}
        ${styles[size]}
        ${tabdefault}        
        ${globalClass || ""}
      `}
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
      {size !== "icon_l" && size !== "icon_m" && size !== "icon_s" && <span>{children}</span>}
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
        <span className={`${styles.badge}`}>122</span>
      )}
    </button>
  );
};

export default Button;