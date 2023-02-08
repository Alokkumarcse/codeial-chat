import { combineReducers } from "redux";

import posts from './posts';

/** 
 * creating combine reducer, which is hold all reducers we have created.
 * it is use in creating Redux store.
*/
export default combineReducers(
  {
    posts,
  }
) 