import { FETCH_EXERCISES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EXERCISES:
      return [ action.payload.data ];
    default:
      return state;
  }
}
