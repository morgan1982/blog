import { PREVIEW_POST } from '../actions/types.js';


export const previewPost = (values) => {

    console.log("preview action", values)

    return {
        type: PREVIEW_POST,
        payload: values
    }
}
