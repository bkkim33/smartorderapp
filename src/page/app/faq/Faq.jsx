import React, { useState } from "react";
import Layout from "../../../layout/AppDefaultLayout";

const qnaList = [
  {
    category: "category1",
    question: "주문 취소는 할 수 없나요?",
    answer: "주문완료가 된 건은 취소가 불가능합니다.",
  },
  {
    category: "category2",
    question: "법인 소속을 바꿀 수 있나요? 2",
    answer: "법인 소속을 바꿀 수 있나요 2",
  },
  {
    category: "category3",
    question: "법인 소속을 바꿀 수 있나요? 3",
    answer: "법인 소속을 바꿀 수 있나요 3",
  },
  {
    category: "category4",
    question: "법인 소속을 바꿀 수 있나요? 4",
    answer: "법인 소속을 바꿀 수 있나요 4",
  },
  {
    category: "category5",
    question: "법인 소속을 바꿀 수 있나요? 5",
    answer: "법인 소속을 바꿀 수 있나요 5",
  },
  {
    category: "category6",
    question: "법인 소속을 바꿀 수 있나요? 6",
    answer: "법인 소속을 바꿀 수 있나요 6",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Layout Back Menu Title="자주하는 질문">
      <div className="inner">
        {qnaList.map((item, index) => (
          <div className="faq-list" key={index}>
            <div 
              className={`faq-item align ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
              <div className="question">
                {item.question}
              </div>
              <i className={`arrow ${activeIndex === index ? "up" : ""}`}></i>
            </div>
            {activeIndex === index && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Faq;

