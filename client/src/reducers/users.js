import {
    FETCH_USERS
} from '../actions/types';

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload}
        default:
            return state;
    }
};
