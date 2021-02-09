import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/layout.scss';
import '../styles/mobile.scss';

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
