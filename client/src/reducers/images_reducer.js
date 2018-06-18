import { PREVIEW_POST } from '../actions/types';


export default function ( state = [], { type, payload }) {


    switch(type) {


        case PREVIEW_POST:
            const images = [...state];
            images.push(payload);
            return images;
        default:
            return state
    }
}
