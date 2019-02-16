import * as actionTypes from './actionTypes';

export const inputChange = text => {
  return {
    type: actionTypes.INPUT_CHANGE,
    text: text.target.value,
  };
};

export const addToList = newItem => {
  return {
    type: actionTypes.ADD_TO_LIST,
    newItem: newItem,
  };
};

export const deleteFromList = itemToDel => {
  return {
    type: actionTypes.DELETE_FROM_LIST,
    itemToDel: itemToDel,
  };
};

export const addToDone = doneItem => {
  return {
    type: actionTypes.ADD_TO_DONE,
    doneItem: doneItem,
  };
};

export const deleteFromDone = itemToDel => {
  return {
    type: actionTypes.DELETE_FROM_DONE,
    itemToDel: itemToDel,
  }
}
