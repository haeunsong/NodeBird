// post reducer와 user reducer를 하나로 묶어줄 부모(루트) reducer!
import {combineReducers} from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;


