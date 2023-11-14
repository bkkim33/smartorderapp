import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import FileUpload from "../../../components/FileUpload";
import Radio from "../../../components/Radio";
import FormGroup from "../../../components/FormGroup";

//mui table import
import MuiAlert from "../../../components/MuiAlert";

  function NoticeRegistrationPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">공지사항 등록</h1>
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
              />
            </td>
          </tr>
          <tr>
            <th className="required">내용입력</th>
            <td>
              <div className="admin_editorarea mb_8">에디터 사용영역 입니다.</div>
            </td>
          </tr>
          <tr>
            <th>이미지 등록</th>
            <td>
              <FileUpload onChange={() => {}} />
            </td>
          </tr>
        </Table>
        <div className="align end mt_20 gap_8">
          <Button onClick={() => {}} size="xlarge" line>
            취소
          </Button>
          <Button onClick={handleOpen} size="xlarge" border>
            저장
          </Button>
        </div>
      </ContentBox>
        <MuiAlert
          open={open}
          onClose={handleClose}
          title={
            <>
               수정된 내용을 <br/> 저장 하시겠습니까?
            </>
          }
          button={
            <>
              <Button onClick={handleClose} line>아니요</Button>
              <Button onClick={() => { }} border>네</Button>
            </>
          }
        >
        </MuiAlert>
    </Layout>
  );
}

export default NoticeRegistrationPage;
