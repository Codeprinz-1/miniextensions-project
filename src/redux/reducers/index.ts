import { combineReducers } from 'redux';
import { classDataListReducer } from './classData';
import { usernameReducer } from './username';

export default combineReducers<ReduxState>({
  username: usernameReducer,
  classDataList: classDataListReducer,
});
