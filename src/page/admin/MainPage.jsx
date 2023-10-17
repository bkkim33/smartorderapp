import React from "react";
import Layout from '../../layout/DefaultLayout'
import ContentBox from "../../layout/ContentBox";

function MainPage() {
  return (
    <Layout>
      <div className="">
        main
      </div>
      <ContentBox>
        1111
      </ContentBox>
      {/* <Link to="/login">로그인 이동</Link>
      <Button onClick={() => {}} size="full">
        save
      </Button> */}
    </Layout>
  );
}

export default MainPage;
