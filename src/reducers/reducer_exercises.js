export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EXERCISES:
      return [];
    default:
      return state;
  }
}
