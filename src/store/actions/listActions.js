import axios from 'axios';

import * as actionTypes from './actionTypes';
import { tokenConfig } from '../actions/authActions';

// import serverEndpoint from '../../assets/utils/serverEndpoint';
// import { updateInitialState } from '../actions/app';

// Add new item to todo/list array.
export const addToList = newItem => async (dispatch, getState) => {
  // Gets item name, makes obj with received item name.
  const newTodo = { name: newItem };
  const reqBody = JSON.stringify({ newTodo });

  // Send POST req to server with new new item obj.
  try {
    const resData = await axios.post(
      '/list/addtodo',
      reqBody,
      tokenConfig(getState),
    );

    if (resData.data.name) {
      await dispatch({
        type: actionTypes.ADD_TO_LIST,
        newItem: resData.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Delete item from todo/list.
export const deleteFromList = itemToDel => async (dispatch, getState) => {
  // Delete req with id (itemToDel) to be deleted from todo list.
  const reqBody = JSON.stringify({ itemToDel });

  try {
    await axios.delete(
      `/list/deletetodo/${itemToDel._id.toString()}`,
      tokenConfig(getState),
      reqBody,
    );

    dispatch({
      type: actionTypes.DELETE_FROM_LIST,
      itemToDel: itemToDel,
    });
  } catch (err) {
    console.log(err);
  }
};
