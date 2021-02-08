import React from 'react';
import Layout from './components/layout';
// import { HashLink } from "react-router-hash-link";
// components
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <Layout>
      <h1>Hello from home!</h1>
      <Skills />
      <AboutMe />
    </Layout>
  );
};

export default App;
