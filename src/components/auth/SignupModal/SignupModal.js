import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signupUser } from '../../../store/actions/authActions';
import { clearErrors } from '../../../store/actions/errorsAction';

import './SignupModal.scss';

const SignupModal = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Close login modal when signup modal is open
  useEffect(() => {
    props.closeLoginModal(false);
  });

  // Send data to server
  const onSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    props.onSignupUser(user);
  };

  // Listen for async changes in props(on isLogged)
  // Close modal when isLogged is set to true(when user is logged/signed in)
  useEffect(() => {
    if (props.isLogged) {
      props.openModal(false);
      // update url on login to index page
      props.history.push('/');
      props.onClearErrors();
    }
  }, [props]);

  const closeModal = () => {
    props.openModal(false);
    // update url on closing(X) to index page
    props.history.push('/');
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

  const errMessage = inputField => {
    return props.errData ? (
      <p className='error-msg-field'>{displayError(inputField)}</p>
    ) : null;
  };

  return (
    <div className='modals-wrapper'>
      <div className='modal-container'>
        <div className='modal-container__close' onClick={closeModal} />
        <form className='modal-container__form'>
          <div className='modal-container__form__name-container'>
            <label
              className='modal-container__form__name-container--name-label'
              htmlFor='name'>
              {/* {errMessage('name') || 'Name'} */}
              Name
            </label>
            {errMessage('name')}
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              id='name'
              className='modal-container__form__name-container--name-input'
              type='text'
              placeholder='Name'
              required={true}
            />
          </div>

          <div className='modal-container__form__email-container'>
            <label
              className='modal-container__form__email-container--email-label'
              htmlFor='email'>
              {/* {errMessage('email') || 'Email'} */}
              Email
            </label>
            {errMessage('email')}

            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              id='email'
              className='modal-container__form__email-container--email-input'
              type='email'
              placeholder='Email'
              required={true}
            />
          </div>

          <div className='modal-container__form__password-container'>
            <label
              className='modal-container__form__password-container--password-label'
              htmlFor='password'>
              {/* {errMessage('password') || 'Password'} */}
              Password
            </label>
            {errMessage('password')}

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
            Signup
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignupUser: user => dispatch(signupUser(user)),
    onClearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignupModal),
);
