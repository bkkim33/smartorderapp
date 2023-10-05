import React from 'react';
import Header from './HeaderLayout'
import Footer from "./FooterLayout";
import "../styles/global.scss";

function DefaultLayout({children}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;