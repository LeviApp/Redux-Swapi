import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export const initialState = {
  characters: [],
  fetching: false,
  error: null,
}

export default combineReducers({
  charsReducer
});
