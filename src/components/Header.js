import React from 'react';
import Language from './Language';
import { HashLink } from 'react-router-hash-link';

const Header = ({ changeLang, isBg }) => {
  return (
    <div className="main-nav">
      <nav>
        <HashLink smooth to="/#top">
          Home
        </HashLink>
        <HashLink smooth to="/#skills">
          Skills
        </HashLink>
        <HashLink smooth to="/#aboutme">
          About Me
        </HashLink>
        <HashLink smooth to="/#training">
          Training
        </HashLink>
      </nav>
      <Language changeLang={changeLang} isBg={isBg} />
    </div>
  );
};

export default Header;
