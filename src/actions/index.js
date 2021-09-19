import {SIGN_IN, SIGN_OUT} from "./types";
import streams from '../apis/streams';

export const signIn = profile => {
    return {type: SIGN_IN, payload: profile}
}
export const signOut = () => {
    return {type: SIGN_OUT}
}
export const createStram = (newStream) => {

}

/*export const getStreams = async () => {
    const streams = await streams.get('/streams');
    return ({
        type: 'STREAMS_LIST',
        payload: streams
    })
}*/
