import React from 'react';
import { NavLink } from 'react-router-dom';


function NavItem(props) {
  return (
    <NavLink
      className="nav-item"
      activeClassName="active-nav-item"
      to={props.linkTo}>
      <span className="nav-text-span" >{props.children}</span>
    </NavLink>
  );
}

export default NavItem;