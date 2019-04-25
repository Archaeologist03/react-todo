import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

function NavigationItem(props) {
  return (
    <NavLink
      onClick={props.openModal ? () => props.openModal(true) : null}
      className='nav-item'
      activeClassName='active-nav-item'
      to={props.linkTo}>
      <span className='nav-text-span'>{props.children}</span>
    </NavLink>
  );
}

export default NavigationItem;
