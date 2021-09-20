import {
    NEW_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM
} from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            // return {...state};
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case NEW_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}
