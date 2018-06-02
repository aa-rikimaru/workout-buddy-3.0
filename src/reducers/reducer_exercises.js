import { FETCH_EXERCISES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EXERCISES:
      console.log('Payload: ' + action.payload);
      return action.payload;
    default:
      return state;
  }
}
