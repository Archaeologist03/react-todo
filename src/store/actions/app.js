import * as actionTypes from './actionTypes';

import serverEndpoint from '../../assets/utils/serverEndpoint';

// Setting initial state with data from server.
// Called when app mounts.
export const updateInitialState = () => {
  return dispatch => {
    fetch(serverEndpoint.baseUrl)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_INITIAL_STATE,
          payload: {
            todo: res.list,
            done: res.done,
          },
        });
      });
  };
};

// Text for new todo.
export const inputChange = text => {
  return {
    type: actionTypes.INPUT_CHANGE,
    text: text.target.value,
  };
};
