import { nanoid } from 'nanoid';
import { createSelector } from 'reselect';

const ADD_COLUMN = 'app/columns/ADD_COLUMN';

const selectColumns = state => state.columns;
const selectListId = (state, listId) => listId;

// export const getAllColumns = state => state.columns;

// export const getColumnsByList = ({ columns }, listId) => {
//   return columns.filter(column => column.listId === listId);
// };

export const getAllColumns = createSelector(
  [selectColumns],
  columns => columns
);

export const getColumnsByList = createSelector(
  [selectColumns, selectListId],
  (columns, listId) => columns.filter(column => column.listId === listId)
);

export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: nanoid() }];
    default:
      return statePart;
  }
};
export default columnsReducer;
