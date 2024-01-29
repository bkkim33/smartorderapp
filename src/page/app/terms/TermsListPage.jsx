import React from "react";
import Layout from "../../../layout/AppDefaultLayout";
import { useNavigate } from "react-router-dom";

const TermsData = [
  {
    id: 1,
    title: "약관 1",
    date: "2023-10-05",
  },
  {
    id: 2,
    title: "약관 2",
    date: "2023-10-05",
  },
  {
    id: 3,
    title: "개인정보 처리 방침",
    date: "2023-10-05",
  },
];

function TermsListPage() {
  const navigate = useNavigate();
  return (
    <Layout Back Menu Title="이용약관">
      <div className="notice terms">
        <ul className="inner">
          {TermsData.map((terms) => (
            <li key={terms.id}>
              <button
                onClick={() => {
                  navigate("/terms/detail");
                }}
              >
                <div className="align">
                  <div>
                    <p className="body0">{terms.title}</p>
                    <p className="color_t_99">{terms.date} 시행</p>
                  </div>
                  <i className="arrow"></i>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default TermsListPage;