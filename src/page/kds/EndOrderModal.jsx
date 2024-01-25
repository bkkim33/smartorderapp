import React from "react";
import { Icons } from "../../components/Icon";

function EndOrderModal({ data }) {
  
  return (
    <div className="kds_modal">
      <div className="kds_modal_box">
        <div className="kds_modal_pick">
          <div className="kds_modal_top">
            <div className="kds_modal_tit">
              <h3>픽업대 선택</h3>
            </div>
          </div>
          <div className="kds_modal_picknum">
            <button>
              <p>110</p>
            </button>
            <button>
              <Icons.KDSDrag />
            </button>
          </div>
          <div className="kds_modal_list">
            <ul>
              <li className="active">
                <span>1</span>
                <div className="kds_modal_picknum">
                  <button>
                    <p>110</p>
                  </button>
                  <button>
                    <Icons.KDSDrag />
                  </button>
                </div>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
              <li>
                <span>4</span>
              </li>
              <li>
                <span>5</span>
              </li>
              <li>
                <span>6</span>
              </li>
              <li>
                <span>7</span>
              </li>
              <li>
                <span>8</span>
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