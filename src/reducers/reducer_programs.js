import { NEW_PROGRAM } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case NEW_PROGRAM:
      return action.payload;
    default:
      return state;
  }
}
