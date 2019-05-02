import axios from 'axios';

import * as actionTypes from './actionTypes';
import { tokenConfig } from './authActions';

import { baseUrl } from '../../assets/utils/serverEndpoint';
import { updateInitialState } from '../actions/app';

// ADD ITEM FROM TODO LIST TO DONE LIST
export const addToDone = doneItem => async (dispatch, getState) => {
  //  Gets new(clicked todo item) name and creates obj with its name as name property.
  const newDone = { name: doneItem };
  const reqBody = JSON.stringify({ newDone });

  try {
    // Send POST req to server with new done item obj.
    const resData = await axios.post(
      `${baseUrl}/done/adddone`,
      reqBody,
      tokenConfig(getState),
    );

    // if there is name that comes from server dispatches it to reducer to add it to done list and remove from list.(todo)
    if (resData.data.item.name) {
      await dispatch({
        type: actionTypes.ADD_TO_DONE,
        doneItem: resData.data,
        message: resData.data.message,
      });
    }
    // otherwise sends null to reducer so it can remove it from list(todo) and just not add anything to done.
    else {
      await dispatch({
        type: actionTypes.ADD_TO_DONE,
        doneItem: resData.data,
        message: resData.data.message,
      });
    }
    updateInitialState();
  } catch (err) {
    console.log(err);
  }
};

// Delete item from done list.
export const deleteFromDone = itemToDel => async (dispatch, getState) => {
  // Delete req with id (itemToDel._id) param to be deleted from done list.
  await axios.delete(
    `${baseUrl}/done/deletedone/${itemToDel._id.toString()}`,
    tokenConfig(getState),
  );
  dispatch({
    type: actionTypes.DELETE_FROM_DONE,
    itemToDel: itemToDel,
  });
};
