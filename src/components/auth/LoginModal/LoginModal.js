import React, { useState } from 'react';

import './LoginModal.scss';

const LoginModal = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // send data to server
  const onSubmit = e => {
    console.log(email, password);
  };
  return (
    <div className='modal-container'>
      <div
        onClick={() => props.openModal(false)}
        className='modal-container__close'
      />
      <form className='modal-container__form'>
        <div className='modal-container__form__email-container'>
          <label
            className='modal-container__form__email-container--email-label'
            htmlFor='email'>
            Email
          </label>
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            id='email'
            className='modal-container__form__email-container--email-input'
            type='text'
            placeholder='Email'
          />
        </div>

        <div className='modal-container__form__password-container'>
          <label
            className='modal-container__form__password-container--password-label'
            htmlFor='password'>
            Password
          </label>
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            id='password'
            className='modal-container__form__password-container--password-input'
            type='password'
            placeholder='Password'
          />
        </div>
        <button
          type='submit'
          onClick={e => {
            e.preventDefault();
            onSubmit();
            props.openModal(false);
          }}
          className='modal-container__form__login-button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
