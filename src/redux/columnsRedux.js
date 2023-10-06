import { nanoid } from 'nanoid';

export const getAllColumns = state => state.columns;
export const getColumnsByList = ({ columns }, listId) => {
  return columns.filter(column => column.listId === listId);
};

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: nanoid() }];
    default:
      return statePart;
  }
};
export default columnsReducer;
