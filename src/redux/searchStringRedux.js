import { createSelector } from 'reselect';
import strContains from '../utils/strContains';

const UPDATE_SEARCHSTRING = 'app/cards/UPDATE_SEARCHSTRING';

const selectString = state => state.searchString;
const selectCards = state => state.cards;
const selectColumnId = (state, columnId) => columnId;

export const stateString = createSelector(
  [selectString],
  searchString => searchString
);

export const getFilteredCards = createSelector(
  [selectCards, selectString, selectColumnId],
  (cards, searchString, columnId) =>
    cards.filter(
      card =>
        card.columnId === columnId && strContains(card.title, searchString)
    )
);

export const searchPhrase = payload => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};
export default searchStringReducer;
