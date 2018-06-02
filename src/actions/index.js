import axios from 'axios';

export const FETCH_EXERCISES = 'fetch_exercises';

const ROOT_URL = 'https://wger.de/api/v2';

export function fetchExercises() {
  let exerciseList = [];
  const getAllExercises = (url) => {
    if (url) {
      axios.get(url)
        .then((res) => {
          exerciseList = exerciseList.concat(res.data.results);
          getAllExercises(res.data.next);
        });
    }
  }

  getAllExercises(`${ROOT_URL}/exercise`);

  return {
    type: FETCH_EXERCISES,
    payload: exerciseList
  };
}
