import * as actionTypes from './actionTypes';

import serverEndpoint from '../../assets/utils/serverEndpoint';

const uuid = require('uuid');

// Setting initial state with data from server.
// Called when app mounts.
export const updateInitialState = () => {
  return dispatch => {
    fetch(serverEndpoint.baseUrl)
      .then(res => res.json())
      .then(res => {
        console.log(res.users[0].todo);
        dispatch({
          type: actionTypes.UPDATE_INITIAL_STATE,
          payload: {
            todo: res.users[0].todo,
            done: res.users[0].done,
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

// Add new item to todo/list array.
export const addToList = newItem => {
  // Gets item name, makes obj with id and received item name.
  const newTodo = { id: uuid(), name: newItem };

  // Send POST req to server with new new item obj.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/addtodo`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newTodo }),
    })
      .then(res => res.json())
      // .then(res => console.log(res))
      .catch(err => console.log(err));

    // Dispatches new item obj to reducer
    dispatch({
      type: actionTypes.ADD_TO_LIST,
      newItem: newTodo,
    });
  };
};

// Add item from todo/list to done list.
export const addToDone = doneItem => {
  //  Gets new(clicked todo item) name and creates obj with it and new id.
  const newDone = { id: uuid(), name: doneItem };

  // Send POST req to server with new done item obj.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/adddone`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newDone }),
    })
      .then(res => res.json())
      .catch(err => console.log(err));

    dispatch({
      type: actionTypes.ADD_TO_DONE,
      doneItem: newDone,
    });
  };
};

// Delete item from todo/list.
export const deleteFromList = itemToDel => {
  // Delete req with id (itemToDel) to be deleted from todo list.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/deletetodo/${itemToDel}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemToDel }),
    })
      .then(res => res.json())
      // .then(res => console.log(res, 'from todo delete'))
      .catch(err => console.log(err));

    dispatch({
      type: actionTypes.DELETE_FROM_LIST,
      itemToDel: itemToDel,
    });
  };
};

// Delete item from done list.
export const deleteFromDone = itemToDel => {
  // Delete req with id (itemToDel) to be deleted from done list.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/deletedone/${itemToDel}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemToDel }),
    })
      .then(res => res.json())
      // .then(res => console.log(res, 'from done delete'))
      .catch(err => console.log(err));

    dispatch({
      type: actionTypes.DELETE_FROM_DONE,
      itemToDel: itemToDel,
    });
  };
};
