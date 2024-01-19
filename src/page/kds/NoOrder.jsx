import React from "react";
import KDSContentBox from "../../layout/KDSContentBox";
import { Icons } from "../../components/Icon";

function NoOrder({ data }) {
  return (
    <KDSContentBox>
      <div className="kds_nodata">
        <div>
          <Icons.KDSNodata />
          <p className="mt_35">NO ORDER</p>
        </div>
      </div>
    </KDSContentBox>
  );
}

export default NoOrder;