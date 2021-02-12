import React from 'react';

const BurgerMenu = ({ openMenu, mobileOpened }) => {
  return (
    <>
      <div
        className={`burger-menu ${mobileOpened ? 'open-burger' : ''}`}
        onMouseDown={() => {
          openMenu();
        }}
      >
        <div className="burger-menu-bar"></div>
      </div>
    </>
  );
};

export default BurgerMenu;
