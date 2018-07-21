import axios from 'axios';
import exercises from '../sample_data/Exercises.json';

export const FETCH_EXERCISES = 'fetch_exercises';

export function fetchExercises() {


  return {
    type: 'FETCH_EXERCISES',
    payload: exercises
  };
}
