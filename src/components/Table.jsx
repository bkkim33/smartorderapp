import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/table.module.scss";

Table.propTypes = {
  globalClass: PropTypes.string,
};

Table.defaultProps = {
  globalClass: "",
};

export function Table({ children, ...others }) {
  const { colgroup, globalClass, search } = others;
  return (
    <div className={` ${"tablebox"} ${search ? "search" : ""} ${globalClass || ""} `}>
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