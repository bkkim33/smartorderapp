import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/AppDefaultLayout'
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { Button } from "../../../components/Button"

function MyInfo() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  // };

  // 
  const [isSingle] = useState(false);

  const sector = [
    { value: "메가존.디지털", label: "메가존.디지털" },
    { value: "메가존클라우드", label: "메가존클라우드" },
    { value: "메가존소프트", label: "메가존소프트" },
    { value: "클라우드그램", label: "클라우드그램" },
  ];

  return (
    <Layout Back Title="내 정보" Menu>
      <form 
      // onSubmit={handleFormSubmit}
      >
        <ul className="myinfo inner">
          <li className="align">            
            <label htmlFor="name">이름</label>
            <div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                shape="none"
                globalClass=""
                disabled
              />
            </div>
          </li>
          <li className="align">
            <label htmlFor="email">이메일</label>
            <div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xxxxxxx@mz.co.kr"
                shape="none"
                globalClass=""
                disabled
              />
            </div>            
          </li>
          <li className="align">
            <label htmlFor="phone">전화번호</label>
            <div>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-000-0000"
                shape="none"
                maxLength={13}
                globalClass=""
                disabled
                phone
              />
            </div>            
          </li>
          <li className="align">
            <label htmlFor="phone">비밀번호</label>
            <div className="align">
              <Input
                value={password}
                onChange={handlePasswordChange}
                placeholder="********************"
                type='password'
                shape="none"
                disabled
                globalClass="password"
              />
              <Button
                onClick={() => navigate("/password")}
                size="xxsmall" line color="gray">
                변경
              </Button>
            </div>
          </li>
          <li>
            <dl className="align">
              <dt>소속</dt>
              <dd>
                {isSingle ? (
                  <Select
                    options={[
                      {
                        value: "default",
                        label: "겸임이 아닐 경우",
                      },
                    ]}
                    round="app"
                    defaultValue={0}
                    disabled
                  />
                ) : (
                  <Select 
                  options={sector} 
                  round="app" 
                  placeholder="메가존.디지털"
                   />
                )}
              </dd>
            </dl>
          </li>
        </ul>
      </form>
    </Layout>
  );
}

export default MyInfo;
