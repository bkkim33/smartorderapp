import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/nodata.module.scss';
import { Icons } from "./Icon";

NoData.propTypes = {
  txt: PropTypes.string,
};

NoData.defaultProps = {
  txt: "즐겨찾는 메뉴가 없습니다.",
};

export function NoData({txt, globalClass}) {
  return (
    <div className={`${styles.nodata} ${globalClass || ""}`}>
      <i>
        <Icons.Nodata width={83} height={92} />
      </i>
      <p className="mt_10">{txt}</p>
    </div>
  );
};

export default NoData;

