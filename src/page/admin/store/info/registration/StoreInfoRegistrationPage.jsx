import React, { useState } from "react";
import Layout from '../../../../../layout/DefaultLayout'
import ContentBox from "../../../../../layout/ContentBox";
import Button from "../../../../../components/Button";
import StoreInfoTabPage from "./StoreInfoTabPage"; 
import PickupMethodTabPage from "./PickupMethodTabPage"
import ProductDisplayTabPage from "./ProductDisplayTabPage"
import SalesStatusTabPage from "./SalesStatusTabPage"

function StoreInfoRegistrationPage() {

  const [activeTab, setActiveTab] = useState("storeInfo");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">매장정보 등록</h1>
      </div>
      <hr className="primary" />
      {/* <ContentBox> */}
        <div className="tabbox align start pt_20">
        <Button onClick={() => handleTabChange("storeInfo")} tabdefault active={activeTab === "storeInfo"}>
          매장정보
        </Button>
        <Button onClick={() => handleTabChange("pickupMethod")} active={activeTab === "pickupMethod"}>
          수령방법
        </Button>
        <Button onClick={() => handleTabChange("productDisplay")} active={activeTab === "productDisplay"}>
          상품전시
        </Button>
        <Button onClick={() => handleTabChange("salesStatus")} active={activeTab === "salesStatus"}>
          판매상태
        </Button>
        </div>
        {activeTab === "storeInfo" && <StoreInfoTabPage />}
        {activeTab === "pickupMethod" && <PickupMethodTabPage />} 
        {activeTab === "productDisplay" && <ProductDisplayTabPage />}
        {activeTab === "salesStatus" && <SalesStatusTabPage />} 
      {/* </ContentBox> */}
    </Layout>
  );
}

export default StoreInfoRegistrationPage;
