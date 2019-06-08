import * as actionTypes from '../actions/actionTypes';
import appReducer from './appReducer';

// #todo ====== LOCAL STORAGE call needs to be mocked to work. For now it is set to null. ========

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

// =============== AUTH & INITIN TESTS =================

describe('updateInitialState', () => {
  const state = {
    ...initialState,
    list: [{ name: 'task1', id: 1 }],
    done: [{ name: 'task2', id: 2 }],
  };

  it('should update list and done arrays on initial run', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.UPDATE_INITIAL_STATE,
        todoList: [{ name: 'task1', id: 1 }],
        doneList: [{ name: 'task2', id: 2 }],
      }),
    ).toEqual(state);
  });
});

describe('loadUser', () => {
  const state = {
    ...initialState,
    isAuthenticated: true,
    user: { name: 'user1', id: 1 },
    token: null,
  };

  // Need to mock localStorage to test token. For now its null which should not be the case.
  it('should set auth to true and receive user', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.LOAD_USER,
        isAuthenticated: true,
        user: { name: 'user1', id: 1 },
        token: null,
      }),
    ).toEqual(state);
  });
});

describe('loginUser', () => {
  const state = {
    ...initialState,
    isAuthenticated: true,
    user: { name: 'user1', id: 1 },
    isLogged: true,
    errData: null,
    token: null,
  };

  it('should set auth to true, get in user, set isLogged to true and errData to null', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.LOGIN_USER,
        isAuthenticated: true,
        user: { name: 'user1', id: 1 },
        isLogged: true,
        errData: null,
        token: null,
      }),
    ).toEqual(state);
  });
});

describe('signupUser', () => {
  const state = {
    ...initialState,
    isAuthenticated: true,
    user: { name: 'user1', id: 1 },
    isLogged: true,
    errData: null,
    token: null,
  };

  it('should set auth to true, get in user, set isLogged to true and errData to null', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.SIGNUP_USER,
        isAuthenticated: true,
        user: { name: 'user1', id: 1 },
        isLogged: true,
        errData: null,
        token: null,
      }),
    ).toEqual(state);
  });
});

describe('logoutUser', () => {
  const state = {
    ...initialState,
    isAuthenticated: false,
    user: null,
    token: null,
    isLogged: false,
  };

  it('should logout user. Set isAuthenticated to false, user to null, clear token and set isLogged to false', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.LOGOUT_USER,
        isAuthenticated: false,
        user: null,
        token: null,
        isLogged: false,
      }),
    ).toEqual(state);
  });
});

describe('loginFailed', () => {
  const state = {
    ...initialState,
    isAuthenticated: false,
    token: null,
    user: null,
    isLogged: false,
    errData: 'Error occured while logging',
  };

  it('should set user and token to null, isAuthenticated and isLogged to false and have errData message', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.LOGIN_FAILED,
        isAuthenticated: false,
        token: null,
        user: null,
        isLogged: false,
        errData: 'Error occured while logging',
      }),
    ).toEqual(state);
  });
});

describe('clearErrors', () => {
  const state = {
    ...initialState,
    errData: null,
  };

  it('should set errData to null', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.LOGIN_FAILED,
        errData: null,
      }),
    ).toEqual(state);
  });
});

// =============== INPUTS  TESTS =================

describe('inputChange', () => {
  const state = {
    ...initialState,
    text: 'new task item',
  };

  it('should set text to new text that comes from "action" ', () => {
    expect(
      appReducer(initialState, {
        type: actionTypes.INPUT_CHANGE,
        text: 'new task item',
      }),
    ).toEqual(state);
  });
});

describe('addToList', () => {
  const oldState = {
    ...initialState,
    list: [{ name: 'task1', id: 1 }],
  };

  const newState = {
    ...initialState,
    list: [{ name: 'task1', id: 1 }, { name: 'item2', _id: '2' }],
  };

  it('should update state with new item, in list array', () => {
    expect(
      appReducer(oldState, {
        type: actionTypes.ADD_TO_LIST,
        newItem: { name: 'item2', _id: '2' },
      }),
    ).toEqual(newState);
  });
});

describe('deleteFromList', () => {
  const oldState = {
    ...initialState,
    list: [{ name: 'item1', _id: '1' }, { name: 'item2', _id: '2' }],
  };
  const newState = {
    ...initialState,
    list: [{ name: 'item1', _id: '1' }],
  };

  it('should delete item from list', () => {
    expect(
      appReducer(oldState, {
        type: actionTypes.DELETE_FROM_LIST,
        itemToDel: { name: 'item2', _id: '2' },
      }),
    ).toEqual(newState);
  });
});

describe('addtoDone', () => {
  const oldState = {
    ...initialState,
    list: [{ name: 'item1', _id: '1' }, { name: 'item2', _id: '2' }],
    done: [],
  };

  const newState = {
    ...initialState,
    list: [{ name: 'item1', _id: '1' }],
    done: [{ name: 'item2', _id: '2' }],
  };

  it('should move item from list to done array based on given id', () => {
    expect(
      appReducer(oldState, {
        type: actionTypes.ADD_TO_DONE,
        doneItem: {
          item: { name: 'item2', _id: '2' },
          message: 'Added item2 to done list',
        },
      }),
    ).toEqual(newState);
  });
});

describe('deleteFromDone', () => {
  const oldState = {
    ...initialState,
    done: [{ name: 'item1', _id: '1' }, { name: 'item2', _id: '2' }],
  };

  const newState = {
    ...initialState,
    done: [{ name: 'item1', _id: '1' }],
  };

  it('should delete item from done array', () => {
    expect(
      appReducer(oldState, {
        type: actionTypes.DELETE_FROM_DONE,
        itemToDel: { name: 'item2', _id: '2' },
      }),
    ).toEqual(newState);
  });
});
