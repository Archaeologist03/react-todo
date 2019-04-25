import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import NavigationItem from './NavigationItem/NavigationItem';
import LoginModal from '../auth/LoginModal/LoginModal';
import SignupModal from '../auth/SignupModal/SignupModal';

import './Navigation.scss';

function Navigation(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const closeModal = e => {
    setIsLoginModalOpen(false);
  };

  const userName = props.user ? props.user.name : '';
  console.log(isLoginModalOpen, isSignupModalOpen);
  return (
    <div className='navigation-container'>
      <CSSTransition
        in={isLoginModalOpen}
        timeout={1000}
        unmountOnExit
        classNames='modal'>
        <div>
          <LoginModal openModal={setIsLoginModalOpen} />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSignupModalOpen}
        timeout={1000}
        unmountOnExit
        classNames='modal'>
        <div>
          <SignupModal openModal={setIsSignupModalOpen} />
        </div>
      </CSSTransition>

      <h5
        onClick={closeModal}
        className='navigation-container__welcome'>{`Welcome ${userName}`}</h5>
      <div className='navigation-container__nav-items-container'>
        {props.isAuthenticated ? (
          <Fragment>
            <NavigationItem linkTo='/logout'>Logout</NavigationItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavigationItem openModal={setIsLoginModalOpen} linkTo='/login'>
              Login
            </NavigationItem>
            <NavigationItem openModal={setIsSignupModalOpen} linkTo='/register'>
              Signup
            </NavigationItem>
          </Fragment>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.app.isAuthenticated,
    user: state.app.user,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Navigation);
