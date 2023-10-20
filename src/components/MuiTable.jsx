/** @jsxImportSource @emotion/react */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import { useState } from "react";
// import PropTypes from "prop-types";
import styles from "../styles/components/muitable.module.scss";
// import { Icons } from "./Icon";


MuiTable.propTypes = {

};

// 기본 상태가 필요시에만 사용됨
MuiTable.defaultProps = {

};


export function MuiTable({ cols, columns, rows }) {
  return (
    <div className={`${styles.tbl}`}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <colgroup>
            {cols.map((col, index) => (
              <col key={index} width={col.colWidth} />
            ))}
          </colgroup>
          <TableHead>
            <TableRow>
              {columns.map((head) => (
                <TableCell key={head.headerName}>{head.field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {row.rowdata.map((rowdata, index) =>
                  rowdata.fnc === true ? (
                    <TableCell
                      className={`${styles[rowdata.align]}`}
                      key={index}
                    >
                      <button>{rowdata.data}</button>
                    </TableCell>
                  ) : (
                    <TableCell
                      className={`${styles[rowdata.align]}`}
                      key={index}
                    >
                      {rowdata.data}
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MuiTable;
