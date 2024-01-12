import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/KDSDefaultLayout";
import KDSContentBox from "../../../layout/KDSContentBox";
import Table from "../../../components/Table";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import MuiAlert from "../../../components/MuiAlert";

function ChangePassword() {
   const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [open02, setOpen02] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen02 = () => {
    setOpen(false);
    setOpen02(true);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };

  return (
    <Layout>
      
      <KDSContentBox>
        <div className="kdssetting">
          <h1 className="headline1 mb_20">비밀번호 변경</h1>
          <Table
            globalClass="kds_tablebox"
            colgroup={
              <>
                <col width="20%" />
                <col width="auto" />
              </>
            }
          >
            <tr>
              <th>현재 비밀번호</th>
              <td>
                <form>
                  <Input
                    globalClass="kdssetting_input_line"
                    placeholder="현재 비밀번호 입력"
                    type="password"
                    width="400px"
                  />
                </form>

                <div className="red mt_15">
                  * 현재 사용하고 있는 비밀번호가 아닙니다.
                </div>
              </td>
            </tr>
            <tr>
              <th>새로운 비밀번호</th>
              <td>
                <form>
                  <Input
                    globalClass="kdssetting_input_line"
                    type="password"
                    placeholder="4~20자의 영문, 숫자, 특수문자 조합으로 입력"
                    width="400px"
                  />
                </form>

                <div className="red mt_15">
                  * 비밀번호는 4~20자 이내여야 합니다.
                </div>
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td>
                <form>
                  <Input
                    globalClass="kdssetting_input_line"
                    type="password"
                    placeholder="새로운 비밀번호 재입력"
                    width="400px"
                  />
                </form>
                <div className="red mt_15">
                  * 새로운 비밀번호와 다릅니다.
                </div>
              </td>
            </tr>
          </Table>
          <div className="align center mt_40">
            <div className="item">
              <Button
                onClick={() => {
                  handleOpen();
                }}
                globalClass="kdssetting_btn_large"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
        <MuiAlert
          open={open}
          onClose={handleClose}
          type="kds"
          title={<>비밀번호를 변경하시겠습니까?</>}
          button={
            <>
              <Button
                onClick={handleClose}
                globalClass="kdsalert_btn cancle"
              >
                취소
              </Button>
              <Button
                onClick={handleOpen02}
                globalClass="kdsalert_btn confirm"
              >
                확인
              </Button>
            </>
          }
        />
        <MuiAlert
          open={open02}
          onClose={handleClose02}
          type="kds"
          title={
            <>
              비밀번호가 변경되었습니다.
              <br />
              다시 로그인해주세요.
            </>
          }
          button={
            <>
              <Button
                onClick={() => navigate("/kds")}
                globalClass="kdsalert_btn confirm"
              >
                확인
              </Button>
            </>
          }
        />
      </KDSContentBox>
    </Layout>
  );
}

export default ChangePassword;
