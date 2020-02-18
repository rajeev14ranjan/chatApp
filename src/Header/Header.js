import React from 'react';

import './Header.css';

function Header({ name }) {
  return (
    <div className='header'>
      <span className='header-avatar'> </span>
      <span className='header-name'>{name}</span>{' '}
    </div>
  );
}

export default Header;
