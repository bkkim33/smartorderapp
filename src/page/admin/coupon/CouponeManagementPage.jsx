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
          <h1 className="headline2">쿠폰관리</h1>
        </div>
        <div className="rgt">
          <Button onClick={() => {}} round>
            쿠폰 생성
          </Button>
        </div>
      </div>
      <ContentBox>
        <div className="align mb_20">
          <div className="lft">
            <p className="body2">
              전체
              <em className="ml_5 primary-b bold600">46</em>
            </p>
          </div>
          <div className="rgt">
            <Input
              onClick={() => {}}
              placeholder="쿠폰명을 입력해주세요"
              shape="round"
              type="search"
              width="300px"
            />
          </div>
        </div>
        <div className="tbl">
          <table>
            <colgroup>
              <col width="6%" />
              <col width="8%" />
              <col width="30%" />
              <col width="auto" />
              <col width="8%" />
              <col width="5%" />
              <col width="5%" />
            </colgroup>
            <thead>
              <tr>
                <th>쿠폰 코드</th>
                <th>유효기한</th>
                <th>쿠폰명</th>
                <th>쿠폰 설명</th>
                <th>발급한 수량</th>
                <th>미리보기</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tc">1084</td>
                <td className="tc">2023.10.17</td>
                <td>테스트 쿠폰</td>
                <td>잘 부탁드립니다.</td>
                <td className="tr">101</td>
                <td className="tc">
                  <button>미리보기</button>
                </td>
                <td className="tc">
                  <button>삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default MainPage;
