/** @jsxImportSource @emotion/react */

import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/components/tooltip.module.scss";
import { Icons } from "./Icon";

MuiTooltip.propTypes = {
  // children: PropTypes.node.isRequired,
  placements: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "top",
    "top-start",
    "top-end",
  ]),
  iconSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  // onClick: PropTypes.func,
  // name: PropTypes.string,
  // title: PropTypes.string.isRequired,
  // type: PropTypes.string,
  // value: PropTypes.number,
  // disabled: PropTypes.bool,
};

// 기본 상태가 필요시에만 사용됨
MuiTooltip.defaultProps = {
  // children: "text text text text text text text",
  placements: "bottom",
  iconSize: {
    width: 20,
    height: 20,
    fill: "#3A3A3A",
  },
  // onClick: () => {},
  // type: "text",
  // value: 0,
  // name: "",
  // title: "상품 개수",
  // disabled: false,
};

export function MuiTooltip({ children, ...others }) {
  const { globalClass, placements, iconSize } = others;

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const icon = { ...iconSize };

  return (
    <>
      <div
        className={`${styles.tooltip} ${globalClass}`}
        onMouseEnter={handleTooltipOpen}
        onMouseLeave={handleTooltipClose}
      >
        <Tooltip
          classes={{
            popper: styles.tooltip_wrap,
            tooltip: styles.tooltip_con,
            arrow: styles.tooltip_arrow,
          }}
          title={<>{children}</>}
          open={open}
          placement={placements || "bottom"}
          arrow
        >
          <button>
            <Icons.Question width={icon.width} height={icon.height} fill={icon.fill} />
          </button>
        </Tooltip>
      </div>

      {/* <div className={`${styles.tooltip}`}>
        <div className={`${styles.tooltip_box} ${show ? styles.show : ""}`}>
          {children}
        </div>
      </div> */}
    </>
  );
}

export default MuiTooltip;
