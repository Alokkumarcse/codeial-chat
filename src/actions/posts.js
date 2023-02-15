/**
 * import action types
 */
import { UPDATE_POSTS } from "./actionType";

/** import fetch post url to get post */
import APIUrls from "../helpers/Urls";

/**
 * action simply return an object if they return any function then they handle by redux middleware know as redux thunk.
 * fetchPosts() action creator.
 * this is redux thunk because it is return an function, not an object.
 * 
 */
export function fetchPosts(){
  return function(dispatch){
    const url = APIUrls.fetchPosts(0,10);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch(updatePosts(data.posts));
    })
    .catch(err => console.log(err));
  }
}

/** 
 * updatePosts action_type and action creator
 */
function updatePosts(posts){
  return {
    type:UPDATE_POSTS,
    posts,
  }
}
