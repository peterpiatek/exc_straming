import {SIGN_IN, SIGN_OUT} from "./types";

export const signIn = () => {
    console.log('action sin');
    return {type: SIGN_IN}
}
export const signOut = () => {
    console.log('action sout');
    return {type: SIGN_OUT}
}
