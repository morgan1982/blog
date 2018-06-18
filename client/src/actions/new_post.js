import axios from 'axios';
import { CREATE_POST } from '../actions/types';

export const createPost = (values, imageFile, callback) => async dispatch => {

    console.log("values createPost action", values,"imagefile", imageFile);
    console.log("name category",values.imageName, values.category);

    const { imageName, category} = values;

    const fd = new FormData();
    fd.append("sampleImage", imageFile);
    fd.append("name", imageName);
    fd.append("category", category);

    const res = await axios.post('/addimage', fd);
    callback(`action callback ${res.data.url}`);

    dispatch({
        type: CREATE_POST,
        payload: res.data
    })


}
