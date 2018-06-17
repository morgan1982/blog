import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import CreatePostReducer from './reducer_create_post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducer,
    post: CreatePostReducer,
    form: formReducer
})


export default rootReducer;
