import React, { useState } from "react";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import Table from "../../../../../components/Table";
import FormGroup from "../../../../../components/FormGroup";
import Radio from "../../../../../components/Radio";
import ContactInfo from "../../../../../components/ContactInfo";
import Select from "../../../../../components/Select";

//mui table import
import MuiAlert from "../../../../../components/MuiAlert";

function StoreInfoTabPage({  }) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 운영시간
  const days = [
    { value: "mon-fri", label: "월 ~ 금" },
    { value: "mon-sat", label: "월 ~ 토" },
    { value: "mon-sun", label: "월 ~ 일" },
    { value: "sat-sun", label: "토 ~ 일" },
  ];

  const hours = Array.from({ length: 24 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  const minutes = Array.from({ length: 60 }, (_, index) => ({
    value: index.toString().padStart(2, "0"),
    label: index.toString().padStart(2, "0"),
  }));

  return (
    <div className="align column">
      <Table globalClass="flex1"
        colgroup={
          <>
            <col width="15%" />
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
            noSpecialChars={true}
            width="300px"
          />
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
          <th className="required">사업자번호</th>
          <td className="align start">
            <Input
              type="text"
              placeholder="사업자번호를 입력해주세요."
              numericOnly={true}
              width="300px"
            />
            <span className="required_lft red_text ml_10">숫자만 입력 가능합니다.</span>
          </td>
        </tr>
        <tr>
          <th className="required">대표자명</th>
          <td>
          <Input
            type="text"
            placeholder="대표자명을 입력해주세요."
            noSpecialChars={true}
            width="300px"
          />
          </td>
        </tr>
        <tr>
          <th className="required">연락처</th>
          <td className="Phone_number align start">
            <ContactInfo/>
            <span className="required_lft red_text ml_10">숫자만 입력 가능합니다.</span>
          </td>
        </tr>
        <tr>
          <th className="required">주소</th>
          <td className="align start">
            <Input
              type="text"
              placeholder="주소를 입력해주세요."
              noSpecialChars={true}
              width="300px"
            />
            <Button 
            onClick={() => {}} 
            size="xsmall" btntype="change" globalClass="ml_10">찾기</Button>
          </td>
        </tr>
        <tr>
          <th className="required">운영시간</th>
          <td className="selectdays align start gap_5">
              <Select options={days} defaultValue={0} />
              <span className="bold700 ml_10">시작</span>
              <Select options={hours} defaultValue={0} />시
              <Select options={minutes} defaultValue={0} />분
              <span className="mlr_4">~</span>
              <span className="bold700 ml_10">종료</span>
              <Select options={hours} defaultValue={0} />시
              <Select options={minutes} defaultValue={0} />분
          </td>
        </tr>
      </Table>
      <div className="align end gap_10">
        <Button  line size="xlarge" >
          목록
        </Button>
        <Button onClick={handleOpen} btntype="c11" size="xlarge">
          저장
        </Button>
      </div>
      <MuiAlert
        open={open}
        onClose={handleClose}
        title={
          <>
            입력한 내용을 <br/>
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={handleClose} line>취소</Button>
            <Button onClick={() => { }} border>확인</Button>
          </>
        }
       />
    </div>
  );
}

export default StoreInfoTabPage;