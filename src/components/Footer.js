import React from 'react';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <h5>PDD &copy; {year}</h5>
    </footer>
  );
};

export default Footer;
