import React from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

function AccountModify() {
  
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">계정 생성</h1>
      </div>
      <ContentBox>
        <Table colgroup={<><col width="20%" /><col /></>}>
          <tr>
            <th className="required">소속</th>
            <td>
              <p className="body0 color_t_99">클라우드 카페</p>
            </td>
          </tr>
          <tr>
            <th className="required">관리자명</th>
            <td>
              <p className="body0 color_t_99">홍길동</p>
            </td>
          </tr>
          <tr>
            <th className="required">ID</th>
            <td>
              <p className="body0 color_t_99">admin01</p>
            </td>
          </tr>
          <tr>
            <th className="required">비밀번호</th>
            <td>
              <Input
                onClick={() => { }}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                defaultValue="1234567890"
                disabled
              />
            </td>
          </tr>          
          <tr>
            <th className="required">어드민 권한</th>
            <td>
              <Select
                placeholder="선택"
                defaultValue={0}
                options={[
                  {
                    label: '카페서비스 관리자',
                    value: '카페서비스 관리자'
                  },
                  {
                    label: '매장 관리자',
                    value: '매장 관리자'
                  }
                  ,
                  {
                    label: '어드민 관리자',
                    value: '어드민 관리자'
                  }
                ]}
              />
            </td>
          </tr>
        </Table>
        <div className="align mt_20">
          <div className="rgt gap_10">
            <Button
              onClick={() => { }}
              round
              size="medium"      
              line  
            >
              계정 삭제
            </Button>
            <Button
              onClick={() => { }}
              round
              size="medium"
              btntype="gray"
            >
              취소
            </Button>
            <Button
              onClick={() => { }}
              round
              size="medium"
            >
              저장
            </Button>
          </div>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default AccountModify;
