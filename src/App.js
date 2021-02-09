import React from 'react';
import Layout from './components/layout';
// import { HashLink } from "react-router-hash-link";
// components
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import FuturePlans from './components/FuturePlans';

const App = () => {
  return (
    <Layout>
      <h1>Hello from home!</h1>
      <Skills />
      <AboutMe />
      <div style={{ height: '1000px' }}></div>
      <FuturePlans />
    </Layout>
  );
};

export default App;
