import axios from 'axios';

import * as actionTypes from './actionTypes';

import { baseUrl } from '../../assets/utils/serverEndpoint';

// Setting initial state with data from server.
// Called when app mounts.
export const updateInitialState = () => async (dispatch, getState) => {
  const resData = await axios.get(baseUrl);

  dispatch({
    type: actionTypes.UPDATE_INITIAL_STATE,
    todoList: resData.data.list,
    doneList: resData.data.done,
  });
};

// Text for new todo.
export const inputChange = text => {
  return {
    type: actionTypes.INPUT_CHANGE,
    text: text.target.value,
  };
};
