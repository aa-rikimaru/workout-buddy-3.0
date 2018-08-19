import React, { Component } from 'react';

import TrainingBlock from './TrainingBlock.jsx';
import ProgramMenu from '../components/Menus/ProgramMenu.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  render() {
      return (
        <div className="program-workspace"
          onDoubleClick={this.props.openMenuAction}>
          <TrainingBlock />
        </div>
      )
  }
}

export default ProgramWorkspace;
