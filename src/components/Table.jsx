import React from 'react';
import PropTypes from "prop-types";

Table.propTypes = {
  globalClass: PropTypes.string,
};

Table.defaultProps = {
  globalClass: "",
};

export function Table({ children, ...others }) {
  const { colgroup, globalClass } = others;
  return (
    <div className={` ${"tablebox"} ${globalClass || ""} `}>
      <table>
        <colgroup>
          {colgroup}
        </colgroup>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;