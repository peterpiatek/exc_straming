import {
    NEW_STREAM,
    SIGN_IN,
    SIGN_OUT,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM
} from "./types";
import streams from '../apis/streams';

export const signIn = profile => {
    return {type: SIGN_IN, payload: profile}
}
export const signOut = () => {
    return {type: SIGN_OUT}
}
export const createStream = newStream => async dispatch => {
    console.log(newStream);
    const response = await streams.post('/streams', newStream);
    dispatch({type: NEW_STREAM, payload: response.data})
}

export const deleteStream = streamId => async dispatch => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({type: DELETE_STREAM, payload: streamId})
}

export const editStream = (id, streamEdit) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, streamEdit);
    dispatch({type: EDIT_STREAM, payload: response.data});
}

export const fetchStream = streamId => async dispatch => {
    const response = await streams.get(`/streams/${streamId}`)
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    console.log(response);
    dispatch({type: FETCH_STREAMS, payload: response.data})
}
