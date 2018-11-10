import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return {fetching:true};

    case SUCCESS:
    return {...state, characters: [...state.characters, action.payload],
    fetching:false};

    case FAILURE:
    return {error: `The Dark Force has clouded the server`, fetching: false}

    default:
      return state;
  }
};


