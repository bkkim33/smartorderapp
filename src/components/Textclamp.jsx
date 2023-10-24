import React from 'react';
import PropTypes from "prop-types";
import styles from "../styles/components/textclamp.module.scss";

Textclamp.propTypes = {
  width: PropTypes.string,
  text: PropTypes.string,
};

Textclamp.defaultProps = {
  width: "100px",
  text: "말줄임ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ요",
};

export function Textclamp({ ...others }) {
  const { width, text } = others;
  return (
    <div className={styles.clamp} style={{ width }}>
      {text}
    </div>
  );
}

export default Textclamp;




