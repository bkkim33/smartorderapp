import React , { useState } from "react";
import Layout from '../../../layout/AppDefaultLayout'
import { Icons } from "../../../components/Icon";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function OrderComplete( ) {

  const [number, setNumber] = useState(2310); 
  const navigate = useNavigate();

  return (
    <Layout Title="주문완료" Close>
      <div className="ordercomplete align column">
        <div className="align column center">
          <i className="mb_30">
            <Icons.OrderComplete width={84} height={92} />
          </i>
          <p className="ordercomplete_txt mb_15">주문이 완료되었습니다.</p>
          <p className="ordercomplete_num mb_30">주문번호 { number }</p>
          <p className="ordercomplete_desc">
            제조가 완료되면<br/>
            카카오톡 알림톡이 발송됩니다.<br/>
            메시지를 확인해주세요.
          </p>
        </div>
        <div className="ordercomplete_btns inner align">
          <Button onClick={() => {navigate("/main");}} size="full" color="gray" txtColor="txtgray">홈</Button>
          <Button onClick={() => {navigate("/order/history");}} size="full" color="point">주문내역 보기</Button>
        </div>
      </div>
    </Layout>
  );
}
export default OrderComplete;