import history from "../history";
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
export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth.profile;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type: NEW_STREAM, payload: response.data});
//    programmatic navigation to get user back to "/" after success api response
    history.push('/');
}

export const deleteStream = streamId => async dispatch => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({type: DELETE_STREAM, payload: streamId})
    history.push('/');
}

export const editStream = (id, streamEdit) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, streamEdit);
    dispatch({type: EDIT_STREAM, payload: response.data});
    history.push('/');
}

export const fetchStream = streamId => async dispatch => {
    const response = await streams.get(`/streams/${streamId}`)
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
}
