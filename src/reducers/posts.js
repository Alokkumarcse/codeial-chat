import { UPDATE_POSTS } from "../actions/actionType";
/**
 * Reducer is pure function, which have no any side effects and completely dependent on their parameters.
 * Posts reducer 
 */
export default function posts(state=[], action){
  switch(action.type){
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}