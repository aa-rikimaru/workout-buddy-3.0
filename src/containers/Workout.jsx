import React, { Component } from 'react';

import Exercise from './Exercise.jsx';

class Workout extends Component {
  render() {
    let exerciseOne = {
      name: "Barbell Squats",
      sets: 3,
      reps: 5,
      weight: 155
    };

    let exerciseTwo = {
      name: "Bench Press",
      sets: 3,
      reps: 5,
      weight: 95
    }
    return (
      <div className="list-group">
        <Exercise exercise={exerciseOne}/>
        <Exercise exercise={exerciseTwo}/>
      </div>
    )
  }
}

export default Workout;
