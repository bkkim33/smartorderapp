import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../../layout/DefaultLayout";
import ContentBox from "../../../../layout/ContentBox";
import Button from "../../../../components/Button";
import Tabs from "../../../../components/Tabs";
import StoreInfo from "./StoreInfo";
import PickupMethod from "./PickupMethod";
import SalesStatus from "./SalesStatus";
import Modal from "./AdrresModal";
import MuiAlert from "../../../../components/MuiAlert";

import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";

function StoreModifyPage() {
  const navigate = useNavigate();

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
        <h1 className="headline2">매장정보 상세</h1>
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
            <th className="">가맹점명</th>
            <td>
              <Input
                type="text"
                placeholder="가맹점명을 입력해주세요."
                width="300px"
                defaultValue="클라우드카페"
                disabled
              />
            </td>
            <th className="">노출여부</th>
            <td>
              <FormGroup>
                <Radio
                  name="contact1"
                  id="radio5"
                  value="exposure"
                  defaultChecked
                  disabled
                >
                  노출
                </Radio>
                <Radio disabled name="contact1" id="radio6" value="nonexposed">
                  노출안함
                </Radio>
              </FormGroup>
            </td>
          </tr>
          <tr>
            <th className="">사업자번호</th>
            <td>
              <div className="align start">
                <Input
                  type="text"
                  placeholder="사업자번호를 입력해주세요."
                  numericOnly={true}
                  width="300px"
                  defaultValue="02-1234-1234"
                  disabled
                />
                {/* <span className="required_lft red ml_10">
                  숫자만 입력 가능합니다.
                </span> */}
              </div>
            </td>
            <th className="">대표자명</th>
            <td>
              <Input
                type="text"
                placeholder="대표자명을 입력해주세요."
                width="300px"
                defaultValue="홍길동"
                disabled
              />
            </td>
          </tr>
          <tr>
            <th className="">연락처</th>
            <td>
              <div className="align start">
                <Input
                  onClick={certifications}
                  certification={certification}
                  placeholder="핸드폰 번호 입력"
                  phone="number"
                  maxLength={13}
                  width="300px"
                  defaultValue="010-1234-1234"
                  disabled
                />
                {/* <span className="required_lft red ml_10">
                  숫자만 입력 가능합니다.
                </span> */}
              </div>
            </td>
            <th className="">주소</th>
            <td>
              <div className="align start">
                <Input
                  type="text"
                  placeholder="주소를 입력해주세요."
                  width="300px"
                  defaultValue="서울특별시 강남구 논현로85길 46"
                  disabled
                />
                <Button
                  onClick={handleOpen2}
                  type="pc"
                  size="xsmall"
                  globalClass="ml_10"
                  color="point"
                  disabled
                >
                  찾기
                </Button>
              </div>
            </td>
          </tr>
        </Table>
        <div className="mt_30">
          <Tabs
            type="admin"
            globalClass="admin_tab"
            TabsData={[
              {
                id: 1,
                title: "매장운영일시",
                defaultActive: true,
                content: (
                  <>
                    <StoreInfo />
                  </>
                ),
              },
              {
                id: 2,
                title: "상품수령방법",
                content: (
                  <>
                    <PickupMethod />
                  </>
                ),
              },
              {
                id: 3,
                title: "상품전시관리",
                content: (
                  <>
                    <SalesStatus />
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="align center gap_10 mt_30">
          <Button
            onClick={() => handleOpenAlert(2)}
            type="pc"
            color="gray"
            line
            size="small"
          >
            목록
          </Button>
          <Button
            onClick={() => handleOpenAlert(1)}
            type="pc"
            color="black"
            size="small"
          >
            저장
          </Button>
        </div>
      </ContentBox>
      <Modal open={open2} handleClose={handleClose2} />
      <MuiAlert
        open={openAlert1}
        onClose={() => handleCloseAlert(1)}
        type="admin"
        title={
          <>
            입력한 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button
              onClick={() => handleCloseAlert(1)}
              type="pc"
              color="gray"
              line
              size="small"
            >
              취소
            </Button>
            <Button
              onClick={() => navigate("/admin/store")}
              type="pc"
              color="black"
              size="small"
            >
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={openAlert2}
        onClose={() => handleCloseAlert(2)}
        type="admin"
        iconColor="red"
        title={<>목록으로 이동하시겠습니까?</>}
        desc={<>현제 작성된 내용이 있으면 저장되지 않습니다.</>}
        button={
          <>
            <Button
              onClick={() => handleCloseAlert(2)}
              type="pc"
              color="gray"
              line
              size="small"
            >
              취소
            </Button>
            <Button
              onClick={() => navigate("/admin/store")}
              type="pc"
              color="black"
              size="small"
            >
              확인
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default StoreModifyPage;
