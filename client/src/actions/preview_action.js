import { PREVIEW_POST } from '../actions/types.js';
import axios from 'axios';

export const previewPost = id => async dispatch => {

    const res = await axios.get(`/selectimage/${id}`);

    dispatch({
        type: PREVIEW_POST,
        payload: res.data
    })
}
