import React from "react";
import Layout from "../../../layout/AppDefaultLayout";
import { useNavigate } from "react-router-dom";

const NoticeData = [
  {
    id: 1,
    title: "메가존 입사쿠폰 사용안내",
    date: "2023-10-05",
  },
  {
    id: 2,
    title: "시스템 점검 안내",
    date: "2023-10-01",
  },
  {
    id: 3,
    title: "공지사항 제목이 길어지면 어떻게 될까요 더 길게 적어봅시다 !!!!",
    date: "2023-09-31",
  },
  {
    id: 4,
    title: "시스템 점검 안내",
    date: "2023-09-30",
  },
]

function NoticeListPage() {
  const navigate = useNavigate();
  return (
    <Layout Back Menu Title="공지사항">
      <div className="notice">
        <ul className="inner">
          {NoticeData.map((notice) => (
            <li key={notice.id}>
              <button onClick={() => {
                navigate("/notice/detail");
              }}>
                <div className="align">
                  <div>
                    <p className="body0 pb_6">{notice.title}</p>
                    <p className="color_t_99">{notice.date}</p>
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

export default NoticeListPage;