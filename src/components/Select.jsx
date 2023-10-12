import React, { useState } from "react";
import RS from "react-select";
import PropTypes from "prop-types";

Select.propTypes = {
  // children: PropTypes.node.isRequired,
  round: PropTypes.oneOf(["round", "allround", ""]),
  // options: PropTypes.node,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  // defaultValue: PropTypes.number,
};

// 기본 상태가 필요시에만 사용됨
Select.defaultProps = {
  // children: "from 요소 그룹",
  round: "",
  options: [
    
  ],
  width: "",
  placeholder: "옵션",
  disabled: false,
  multi: false,
  defaultValue: null,
};

export function Select({ options, ...others }) {
  const { round, width, placeholder, disabled, multi, defaultValue } = others;
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div
      style={{
        width: width ? width : "100%",
        // width: "max-content",
      }}
    >
      <RS
        unstyled
        isSearchable
        isMulti={multi}
        className={`${"select"} ${round || ""}`}
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={defaultValue ? options[defaultValue] : selectedOption}
        onChange={setSelectedOption}
        options={options}
        isDisabled={disabled}
      />
    </div>
  );
}

export default Select;