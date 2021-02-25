import React from 'react';
import { useState } from 'react';
import Layout from './components/Layout';
// components
import Home from './components/Home';
import CV from './components/CV';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import FuturePlans from './components/FuturePlans';
import Contact from './components/Contact';

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
      <Projects isBg={isBg} />
      <AboutMe isBg={isBg} />
      {/* <div style={{ height: '1000px' }}></div> */}
      <FuturePlans isBg={isBg} />
      <Contact isBg={isBg} />
    </Layout>
  );
};

export default App;
