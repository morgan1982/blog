import { FETCH_POSTS, FETCH_POST } from './types';
import axios from 'axios';

//FETCH ALL POSTS
export function fetchPosts() {
    const data = "hello";
    return {
        type: FETCH_POSTS,
        payload: data
    };
}
// FETCHES THE POST WITH THE ID
export const fetchPost = id => async dispatch =>  {

    const res = await axios.get(`/selectPost/${id}`);
    // console.log("inside post action", res);
    const { title, body } = res.data;
    console.log("fetchpost action", title, body);

    dispatch({
        type: FETCH_POST,
        payload: {
            title,
            body
        }
    })
}


// CREATES POST
// export function createPost() {
//     const data = "i created the post";
//     return {
//         type: CREATE_POST,
//         payload: data
//     }
// }
