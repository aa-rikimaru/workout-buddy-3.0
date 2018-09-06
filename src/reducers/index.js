import { combineReducers } from 'redux';
import ExercisesReducer from './reducer_exercises';
import ProgramReducer from './reducer_programs';

const rootReducer = combineReducers({
  exercises: ExercisesReducer,
  program: ProgramReducer,
});

export default rootReducer;
