export const FETCH_POSTS = 'fetch_posts';


export function fetchPosts() {
    const data = "hello";
    return {
        type: FETCH_POSTS,
        payload: data
    };
}