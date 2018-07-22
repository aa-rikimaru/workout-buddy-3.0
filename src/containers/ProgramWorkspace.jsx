import React, { Component } from 'react';

import TrainingBlock from './TrainingBlock.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  render() {
      return (
        <div className="program-workspace">
          <TrainingBlock />
        </div>
      )
  }
}

export default ProgramWorkspace;
