import React, { useState, useRef } from "react";
import { Icons } from "../../components/Icon";

const EndOrderModal = () => {
  const dragItem = useRef(); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef(); // 드랍할 위치의 아이템의 인덱스
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ]);
  // 드래그 시작될 때 실행
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  // 드래그중인 대상이 위로 포개졌을 때
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  // 드랍 (커서 뗐을 때)
  const drop = (e) => {
    // const newList = [...list];
    // const dragItemValue = newList[dragItem.current];
    // newList.splice(dragItem.current, 1);
    // newList.splice(dragOverItem.current, 0, dragItemValue);
    // dragItem.current = null;
    // dragOverItem.current = null;
    // setList(newList);
  };

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
