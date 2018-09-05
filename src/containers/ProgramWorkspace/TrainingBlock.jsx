import React, { Component } from 'react';

import Workout from './Workout.jsx';
import './css/TrainingBlock.css';

class TrainingBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: props.cycle
    };
  }

  render() {
    /*console.log(this.state.workouts);
    let names = ['Aaron', 'Benjamin', 'Chris'];
    const workoutsDisplay = this.state.workouts.map((workout) =>
      <Workout
        key = {workout.cycle + ' ' + workout.day}
        exerciseScheme = {workout.exerciseScheme}
        day = {workout.day}
      />
    );
    console.log(workoutsDisplay);*/
    return (
      <div className="row training-block">
        {/* {workoutsDisplay} */}
      </div>
    )
  }
}

export default TrainingBlock;
