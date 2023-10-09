import { nanoid } from 'nanoid';
import { createSelector } from 'reselect';

const ADD_LIST = 'app/lists/ADD_LIST';

const selectLists = state => state.lists;
const selectListId = (state, listId) => listId;

export const getAllLists = createSelector([selectLists], lists => lists);
export const getListById = createSelector(
  [selectLists, selectListId],
  (lists, listId) => lists.find(list => list.id === listId)
);
// export const getAllLists = state => state.lists;

// export const getListById = ({ lists }, listId) => {
//   return lists.find(list => list.id === listId);
// };

export const addList = payload => ({ type: ADD_LIST, payload });

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    default:
      return statePart;
  }
};
export default listsReducer;
