import { nanoid } from 'nanoid';

const ADD_LIST = 'app/lists/ADD_LIST';

export const getListById = ({ lists }, listId) => {
  return lists.find(list => list.id === listId);
};
export const getAllLists = state => state.lists;

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
