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

function NoticeDetailPage() {
  return (
    <Layout Back Menu Title="약관1">
      <div className="notice">
        <div className="inner">
          <div className="notice_title">
            <p className="body0 pb_6">시행일자 : 2023.05.15</p>
            {/* <Select options={termopt} defaultValue={termopt[0]} round="app" /> */}
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

export default NoticeDetailPage;