import axios from 'axios';

import * as actionTypes from './actionTypes';

// import serverEndpoint from '../../assets/utils/serverEndpoint';
// import { updateInitialState } from '../actions/app';

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  const currentToken = localStorage.getItem('token');
  const currentTokenId = localStorage.getItem('id');
  const stateToken = getState().app.token;

  // if have all proceed to make req for user with id param
  if (currentToken && currentTokenId && stateToken) {
    const user = await axios.get(
      `/auth/loaduser/${currentTokenId}`,
      tokenConfig(getState),
    );

    if (user) {
      dispatch({
        type: actionTypes.LOAD_USER,
        user: user.data,
      });
    }
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
    const resData = await axios.post('/auth/login', bodyData, config);
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
    const resData = await axios.post('/auth/signup', bodyData, config);
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
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

// TOKEN CONFIG
export const tokenConfig = getState => {
  // get token from local storage
  const token = getState().app.token;
  // const token = localStorage.getItem('token');

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // if token exists, add it to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
