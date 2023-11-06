import React, { useState } from "react";
import RS, { components } from "react-select";
import PropTypes from "prop-types";

Select.propTypes = {
  // children: PropTypes.node.isRequired,
  round: PropTypes.oneOf(["app", "line", "round", "allround", ""]),
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

const Input = (props) => (
  <components.Input {...props} readOnly={props.selectProps.isReadOnly} />
);

export function Select({ options, ...others }) {
  const { round, width, placeholder, disabled, multi, defaultValue } = others;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div
      style={{
        minWidth: width ? width : "100%",
        // width: "max-content",
      }}
    >
      <RS
        unstyled
        components={{ Input }}
        isSearchable
        isMulti={multi}
        className={`${"select"} ${round || ""}`}
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={options[defaultValue] || selectedOption}
        onChange={setSelectedOption}
        options={options}
        isReadOnly={true}
        isDisabled={disabled}
      />
    </div>
  );
}

export default Select;