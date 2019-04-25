import React, { useState } from 'react';

import './SignupModal.scss';

const LoginModal = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // send data to server
  const onSubmit = e => {
    console.log(name, email, password);
  };
  return (
    <div className='modal-container'>
      <div
        className='modal-container__close'
        onClick={() => props.openModal(false)}
      />
      <form className='modal-container__form'>
        <div className='modal-container__form__name-container'>
          <label
            className='modal-container__form__name-container--name-label'
            htmlFor='name'>
            Name
          </label>
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            id='name'
            className='modal-container__form__name-container--name-input'
            type='text'
            placeholder='Name'
          />
        </div>

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
