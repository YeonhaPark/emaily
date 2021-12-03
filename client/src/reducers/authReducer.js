import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if not logged in, return false
    default:
      return state; // we don't know whether is looged in or not
  }
}