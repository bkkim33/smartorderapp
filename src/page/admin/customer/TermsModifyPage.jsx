import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/DefaultLayout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Radio from "../../../components/Radio";
import FormGroup from "../../../components/FormGroup";
import MuiAlert from "../../../components/MuiAlert";
//import Editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function TermsModifyPage() {
  const [startDate, setStartDate] = useState();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [setStartDate] = useState(null);

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">이용약관 수정</h1>
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
            <th className="required">시행 일자</th>
            <td>
              <div className="date_picker_box">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  className={"date_picker"}
                  onChange={(date) => setStartDate(date)}
                  isClearable={true}
                  placeholderText="날짜를 선택해 주세요."
                />
              </div>

              {/* <Input
                    type="date"
                    onClick={() => {}}
                    placeholder="종료 날짜"
                    onChange={(e) => setStartDate(e.target.value)}
                  /> */}
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
        </Table>
        <div className="align center gap_10 mt_30">
          <Button
            onClick={() => {
              navigate("/admin/customer/terms/");
            }}
            color="gray"
            line
            size="small"
            type="pc"
          >
            취소
          </Button>
          <Button onClick={handleOpen} color="black" size="small" type="pc">
            저장
          </Button>
        </div>
      </ContentBox>
      <MuiAlert
        open={open}
        onClose={handleClose}
        type="admin"
        title={
          <>
            수정된 내용을 <br /> 저장 하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={handleClose} color="gray" line size="small">
              아니오
            </Button>
            <Button
              onClick={() => {
                navigate("/admin/customer/terms");
              }}
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

export default TermsModifyPage;