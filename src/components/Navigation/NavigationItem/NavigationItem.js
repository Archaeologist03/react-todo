import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../../../store/actions/authActions';

import './NavigationItem.scss';

function NavigationItem(props) {
  const openingModal = () => {
    // if has modal(login/singup) open it, otherwise(logout) null
    if (props.openModal) {
      props.openModal(true);
    } else {
      return null;
    }
  };

  const loggingOut = () => {
    if (props.loggingOut) {
      props.onLogoutUser();
      props.history.push('/');
    }
  };

  return (
    <NavLink
      onClick={() => {
        openingModal();
        loggingOut();
      }}
      className='nav-item'
      activeClassName='active-nav-item'
      to={props.linkTo}>
      <span className='nav-text-span'>{props.children}</span>
    </NavLink>
  );
}

const mapStateToProps = state => {
  return {
    isLogged: state.app.isLogged,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogoutUser: () => dispatch(logoutUser()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavigationItem),
);
