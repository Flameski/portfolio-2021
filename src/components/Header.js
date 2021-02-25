import React, { useState, useEffect } from 'react';
import Language from './Language';
import BurgerMenu from './BurgerMenu';
import { HashLink } from 'react-router-hash-link';

const Header = ({ changeLang, isBg }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpened, setMobileOpened] = useState(false);
  const moveMenu = () => {
    if (window.innerWidth > 500) {
      if (window.pageYOffset >= 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', moveMenu);
    return () => {
      document.removeEventListener('scroll', moveMenu);
    };
  });
  const openMenu = () => {
    setMobileOpened(!mobileOpened);
  };
  return (
    <>
      <BurgerMenu openMenu={openMenu} mobileOpened={mobileOpened} />
      <div
        className={`main-nav ${scrolled ? 'scrolled' : 'start'} ${
          mobileOpened ? 'open' : ''
        }`}
      >
        <nav>
          <HashLink smooth to="/#top" onClick={() => openMenu()}>
            {isBg ? 'Начало' : 'Home'}
          </HashLink>
          <span className="main-nav__pipe">|</span>
          <HashLink smooth to="/#cv" onClick={() => openMenu()}>
            {isBg ? 'Опит' : 'Experience'}
          </HashLink>
          <span className="main-nav__pipe">|</span>
          <HashLink smooth to="/#skills" onClick={() => openMenu()}>
            {isBg ? 'Умения' : 'Skills'}
          </HashLink>
          <span className="main-nav__pipe">|</span>
          <HashLink smooth to="/#projects" onClick={() => openMenu()}>
            {isBg ? 'Проекти' : 'Projects'}
          </HashLink>
          <span className="main-nav__pipe">|</span>
          <HashLink smooth to="/#aboutme" onClick={() => openMenu()}>
            {isBg ? 'За мен' : 'About Me'}
          </HashLink>
          <span className="main-nav__pipe">|</span>
          <HashLink smooth to="/#trainings" onClick={() => openMenu()}>
            {isBg ? 'Какво уча в момента' : "What I'm learning now"}
          </HashLink>
          <span className="main-nav__pipe">|</span>
          <HashLink smooth to="/#contact" onClick={() => openMenu()}>
            {isBg ? 'Контакти' : 'Contacts'}
          </HashLink>
        </nav>
        <Language changeLang={changeLang} isBg={isBg} />
      </div>
    </>
  );
};

export default Header;
