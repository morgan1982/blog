import axios from 'axios';
import { CREATE_POST } from '../actions/types';

export const createPost = (values, imageFile, callback) => async dispatch => {

    // console.log("values", values,"imagefile", imageFile);
    // console.log(values.imageName, values.category)

    const { imageName, category} = values;

    const fd = new FormData();
    fd.append("sampleImage", imageFile);
    fd.append("name", imageName);
    fd.append("category", category);

    const res = await axios.post('/addimage', fd);
    // console.log("resolution from the back", res.data);
    // const path = res.data.url; // image path
    callback(`action callback ${res.data.url}`);

    dispatch({
        type: CREATE_POST,
        payload: res.data
    })


}
