import React from "react";

function EndOrderModal({ data }) {
  
  return (
    <div className="kds_modal">
      <div className="kds_modal_box">
        <div className="kds_modal_pick">
          <div className="align">
            <div className="lft">
              <h3>픽업대 선택</h3>
            </div>
            <div className="rgt">
              <p>주문번호 <em>110</em></p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <button>
                  <span>1</span>
                  <p></p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="kds_modal_btn">
          <button>닫기</button>
          <button>확인</button>
        </div>
      </div>
    </div>
  );
}

export default EndOrderModal;