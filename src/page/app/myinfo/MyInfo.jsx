import React, { useState} from "react";
import Layout from '../../../layout/AppDefaultLayout'
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"

function MyInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  // };

  const [isSingle, setIsSingle] = useState(true);

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
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="구글정보 값 = 이름"
              shape="none"
              globalClass=""
              disabled
            />
          </li>
          <li className="align">
            <label htmlFor="email">이메일</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="구글정보 값 = 이메일"
              shape="none"
              globalClass=""
              disabled
            />
          </li>
          <li className="align">
            <label htmlFor="phone">전화번호</label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="구글정보 값 = 전화번호"
              shape="none"
              maxLength={13}
              globalClass=""
              // disabled일 떄 인증요청 button=none
              disabled
              phone
            />
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
