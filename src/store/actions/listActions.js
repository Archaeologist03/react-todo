import * as actionTypes from './actionTypes';

import serverEndpoint from '../../assets/utils/serverEndpoint';
import { updateInitialState } from '../actions/app';

// Add new item to todo/list array.
export const addToList = newItem => {
  // Gets item name, makes obj with received item name.
  const newTodo = { name: newItem };

  // Send POST req to server with new new item obj.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/addtodo`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newTodo }),
    })
      .then(res => res.json())
      .then(res => {
        // Calls state update, so state receives newest added item _id.
        updateInitialState();
        return res;
      })
      .then(res => {
        // Dispatches new item obj to reducer if item doesn't exist.
        // if there is a name from server it means item does not exist in db so we add it to ui as well.
        if (res.name) {
          dispatch({
            type: actionTypes.ADD_TO_LIST,
            newItem: res,
          });
        }
      })
      .catch(err => console.log(err));
  };
};

// Delete item from todo/list.
export const deleteFromList = itemToDel => {
  // Delete req with id (itemToDel) to be deleted from todo list.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/deletetodo/${itemToDel._id.toString()}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemToDel }),
    })
      .then(res => res.json())
      .catch(err => console.log(err));

    dispatch({
      type: actionTypes.DELETE_FROM_LIST,
      itemToDel: itemToDel,
    });
  };
};
