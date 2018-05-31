import { combineReducers } from 'redux';
import ExercisesReducer from './reducer_exercises';

const rootReducer = combineReducers({
  exercises: ExercisesReducer,
});

export default rootReducer;
