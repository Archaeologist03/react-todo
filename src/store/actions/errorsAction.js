import * as actionTypes from './actionTypes';

export function loginFailed(errors) {
  return dispatch => {
    return dispatch({
      type: actionTypes.LOGIN_FAILED,
      errData: errors,
    });
  };
}

export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};
