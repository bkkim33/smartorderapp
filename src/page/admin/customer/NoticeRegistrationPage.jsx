import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import FileUpload from "../../../components/FileUpload";
import Radio from "../../../components/Radio";
import FormGroup from "../../../components/FormGroup";
import Textarea from "../../../components/Textarea";


function NoticeRegistrationPage() {

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">공지사항 관리</h1>
      </div>
      <hr className="primary" />
      <ContentBox>
        <Table
          colgroup={
            <>
              <col width="15%" />
              <col width="auto" />
            </>
          }
        >
          <tr>
            <th className="required">공개대상</th>
            <td>
            <FormGroup>
              <Radio name="contact0" id="radio1" value="All" defaultChecked>
                전체
              </Radio>
              <Radio name="contact0" id="radio2" value="employees">
                임직원
              </Radio>
              <Radio name="contact0" id="radio3" value="tenantcompany">
                입주사
              </Radio>
              <Radio name="contact0" id="radio4" value="visitor">
                방문객
              </Radio>
            </FormGroup>
            </td>
          </tr>
          <tr>
            <th className="required">노출여부</th>
            <td>
            <FormGroup>
              <Radio name="contact1" id="radio5" value="exposure" defaultChecked>
                노출
              </Radio>
              <Radio name="contact1" id="radio6" value="nonexposed">
                비노출
              </Radio>
            </FormGroup>
            </td>
          </tr>
          <tr>
            <th className="required">제목</th>
            <td>
              <Input
                onClick={() => { }}
                placeholder="제목을 입력해 주세요."
                shape="round"
              />
            </td>
          </tr>
          <tr>
            <th className="required">내용입력</th>
            <td>
              <div className="admin_editorarea mb_8">에디터 사용영역 입니다.</div>
              <Textarea Height={200} />
            </td>
          </tr>
          <tr>
            <th>이미지 등록</th>
            <td>
              <FileUpload onChange={() => {}} />
            </td>
          </tr>
        </Table>
        <div className="align end mt_20">
          <Button onClick={() => {}} size="xlarge" line globalClass="mr_5">
            취소
          </Button>
          <Button onClick={() => { }} size="xlarge">
            저장
          </Button>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default NoticeRegistrationPage;
