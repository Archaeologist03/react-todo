import * as actionTypes from '../actions/actionTypes';

const initialState = {
  text: '',
  list: [],
  done: [],
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token'),
  isLogged: false,
  msg: '',
  errData: null,
};

const updateInitialState = (state, action) => {
  const { todoList, doneList } = action;

  return {
    ...state,
    list: [...state.list, ...todoList],
    done: [...state.done, ...doneList],
  };
};

const loadUser = (state, action) => {
  return {
    ...state,
    isAuthenticated: true,
    user: action.user,
    token: localStorage.getItem('token'),
  };
};

const loginUser = (state, action) => {
  localStorage.setItem('token', action.token);
  // set id to LS for loading user on refresh(need it to get data from server in order to know which user is logged)
  localStorage.setItem('id', action.user.id);

  return {
    ...state,
    isAuthenticated: true,
    user: action.user,
    isLogged: true,
    token: action.token,
    errData: null,
  };
};

const signupUser = (state, action) => {
  localStorage.setItem('token', action.token);
  // set id to LS for loading user on refresh(need it to get data from server in order to know which user is logged)
  localStorage.setItem('id', action.user.id);

  return {
    ...state,
    isAuthenticated: true,
    user: action.user,
    isLogged: true,
    token: action.token,
    errData: null,
  };
};

const logoutUser = (state, action) => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  return {
    ...state,
    isAuthenticated: false,
    user: null,
    token: null,
    isLogged: false,
  };
};

const loginFailed = (state, action) => {
  return {
    ...state,
    isAuthenticated: false,
    token: null,
    user: null,
    isLogged: false,
    errData: action.errData,
  };
};

const clearErrors = (state, action) => {
  return {
    ...state,
    errData: null,
  };
};

const inputChange = (state, action) => {
  return {
    ...state,
    text: action.text,
  };
};

const addToList = (state, action) => {
  return {
    ...state,
    list: [...state.list, action.newItem],
  };
};

const deleteFromList = (state, action) => {
  const newList = state.list.filter(item => item._id !== action.itemToDel._id);
  return {
    ...state,
    list: newList,
  };
};

const addtoDone = (state, action) => {
  // Check items that are not null and that does not exist on list yet.
  const newList = state.list.filter(item => {
    return item.name !== action.doneItem.item.name;
    // && action.doneItem.name !== null;
  });
  const newDoneList = [...state.done, action.doneItem.item];

  return {
    ...state,
    list: newList,
    done: newDoneList,
  };
};

const deleteFromDone = (state, action) => {
  const newDoneList = state.done.filter(
    item => item._id !== action.itemToDel._id,
  );
  return {
    ...state,
    done: newDoneList,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return loadUser(state, action);

    case actionTypes.LOGIN_USER:
      return loginUser(state, action);

    case actionTypes.SIGNUP_USER:
      return signupUser(state, action);

    case actionTypes.LOGOUT_USER:
      return logoutUser(state, action);

    case actionTypes.LOGIN_FAILED:
      return loginFailed(state, action);

    case actionTypes.CLEAR_ERRORS:
      return clearErrors(state, action);

    case actionTypes.UPDATE_INITIAL_STATE:
      return updateInitialState(state, action);

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
