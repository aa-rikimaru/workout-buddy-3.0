import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LinkButton from '../components/Buttons/LinkButton.jsx';
import ProgramFormModal from './Modals/ProgramFormModal.jsx';

class WorkoutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseList: [],
      error: null,
      isLoaded: true,
      user: {
        userName: 'Aaron Lee',
        benchMax: 0,
        squatMax: 0,
        deadliftMax: 0,
      },
    };
  };

  render() {
    const { error, isLoaded, user } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return(
        <div className="WorkoutApp container-fluid">
          <div className="row">
            <h2>Welcome to Workout Buddy</h2>
          </div>
          <div className="row">
            Username: {user.userName} <br/>
            Bench: {user.benchMax} <br/>
            Squat: {user.squatMax} <br/>
            Deadlift: {user.deadliftMax} <br/>
          </div>
          <div className="row">
            <ProgramFormModal modalButtonLabel="Create Workout"/>
          </div>
          <div className="row">
            <div className="btn-group-vertical app-menu">
              <Link className="btn btn-primary" to={'/program-mod'}>Program Mod</Link>
              <LinkButton buttonName="Delete Program"/>
              <LinkButton buttonName="View Programs"/>
              <LinkButton />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WorkoutApp;
