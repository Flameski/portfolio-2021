import React from 'react';
import { useState } from 'react';
import Layout from './components/Layout';
// components
import Home from './components/Home';
import CV from './components/CV';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import FuturePlans from './components/FuturePlans';

const App = () => {
  const [isBg, setIsBg] = useState(true);
  const changeLang = () => {
    setIsBg(!isBg);
  };
  return (
    <Layout changeLang={changeLang} isBg={isBg}>
      <Home isBg={isBg} />
      <CV isBg={isBg} />
      <Skills isBg={isBg} />
      <AboutMe isBg={isBg} />
      {/* <div style={{ height: '1000px' }}></div> */}
      <FuturePlans isBg={isBg} />
    </Layout>
  );
};

export default App;
