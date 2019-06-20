import axios from 'axios';

import * as actionTypes from './actionTypes';

import { baseUrl } from '../../assets/utils/serverEndpoint';

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  const currentToken = localStorage.getItem('token');
  const currentTokenId = localStorage.getItem('id');
  const stateToken = getState().app.token;

  try {
    // if have all proceed to make req for user with id param
    if (currentToken && currentTokenId && stateToken) {
      const url = `${baseUrl}/auth/loaduser/${currentTokenId}`;

      const user = await axios.post(url, tokenConfig(getState));

      if (user) {
        dispatch({
          type: actionTypes.LOAD_USER,
          user: user.data,
        });
      }
    }
  } catch (err) {
    // TODO# Deal with initial load user(when there is no user) but there is old id/token in localStorage
    console.log(err);
  }
};

// LOGIN USER
export const loginUser = ({ email, password }) => async dispatch => {
  if (!email || !password) {
    // TODO - add error case = please provide input..
    // dispatch();
  }
  // Config request.
  const bodyData = {
    email,
    password,
  };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // Send data to server
    const resData = await axios.post(`${baseUrl}/auth/login`, bodyData, config);
    if (resData.data.token) {
      dispatch({
        type: actionTypes.LOGIN_USER,
        user: resData.data.user,
        token: resData.data.token,
      });
    }
  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_FAILED,
      errData: err.response.data,
    });
  }
};

// SIGNUP USER
export const signupUser = ({ name, email, password }) => async dispatch => {
  if (!name || !email || !password) {
    // TODO - add error case = please provide input..
    // dispatch(error);
  }
  // Config request.
  const bodyData = {
    name,
    email,
    password,
  };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Send data to server
    const resData = await axios.post(
      `${baseUrl}/auth/signup`,
      bodyData,
      config,
    );
    if (resData.data.token) {
      dispatch({
        type: actionTypes.SIGNUP_USER,
        user: resData.data.user,
        token: resData.data.token,
      });
    }
  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_FAILED,
      errData: err.response.data,
    });
  }
};

// LOGOUT USER
export const logoutUser = () => {
  // Clear token on logout so user cant alter items after logout. (non-refresh)
  axios.defaults.headers.common['x-auth-token'] = null;

  return {
    type: actionTypes.LOGOUT_USER,
  };
};

// TOKEN CONFIG
export const tokenConfig = getState => {
  // get token from local storage
  const token = getState().app.token;

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // if token exists, add it to headers
  if (token) {
    config.headers['x-auth-token'] = token;
    // ducktapping for loadUser call
    axios.defaults.headers.common['x-auth-token'] = token;
  }

  return config;
};
