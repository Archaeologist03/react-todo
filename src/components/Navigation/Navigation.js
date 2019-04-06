import React from 'react';

import NavItem from './NavItem/NavItem';

function Navigation(props) {
  return (
    <div className='navigation-container'>
      <div className='navigation-container__nav-items-container'>
        <NavItem linkTo='/about'>Login</NavItem>
        <NavItem linkTo='/portfolio'>Signup</NavItem>
      </div>
    </div>
  );
}

export default Navigation;
