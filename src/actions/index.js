import axios from 'axios';
import exercises from '../sample_data/Exercises.json';

export const FETCH_EXERCISES = 'fetch_exercises';
export const NEW_PROGRAM = 'new_program';

export function fetchExercises() {
  return {
    type: FETCH_EXERCISES,
    payload: exercises
  };
}

export function newProgram(program) {
  return {
    type: NEW_PROGRAM,
    payload: program
  }
}
