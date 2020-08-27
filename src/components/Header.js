import React from 'react';
import Menu from './Menu';
import logo from './../../public/assets/logo.svg';

const Header = () => (
  <div className="header container">
    <img src={logo} className="logo" />
    <Menu />
  </div>
);

export default Header;