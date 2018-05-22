import { FETCH_POSTS } from '../actions';


export default function (state = [], { type, payload }) {


    switch(type) {

        case FETCH_POSTS:
            return payload.data;
        default:
            return state;
    }
}