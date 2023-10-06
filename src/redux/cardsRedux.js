import { nanoid } from 'nanoid';

export const getFavCards = state =>
  state.cards.filter(card => card.isFavourite);

export const toggleCardFav = payload => ({
  type: 'TOGGLE_CARD_FAVOURITE',
  payload,
});
export const addCard = payload => ({ type: 'ADD_CARD', payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: nanoid() }];
    case 'TOGGLE_CARD_FAVOURITE':
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
