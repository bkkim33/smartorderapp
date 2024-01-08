import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/DefaultLayout";
import ContentBox from "../../../layout/ContentBox";
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
      <div className="align mb_20">
        <h1 className="headline2">비밀번호 변경</h1>
      </div>
      <ContentBox>
        <div className="admin_myprofile">
          <Table
            globalClass="changepasswordbox"
            colgroup={
              <>
                <col width="10%" />
                <col width="auto" />
              </>
            }
          >
            <tr>
              <th>현재 비밀번호</th>
              <td className="left">
                <form>
                  <Input
                    placeholder="현재 비밀번호 입력"
                    type="password"
                    width="400px"
                  />
                </form>

                <div className="red mt_5 ml_5">
                  * 현재 사용하고 있는 비밀번호가 아닙니다.
                </div>
              </td>
            </tr>
            <tr>
              <th>새로운 비밀번호</th>
              <td className="left">
                <form>
                  <Input
                    type="password"
                    placeholder="4~20자의 영문, 숫자, 특수문자 조합으로 입력"
                    width="400px"
                  />
                </form>

                <div className="red mt_5 ml_5">
                  * 비밀번호는 4~20자 이내여야 합니다.
                </div>
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td className="left">
                <form>
                  <Input
                    type="password"
                    placeholder="새로운 비밀번호 재입력"
                    width="400px"
                  />
                </form>

                <div className="red mt_5 ml_5">
                  * 새로운 비밀번호와 다릅니다.
                </div>
              </td>
            </tr>
          </Table>
          <div className="align center mt_20">
            {/* <div className="item">
              <Button
                onClick={() => navigate(-1 || "/")}
                color="gray"
                line
                size="small"
                type="pc"
              >
                취소
              </Button>
            </div> */}
            <div className="item">
              <Button
                onClick={() => {
                  handleOpen();
                }}
                type="pc"
                color="black"
                size="small"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
        <MuiAlert
          open={open}
          onClose={handleClose}
          type="admin"
          title={<>비밀번호를 변경하시겠습니까?</>}
          button={
            <>
              <Button
                onClick={handleClose}
                type="pc"
                color="gray"
                line
                size="small"
              >
                취소
              </Button>
              <Button
                onClick={handleOpen02}
                type="pc"
                color="black"
                size="small"
              >
                확인
              </Button>
            </>
          }
          minWidth
        />
        <MuiAlert
          open={open02}
          onClose={handleClose02}
          type="admin"
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
                type="pc"
                onClick={() => navigate("/admin")}
                color="black"
                size="small"
              >
                확인
              </Button>
            </>
          }
          minWidth
        />
      </ContentBox>
    </Layout>
  );
}

export default ChangePassword;
