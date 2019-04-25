// import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//   list: [],
// };

// const addToList = (state, action) => {
//   return {
//     ...state,
//     list: [...state.list, action.newItem],
//   };
// };

// const deleteFromList = (state, action) => {
//   const newList = state.list.filter(item => item._id !== action.itemToDel._id);
//   return {
//     ...state,
//     list: newList,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_TO_LIST:
//       return addToList(state, action);
//     case actionTypes.DELETE_FROM_LIST:
//       return deleteFromList(state, action);
//     default:
//       return state;
//   }
// };

// export default reducer;
