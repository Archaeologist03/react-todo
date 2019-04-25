import * as actionTypes from './actionTypes';

import serverEndpoint from '../../assets/utils/serverEndpoint';
import { updateInitialState } from '../actions/app';

// Add item from todo/list to done list.
export const addToDone = doneItem => {
  //  Gets new(clicked todo item) name and creates obj with its name as name property.
  const newDone = { name: doneItem };
  // Send POST req to server with new done item obj.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/adddone`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newDone }),
    })
      .then(res => res.json())
      .then(res => {
        updateInitialState();
        return res;
      })
      .then(res => {
        // if there is name that comes from server dispatches it to reducer to add it to done list and remove from list.(todo)
        if (res.item.name) {
          dispatch({
            type: actionTypes.ADD_TO_DONE,
            doneItem: res,
            errMessage: res.errMessage,
          });
          // otherwise sends null to reducer so it can remove it from list(todo) and just not add anything to done.
        } else {
          dispatch({
            type: actionTypes.ADD_TO_DONE,
            doneItem: { name: doneItem },
            errMessage: res.errMessage,
          });
        }
      })
      .catch(err => console.log(err));
  };
};

// Delete item from done list.
export const deleteFromDone = itemToDel => {
  // Delete req with id (itemToDel) to be deleted from done list.
  return dispatch => {
    fetch(`${serverEndpoint.baseUrl}/deletedone/${itemToDel._id.toString()}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemToDel }),
    })
      .then(res => res.json())
      .catch(err => console.log(err));

    dispatch({
      type: actionTypes.DELETE_FROM_DONE,
      itemToDel: itemToDel,
    });
  };
};
