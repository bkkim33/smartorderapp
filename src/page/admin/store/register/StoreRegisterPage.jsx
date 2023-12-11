import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../../layout/DefaultLayout'
import ContentBox from "../../../../layout/ContentBox";
import Button from "../../../../components/Button";
import StoreInfo from "./StoreInfo"; 
import PickupMethod from "./PickupMethod";
import ProductDisplay from "./ProductDisplay";
import SalesStatus from "./SalesStatus";

import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";
import ContactInfo from "../../../../components/ContactInfo";
import Select from "../../../../components/Select";

function StoreRegisterPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("storeInfo");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [openAlert1, setOpenAlert1] = useState(false);
  const [openAlert2, setOpenAlert2] = useState(false);

  const handleOpenAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(true);
    } else if (alertNumber === 2) {
      setOpenAlert2(true);
    }
  };
  const handleCloseAlert = (alertNumber) => {
    if (alertNumber === 1) {
      setOpenAlert1(false);
    } else if (alertNumber === 2) {
      setOpenAlert2(false);
    }
  };

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [certification, setCertification] = useState(false);
  const certifications = () => {
    setCertification(true);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">매장정보 등록</h1>
      </div>
      <ContentBox>
        <Table
          globalClass="flex1"
          colgroup={
            <>
              <col width="10%" />
              <col width="auto" />
              <col width="10%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th className="required">가맹점명</th>
            <td>
              <Input
                type="text"
                placeholder="가맹점명을 입력해주세요."
                width="300px"
              />
            </td>
            <th className="required">노출여부</th>
            <td>
              <FormGroup>
                <Radio
                  name="contact1"
                  id="radio5"
                  value="exposure"
                  defaultChecked
                >
                  노출
                </Radio>
                <Radio name="contact1" id="radio6" value="nonexposed">
                  노출안함
                </Radio>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <th className="required">사업자번호</th>
            <td>
              <div className="align start">
                <Input
                  type="text"
                  placeholder="사업자번호를 입력해주세요."
                  numericOnly={true}
                  width="300px"
                />
                <span className="required_lft red ml_10">
                  숫자만 입력 가능합니다.
                </span>
              </div>
            </td>
            <th className="required">대표자명</th>
            <td>
              <Input
                type="text"
                placeholder="대표자명을 입력해주세요."
                width="300px"
              />
            </td>
          </tr>
          <tr>
            <th className="required">연락처</th>
            <td>
              <div className="align start">
                <Input
                  onClick={certifications}
                  certification={certification}
                  placeholder="핸드폰 번호 입력"
                  phone="number"
                  maxLength={13}
                  width="300px"
                />
                <span className="required_lft red ml_10">
                  숫자만 입력 가능합니다.
                </span>
              </div>
            </td>
            <th className="required">주소</th>
            <td>
              <div className="align start">
                <Input
                  type="text"
                  placeholder="주소를 입력해주세요."
                  width="300px"
                />
                <Button
                  onClick={handleOpen2}
                  type="pc"
                  size="xsmall"
                  globalClass="ml_10"
                  line
                  color="gray"
                >
                  찾기
                </Button>
              </div>
            </td>
          </tr>
        </Table>
        <div className="tabbox align mt_30">
          <Button
            onClick={() => handleTabChange("storeInfo")}
            tabdefault
            active={activeTab === "storeInfo"}
          >
            매장운영일시
          </Button>
          <Button
            onClick={() => handleTabChange("pickupMethod")}
            active={activeTab === "pickupMethod"}
          >
            상품수령방법
          </Button>
          {/* <Button
            onClick={() => handleTabChange("productDisplay")}
            active={activeTab === "productDisplay"}
          >
            상품전시
          </Button> */}
          <Button
            onClick={() => handleTabChange("salesStatus")}
            active={activeTab === "salesStatus"}
          >
            상품전시관리
          </Button>
        </div>
        {activeTab === "storeInfo" && <StoreInfo />}
        {activeTab === "pickupMethod" && <PickupMethod />}
        {/* {activeTab === "productDisplay" && <ProductDisplay />} */}
        {activeTab === "salesStatus" && <SalesStatus />}
      </ContentBox>
    </Layout>
  );
}

export default StoreRegisterPage;
