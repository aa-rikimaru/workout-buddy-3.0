import React, { Component } from 'react';

import TrainingBlock from './TrainingBlock.jsx';
import ProgramMenu from '../components/Menus/ProgramMenu.jsx';

import dummyProgram from '../sample_data/StartingStrength.json'
import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);

    this.state = {
      program: this.props.program,
      cycles: []
    }
  }

  componentDidMount() {

  }

  handleDoubleClick(e) {
    this.props.openMenuAction(e.nativeEvent);
  }

  render() {
    // console.log(dummyProgram);
    // let sessionOne = this.state.program.sessions[0];
    // let sessionTwo = this.state.program.sessions[1];
    // let cycleOne = [sessionOne, sessionTwo];
      return (
        <div
          className="program-workspace"
          onDoubleClick={this.handleDoubleClick}>
          <TrainingBlock /*cycle={cycleOne}*/ />
        </div>
      )
  }
}

export default ProgramWorkspace;
