import { nanoid } from 'nanoid';
import { createSelector } from 'reselect';

const ADD_CARD = 'app/cards/ADD_CARD';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';
const TOGGLE_CARD_FAVOURITE = 'app/cards/TOGGLE_CARD_FAVOURITE';

// export const getFavCards = state =>
//   state.cards.filter(card => card.isFavourite);

const selectCards = state => state.cards;

export const getFavCards = createSelector([selectCards], cards =>
  cards.filter(card => card.isFavourite)
);

export const toggleCardFav = payload => ({
  type: TOGGLE_CARD_FAVOURITE,
  payload,
});
export const addCard = payload => ({ type: ADD_CARD, payload });

export const removeCard = payload => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case TOGGLE_CARD_FAVOURITE:
      return statePart.map(card =>
        card.id === action.payload
          ? { ...card, isFavourite: !card.isFavourite }
          : card
      );
    default:
      return statePart;
  }
};
export default cardsReducer;
