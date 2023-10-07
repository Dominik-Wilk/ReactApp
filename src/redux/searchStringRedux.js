import strContains from '../utils/strContains';

const UPDATE_SEARCHSTRING = 'app/cards/UPDATE_SEARCHSTRING';

export const stateString = state => state.searchString;

export const searchPhrase = payload => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    card => card.columnId === columnId && strContains(card.title, searchString)
  );

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};
export default searchStringReducer;
