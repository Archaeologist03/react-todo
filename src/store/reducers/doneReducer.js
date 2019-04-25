// import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//   list: [],
//   done: [],
// };

// const addtoDone = (state, action) => {
//   // Check items that are not null and that does not exist on list yet.
//   const newList = state.list.filter(item => {
//     return item.name !== action.doneItem.item.name;
//     // && action.doneItem.name !== null;
//   });
//   const newDoneList = [...state.done, action.doneItem.item];

//   return {
//     ...state,
//     list: newList,
//     done: newDoneList,
//   };
// };

// const deleteFromDone = (state, action) => {
//   const newDoneList = state.done.filter(
//     item => item._id !== action.itemToDel._id,
//   );
//   return {
//     ...state,
//     done: newDoneList,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_TO_DONE:
//       return addtoDone(state, action);
//     case actionTypes.DELETE_FROM_DONE:
//       return deleteFromDone(state, action);
//     default:
//       return state;
//   }
// };

// export default reducer;
