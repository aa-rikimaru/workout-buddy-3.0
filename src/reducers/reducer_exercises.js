import { FETCH_EXERCISES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EXERCISES:
      //return state.concat([action.payload.data]);
      //return [ action.payload.data, ...state];
      return action.payload;
    default:
      return state;
  }
}
