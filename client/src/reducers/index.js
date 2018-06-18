import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PostReducer from './post_reducer';
import CreatePostReducer from './reducer_create_post';
import ImagesReducer from './images_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducer,
    post: PostReducer,
    images: ImagesReducer,
    form: formReducer
})


export default rootReducer;
