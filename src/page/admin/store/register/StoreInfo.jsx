import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Table from "../../../../components/Table";
import FormGroup from "../../../../components/FormGroup";
import Radio from "../../../../components/Radio";
import ContactInfo from "../../../../components/ContactInfo";
import Select from "../../../../components/Select";
import Modal from "./AdrresModal";
import MuiAlert from "../../../../components/MuiAlert";

function StoreInfo() {
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
      <Table
        globalClass="flex1"
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
              width="300px"
            />
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
                노출안함
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
            <span className="required_lft red_text ml_10">
              숫자만 입력 가능합니다.
            </span>
          </td>
        </tr>
        <tr>
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
          <td className="Phone_number align start">
            <ContactInfo />
            <span className="required_lft red_text ml_10">
              숫자만 입력 가능합니다.
            </span>
          </td>
        </tr>
        <tr>
          <th className="required">주소</th>
          <td className="align start">
            <Input
              type="text"
              placeholder="주소를 입력해주세요."
              width="300px"
            />
            <Button
              onClick={handleOpen2}
              size="xsmall"
              globalClass="ml_10"
              line
              color="gray"
            >
              찾기
            </Button>
          </td>
        </tr>
        <tr>
          <th className="required">운영시간</th>
          <td>
            <div className="selectdays align start gap_5">
              <Select options={days} defaultValue={0} />
              <span className="bold700 ml_10">시작</span>
              <Select options={hours} defaultValue={0} />시
              <Select options={minutes} defaultValue={0} />분
              <span className="mlr_4">~</span>
              <span className="bold700 ml_10">종료</span>
              <Select options={hours} defaultValue={0} />시
              <Select options={minutes} defaultValue={0} />분
              <Button globalClass="ml_15" icon="Plus" line onClick={() => {}} size="icon_s_h35">
                옵션명 추가
              </Button>
            </div>
            <div className="selectdays align start gap_5 mt_10">
              <Select options={days} defaultValue={0} />
              <span className="bold700 ml_10">시작</span>
              <Select options={hours} defaultValue={0} />시
              <Select options={minutes} defaultValue={0} />분
              <span className="mlr_4">~</span>
              <span className="bold700 ml_10">종료</span>
              <Select options={hours} defaultValue={0} />시
              <Select options={minutes} defaultValue={0} />분
            </div>
          </td>
        </tr>
      </Table>
      <div className="align end gap_10">
        <Button onClick={() => handleOpenAlert(1)} line size="xlarge">
          목록
        </Button>
        <Button onClick={() => handleOpenAlert(2)} btntype="c11" size="xlarge">
          저장
        </Button>
      </div>
      <Modal open={open2} handleClose={handleClose2} />
      <MuiAlert
        open={openAlert1}
        onClose={() => handleCloseAlert(1)}
        title={
          <>
            입력한 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={() => handleCloseAlert(1)} line>
              취소
            </Button>
            <Button onClick={() => navigate("/admin/store")} border="point">
              확인
            </Button>
          </>
        }
      />
      <MuiAlert
        open={openAlert2}
        onClose={() => handleCloseAlert(2)}
        title={
          <>
            수정된 내용을 <br />
            저장하시겠습니까?
          </>
        }
        button={
          <>
            <Button onClick={() => handleCloseAlert(2)} line>
              취소
            </Button>
            <Button onClick={() => navigate("/admin/store")} border="point">
              확인
            </Button>
          </>
        }
      />
    </div>
  );
}

export default StoreInfo;