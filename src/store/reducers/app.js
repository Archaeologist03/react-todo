import * as actionTypes from '../actions/actionTypes';

const initialState = {
  text: '',
  list: [],
  done: [],
};

const inputChange = (state, action) => {
  if (action.type === actionTypes.INPUT_CHANGE) {
    return {
      ...state,
      text: action.text,
    };
  }
};

const addToList = (state, action) => {
  return {
    ...state,
    list: [...state.list, action.newItem],
  };
};

const deleteFromList = (state, action) => {
  const newList = state.list.filter(item => item !== action.itemToDel);
  return {
    ...state,
    list: newList,
  };
};

const addtoDone = (state, action) => {
  const newList = state.list.filter(item => item !== action.doneItem);
  const newDoneList = [...state.done, action.doneItem];
  return {
    ...state,
    list: newList,
    done: newDoneList,
  };
};

const deleteFromDone = (state, action) => {
  const newDoneList = state.done.filter(item => item !== action.itemToDel);
  return {
    ...state,
    done: newDoneList,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return inputChange(state, action);
    case actionTypes.ADD_TO_LIST:
      return addToList(state, action);
    case actionTypes.DELETE_FROM_LIST:
      return deleteFromList(state, action);
    case actionTypes.ADD_TO_DONE:
      return addtoDone(state, action);
    case actionTypes.DELETE_FROM_DONE:
      return deleteFromDone(state, action);
    default:
      return state;
  }
};

export default reducer;
