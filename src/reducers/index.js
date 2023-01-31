import { combineReducers } from "redux";

import postReducer from './posts';

/** creating combine reducer */
export default combineReducers(
  {
    postReducer,
  }
) 