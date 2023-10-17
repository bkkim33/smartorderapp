import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/table.module.scss";

Table.propTypes = {
    children: PropTypes.node,
    globalClass: PropTypes.string,
};

Table.defaultProps = {
    children: "테이블 기본 내용",
    globalClass: "",
};

export function Table({ children, ...others }) {
    const { colgroup, globalClass } = others;
    return (
        <div className={` ${styles.tablebox} ${globalClass || ""} `}>
            <table>
                <colgroup>
                    {colgroup}
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{children}</td>
                    </tr>
                    <tr>
                        <th scope="row">System</th>
                        <td>{children}</td>
                    </tr>
                    <tr>
                        <th scope="row">ID</th>
                        <td>{children}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;