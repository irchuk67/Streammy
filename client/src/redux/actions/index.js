import {SIGN_IN, SIGN_OUT, CREATE_STREAM, DELETE_STREAM_BY_ID, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, OPEN_POPUP, CLOSE_POPUP} from "../types";
import {createStream, deleteStream, getAllStreams, updateStream, getStream} from "../../requests/streamy";
import history from "../../history";

const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}

const signOut = () => {
    return{
        type: SIGN_OUT
    }
}

const createNewStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await createStream(formValues, userId);
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push('/')
}

const deleteStreamById = (streamId) => async dispatch => {
    await deleteStream(streamId);
    dispatch({
        type: DELETE_STREAM_BY_ID,
        payload: streamId
    })
    history.push('/')
}

const editStream = (formValues, stream) => async dispatch => {
    const response = await updateStream(formValues, stream);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
    history.push('/')
}

const fetchStream = (streamId) => async dispatch => {
    const result = await getStream(streamId);
    dispatch({
        type: FETCH_STREAM,
        payload: result.data
    })

}

const fetchStreams = () => async dispatch => {
    const result = await getAllStreams();
    dispatch({
        type: FETCH_STREAMS,
        payload: result.data
    })

}

const openPopup = () => {
    return {
        type: OPEN_POPUP
    }
}

const closePopup = () => {
    return  {
        type: CLOSE_POPUP
    }

}

export {signOut, signIn,createNewStream, fetchStreams, fetchStream, editStream, deleteStreamById, openPopup, closePopup}