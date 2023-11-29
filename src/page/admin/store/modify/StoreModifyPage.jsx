import React, { useState } from "react";
import Layout from '../../../../layout/DefaultLayout'
import Button from "../../../../components/Button";
import StoreInfo from "./StoreInfo"; 
import PickupMethod from "./PickupMethod";
import ProductDisplay from "./ProductDisplay";
import SalesStatus from "./SalesStatus";

function StoreModifyPage() {
  const [activeTab, setActiveTab] = useState("storeInfo");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">매장정보 상세</h1>
      </div>
      <hr className="primary" />
      {/* <ContentBox> */}
      <div className="tabbox align mb_15">
        <Button
          onClick={() => handleTabChange("storeInfo")}
          tabdefault
          active={activeTab === "storeInfo"}
        >
          매장정보
        </Button>
        <Button
          onClick={() => handleTabChange("pickupMethod")}
          active={activeTab === "pickupMethod"}
        >
          수령방법
        </Button>
        <Button
          onClick={() => handleTabChange("productDisplay")}
          active={activeTab === "productDisplay"}
        >
          상품전시
        </Button>
        <Button
          onClick={() => handleTabChange("salesStatus")}
          active={activeTab === "salesStatus"}
        >
          판매상태
        </Button>
      </div>
      {activeTab === "storeInfo" && <StoreInfo />}
      {activeTab === "pickupMethod" && <PickupMethod />}
      {activeTab === "productDisplay" && <ProductDisplay />}
      {activeTab === "salesStatus" && <SalesStatus />}
      {/* </ContentBox> */}
    </Layout>
  );
}

export default StoreModifyPage;
