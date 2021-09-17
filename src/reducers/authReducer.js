import {SIGN_IN, SIGN_OUT} from "../actions/types";
const INITIAL_STATE = {isSignedIn: null, profile: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, profile: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, profile: null} // clearing user profile data
        default:
            return state
    }
}
