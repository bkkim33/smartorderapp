import React from "react";
import { Link } from "react-router-dom";
import Layout from '../layout/DefaultLayout'

function MainPage() {
  return (
    <Layout>
      <div>main</div>
      <Link to="/login">로그인 이동</Link>
    </Layout>
  );
}

export default MainPage;
