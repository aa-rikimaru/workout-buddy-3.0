import React, { Component } from 'react';

import TrainingBlock from './TrainingBlock.jsx';
import ProgramMenu from '../components/Menus/ProgramMenu.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick(e) {
    this.props.openMenuAction(e.nativeEvent);
  }

  render() {
      return (
        <div className="program-workspace"
          onDoubleClick={this.handleDoubleClick}>
          <TrainingBlock />
        </div>
      )
  }
}

export default ProgramWorkspace;
