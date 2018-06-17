import { CREATE_POST } from '../actions/types';


export default function (state= "image", {type, payload}) {

    // console.log("inside the create reducer", payload);
    switch (type) {


        case CREATE_POST:
            return payload
        default:
            return state;
    }
}
