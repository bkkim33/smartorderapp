import React from "react";
import Layout from "../../../layout/AppDefaultLayout";
// import Select from "../../../components/Select";

// const termopt = [
//   {
//     label: "시행일자 : 2023.05.15",
//     value: "시행일자 : 2023.05.15",
//   },
//   {
//     label: "시행일자 : 2022.12.12",
//     value: "시행일자 : 2022.12.12",
//   },
// ];

function TermsDetailPage() {
  return (
    <Layout Back Menu Title="이용약관 상세">
      <div className="notice">
        <div className="inner">
          <div className="notice_title">
            <p className="body0 pb_6">약관 1</p>
            <p className="color_t_99">2023-05-15 시행</p>
          </div>
          <div className="notice_content">
            <p className="body0">
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TermsDetailPage;