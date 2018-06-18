import { FETCH_POST } from '../actions/types';


export default function (state = {}, { type, payload }) {


    switch(type) {


        case FETCH_POST:
            return payload
        default:
            return state
    }
}
