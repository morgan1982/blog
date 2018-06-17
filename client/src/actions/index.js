import { FETCH_POSTS, CREATE_POST } from './types';

export function fetchPosts() {
    const data = "hello";
    return {
        type: FETCH_POSTS,
        payload: data
    };
}

export function createPost() {
    const data = "i created the post";
    return {
        type: CREATE_POST,
        payload: data
    }
}
