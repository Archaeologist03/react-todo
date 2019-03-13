import * as actionTypes from './actionTypes';

const uuid = require('uuid');

// Setting initial state with data from server.
// Called when app mounts.
export const updateInitialState = () => {
  return dispatch => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_INITIAL_STATE,
          payload: {
            todo: res.todo,
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

// Add new item to todo/list array.
export const addToList = newItem => {
  // Gets item name, makes obj with id and received item name.
  const newTodo = { id: uuid(), name: newItem };

  // Send POST req to server with new new item obj.
  return dispatch => {
    fetch('http://localhost:5000/addtodo', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newTodo }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // Dispatches new item obj to reducer
    dispatch({
      type: actionTypes.ADD_TO_LIST,
      newItem: newTodo,
    });
  };
};

export const deleteFromList = itemToDel => {
  return {
    type: actionTypes.DELETE_FROM_LIST,
    itemToDel: itemToDel,
  };
};

// Add item from todo/list to done list.
export const addToDone = doneItem => {
  //  Gets new(clicked todo item) name and creates obj with it and new id.
  const newDone = { id: uuid(), name: doneItem };

  // Send POST req to serve with new done item obj.
  return dispatch => {
    fetch('http://localhost:5000/adddone', {
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

export const deleteFromDone = itemToDel => {
  return {
    type: actionTypes.DELETE_FROM_DONE,
    itemToDel: itemToDel,
  };
};
