import React from 'react';

import LinkButton from './components/Buttons/LinkButton.jsx';
import ProgramFormModal from './components/Modals/ProgramFormModal.jsx';

class WorkoutApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      user: {
        username: 'default',
        benchMax: 0,
        squatMax: 0,
        deadliftMax: 0,
      },
    };
  };

  fetchUser() {
    fetch('http://localhost:3000/api/users/1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        (error) => {
          this.setState({
            isLoaded:true,
            error
          });
        });
  }

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
            Username: {user.username} <br/>
            Bench: {user.benchMax} <br/>
            Squat: {user.squatMax} <br/>
            Deadlift: {user.deadliftMax} <br/>
          </div>
          <div className="row">
            <div className="btn-group-vertical app-menu">
              <ProgramFormModal />
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
