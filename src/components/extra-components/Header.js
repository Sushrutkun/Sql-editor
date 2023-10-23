import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width='100px' height='100px' alt='logo' />
      </div>
    </div>
  );
};

export default Header;
