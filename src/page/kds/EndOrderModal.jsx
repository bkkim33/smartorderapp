import React, { useState, useRef } from "react";

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
          <div className="align">
            <div className="lft">
              <h3>픽업대 선택</h3>
            </div>
            <div className="rgt">
              <div
                draggable
                onDragStart={(e) => dragStart(e)}
                onDragEnter={(e) => dragEnter(e)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={drop}
                // touchstart={(e) => dragStart(e)}
                // touchmove={(e) => dragEnter(e)}
                // touchend={drop}
                style={{ width: "100px", height: "100px" }}
              >
                {list[0]}
              </div>
            </div>
          </div>
          <div>
            <ul>
              {list &&
                list.map((item, idx) => (
                  <li key={idx}>
                    <div
                      draggable
                      onDragStart={(e) => dragStart(e, idx)}
                      onDragEnter={(e) => dragEnter(e, idx)}
                      onDragOver={(e) => e.preventDefault()}
                      // onDragEnd={drop}
                      // touchstart={(e) => dragStart(e)}
                      // touchmove={(e) => dragEnter(e)}
                      // touchend={drop}
                      style={{ width: "100px", height: "100px" }}
                    >
                      {item}
                    </div>
                  </li>
                ))}

              {/* <li>
                <div
                  draggable
                  onDragEnter={(e) => dragEnter(e)}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnd={drop}
                  style={{ width: "100px", height: "100px" }}
                >
                </div>
                <button>
                  <span>1</span>
                  <p></p>
                </button>
              </li> */}
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
