import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../../../store/actions/authActions';
import { clearErrors } from '../../../store/actions/errorsAction';

import '../../../scss/modals/modals.scss';
import './LoginModal.scss';

const LoginModal = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Close signup modal when login modal is open
  useEffect(() => {
    props.closeSignupModal(false);
  });

  // Send data to server
  const onSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    props.onLoginUser(user);
  };

  // Listen for async changes in props(on is logged in)
  // Close modal when isLogged is set to true(when user is logged in)
  useEffect(() => {
    if (props.isLogged) {
      props.openModal(false);
      // update url on login to index page
      props.history.push('/list/');
      props.onClearErrors();
    }
  }, [props]);

  const closeModal = () => {
    props.openModal(false);
    // update url on closing(X) to index page
    props.history.push('/list/');
    props.onClearErrors();
  };

  const displayError = (field, errData = props.errData) => {
    if (errData) {
      // errData may exist with just msg, so we need to check if errData has errData obj with data.
      if (errData.errData) {
        const errField = errData.errData.filter(eachErr => {
          return eachErr.param === field;
        });
        return errField[0] ? errField[0].msg : null;
      }

      // when password is wrong there is errData, just field and msg
      // need this in order to display wrong password only above password field
      if (field === 'password') {
        return errData ? errData.msg : null;
      }
    }
  };

  return (
    <div className='modals-wrapper'>
      <div className='modal-container'>
        <div onClick={closeModal} className='modal-container__close' />
        <form className='modal-container__form'>
          <div className='modal-container__form__email-container'>
            <label
              className='modal-container__form__email-container--email-label'
              htmlFor='email'>
              Email
            </label>
            {props.errData ? (
              <p className='error-msg-field'>{displayError('email')}</p>
            ) : null}
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              id='email'
              className={`modal-container__form__email-container--email-input`}
              type='email'
              placeholder='Email'
              required={true}
            />
          </div>

          <div className='modal-container__form__password-container'>
            <label
              className='modal-container__form__password-container--password-label'
              htmlFor='password'>
              Password
            </label>
            {props.errData ? (
              <p className='error-msg-field'>{displayError('password')}</p>
            ) : null}
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              id='password'
              className='modal-container__form__password-container--password-input'
              type='password'
              placeholder='Password'
              required={true}
            />
          </div>
          <button
            type='submit'
            onClick={onSubmit}
            className='modal-container__form__login-button'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLogged: state.app.isLogged,
    errData: state.app.errData,
    // msg: state.auth.msg,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: user => dispatch(loginUser(user)),
    onClearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginModal),
);
