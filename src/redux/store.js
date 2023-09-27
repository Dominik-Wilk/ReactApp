import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  if (action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.payload] };
  if (action.type === 'ADD_CARD') return { ...state, cards: [...state.cards, action.payload] };
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
