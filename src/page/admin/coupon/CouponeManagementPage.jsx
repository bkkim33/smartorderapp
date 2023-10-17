import React from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

function MainPage() {
  return (
    <Layout>
      <div className="align mb_20">
        <div className="lft">
          <h1>쿠폰관리</h1>
        </div>
        <div className="rgt">
          <Button onClick={() => {}} round>
            쿠폰 생성
          </Button>
        </div>
      </div>
      <ContentBox>
        <div className="align">
          <div className="lft">

          </div>
          <div className="rgt">
            <Input
              onClick={() => {}}
              placeholder="쿠폰명을 입력해주세요"
              shape="round"
              type="search"
            />
          </div>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default MainPage;
