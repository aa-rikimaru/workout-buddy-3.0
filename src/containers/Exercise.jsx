import React, { Component } from 'react';

import './css/Exercise.css';

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: this.props.exercise
    }
  }

  render() {
    let { name, sets, reps, weight } = this.state.exercise;
    return (
      <div className="list-group-item exercise-display">
        <input type="text"
          name="exerciseName"
          placeholder="Exercise"
          value={name}/>
        <p>Set: {sets}</p>
        <p>Reps: {reps}</p>
        <p>Weight: {weight}</p>
      </div>
    )
  }
}

export default Exercise;
