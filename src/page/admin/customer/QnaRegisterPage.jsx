import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import FileUpload from "../../../components/FileUpload";
import Radio from "../../../components/Radio";
import FormGroup from "../../../components/FormGroup";
import MuiAlert from "../../../components/MuiAlert";
// import Editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function QnaRegistrationPage() {
  const navigate = useNavigate();
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
        <h1 className="headline2">자주하는 질문 등록</h1>
      </div>
      <ContentBox>
        <Table
          colgroup={
            <>
              <col width="10%" />
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
                <Radio
                  name="contact1"
                  id="radio5"
                  value="exposure"
                  defaultChecked
                >
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
              <Input onClick={() => {}} placeholder="제목을 입력해 주세요." />
            </td>
          </tr>
          <tr>
            <th className="required">내용입력</th>
            <td>
              <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>이미지 등록</th>
            <td>
              <FileUpload onChange={() => {}} />
            </td>
          </tr>
        </Table>
        <div className="align center gap_10 mt_30">
          <Button
            onClick={() => {
              navigate("/admin/customer/qna/");
            }}
            type="pc"
            color="gray"
            line
            size="small"
          >
            취소
          </Button>
          <Button type="pc" onClick={handleOpen} color="black" size="small">
            저장
          </Button>
        </div>
      </ContentBox>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        title={<>저장하시겠습니까?</>}
        button={
          <>
            <Button
              onClick={handleClose}
              type="pc"
              color="gray"
              line
              size="small"
            >
              아니오
            </Button>
            <Button
              onClick={() => navigate("/admin/customer/qna")}
              type="pc"
              color="black"
              size="small"
            >
              네
            </Button>
          </>
        }
      />
    </Layout>
  );
}

export default QnaRegistrationPage;