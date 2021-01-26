import { ADD_NOTE, FETCH_NOTES } from '../actions/types';

const initialState = {
  noteList: {}
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state
            };
        case FETCH_NOTES:
            return {
                noteList: action.payload
            };
        default:
        return state;
    }
}

export default noteReducer;