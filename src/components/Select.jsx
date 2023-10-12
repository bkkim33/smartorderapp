import React, { useState } from "react";
import RS from "react-select";
import PropTypes from "prop-types";
import { isDisabled } from "@testing-library/user-event/dist/utils";

Select.propTypes = {
  // children: PropTypes.node.isRequired,
  round: PropTypes.oneOf(["round", "allround", ""]),
  options: PropTypes.array,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
};

// 기본 상태가 필요시에만 사용됨
Select.defaultProps = {
  // children: "from 요소 그룹",
  round: "",
  options: [
    {
      value: "chocolate",
      label: "Chocolated",
    },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla1", label: "Vanilla" },
    // { value: "vanilla2", label: "Vanilla" },
    // { value: "vanilla3", label: "Vanilla" },
    // { value: "vanilla4", label: "Vanilla" },
    // { value: "vanilla5", label: "Vanilla" },
    // { value: "vanilla6", label: "Vanilla" },
    // { value: "vanilla7", label: "Vanilla" },
    // { value: "vanilla8", label: "Vanilla" },
    // { value: "vanilla9", label: "Vanilla" },
  ],
  width: "",
  placeholder: "옵션",
  disabled: false,
  multi: false,
};

export function Select({ options, ...others }) {
  const { round, width, placeholder, disabled, multi } = others;
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
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isDisabled={disabled}
      />
    </div>
  );
}

export default Select;