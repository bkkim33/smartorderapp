/** @jsxImportSource @emotion/react */

import React from "react";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import PropTypes from "prop-types";
import styles from "../styles/components/muipage.module.scss";

MuiPage.propTypes = {
  shape: PropTypes.oneOf(["circular", "rounded"]),
  disabled: PropTypes.bool,
};

MuiPage.defaultProps = {
  shape: "rounded",
  disabled: false,
};

export function MuiPage({ ...others }) {
  const { shape, disabled, globalClass } = others;
  return (
    <div className={`${styles.pagenation} ${globalClass}`}>
      <Stack 
        alignItems="center"
        textAlign="center"
      >
        <Pagination
          count={10}
          shape={shape}
          disabled={disabled}
          showFirstButton
          showLastButton
          size="large"
          renderItem={(item) => (
            <PaginationItem {...item} disableRipple />
          )}
        />
      </Stack>
    </div>
    
  );
}

export default MuiPage;