import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { withRouter } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
import LoginModal from '../auth/LoginModal/LoginModal';
import SignupModal from '../auth/SignupModal/SignupModal';

import './Navigation.scss';

function Navigation(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const userName = props.user ? props.user.name : '';

  return (
    <div className='navigation-container'>
      <CSSTransition
        in={isLoginModalOpen}
        timeout={100}
        unmountOnExit
        classNames='modal'>
        <div>
          <LoginModal
            closeSignupModal={setIsSignupModalOpen}
            openModal={setIsLoginModalOpen}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSignupModalOpen}
        timeout={100}
        unmountOnExit
        classNames='modal'>
        <div>
          <SignupModal
            closeLoginModal={setIsLoginModalOpen}
            openModal={setIsSignupModalOpen}
          />
        </div>
      </CSSTransition>

      <h5 className='navigation-container__welcome'>{`Welcome ${userName}`}</h5>
      <div className='navigation-container__nav-items-container'>
        {props.isAuthenticated ? (
          <Fragment>
            <NavigationItem loggingOut={true} linkTo='/list/'>
              Logout
            </NavigationItem>
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

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(Navigation),
);
