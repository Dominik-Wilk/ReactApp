import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import strContains from '../utils/strContains';
import { nanoid } from 'nanoid';

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    card => card.columnId === columnId && strContains(card.title, searchString)
  );

export const getFavCards = state =>
  state.cards.filter(card => card.isFavourite);

export const getAllColumns = state => state.columns;
export const getAllLists = state => state.lists;

export const getListById = ({ lists }, listId) => {
  return lists.find(list => list.id === listId);
};
export const getColumnsByList = ({ columns }, listId) => {
  return columns.filter(column => column.listId === listId);
};

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const searchPhrase = payload => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});
export const toggleCardFav = payload => ({
  type: 'TOGGLE_CARD_FAVOURITE',
  payload,
});

export const stateString = state => state.searchString;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: nanoid() }],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: nanoid() }],
      };

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };

    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: nanoid() }],
      };

    case 'TOGGLE_CARD_FAVOURITE':
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload
            ? { ...card, isFavourite: !card.isFavourite }
            : card
        ),
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
  preloadedState: initialState,
});

export default store;
