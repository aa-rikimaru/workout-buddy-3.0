import axios from 'axios';

export const FETCH_EXERCISES = 'fetch_exercises';

const ROOT_URL = 'https://wger.de/api/v2';

export function fetchExercises() {
  const request = axios.get(`${ROOT_URL}/exercise`);

  return {
    type: FETCH_EXERCISES,
    payload: request
  };
}
