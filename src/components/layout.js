import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/layout.scss';
import '../styles/mobile.scss';

const Layout = ({ children, changeLang, isBg }) => {
  return (
    <>
      <Header changeLang={changeLang} isBg={isBg} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
