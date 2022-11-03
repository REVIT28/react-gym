import React from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" />

      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimomonials</li>
      </ul>
    </div>
  );
};

export default Header;