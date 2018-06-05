import axios from 'axios';

export const FETCH_EXERCISES = 'fetch_exercises';

const ROOT_URL = 'https://wger.de/api/v2';

var requestList = [];

export function fetchExercises() {
  const request = axios.get(`${ROOT_URL}/exercise`)
    .then((res) => {
      requestList.push(res.data);
      return continueFetch(res.data.next);
    });

  return {
    type: 'FETCH_EXERCISES',
    payload: requestList
  };
}

const continueFetch = (url) => {
  if (url) {
    let request = axios.get(url)
      .then((res) => {
        console.log(res.data);
        requestList.push(request);
        continueFetch(res.data.next);
      });
  } else {
    return {
      type: 'FETCH_EXERCISES',
      payload: requestList
    }
  }
}



export function continueFetchExercises(url) {
  const request = axios.get(url);

  if (request.data.next) continueFetchExercises(request.data.next);

  return {
    type: 'FETCH_EXERCISES',
    payload: request
  }
}
