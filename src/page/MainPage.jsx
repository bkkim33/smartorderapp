import React from "react";
import { Link } from "react-router-dom";
import Layout from '../layout/DefaultLayout'
import Button from '../components/Button'
import { Header } from "../stories/Header";



function MainPage() {
  return (
    <Layout>
      <div>main</div>
      <Link to="/login">로그인 이동</Link>
      <Button name="mt-10">ssssssss</Button>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        user={{
          name: "Jane Doe",
        }}
      />
    </Layout>
  );
}

export default MainPage;
