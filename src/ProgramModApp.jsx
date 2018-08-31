import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgramMenu from './components/Menus/ProgramMenu.jsx';
import ProgramWorkspace from './containers/ProgramWorkspace.jsx';
import ProgramFormModal from './components/Modals/ProgramFormModal.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExercises } from './actions/index';

import dummyProgram from './sample_data/StartingStrength';

class ProgramModApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      program : dummyProgram
    }

    this.openMenu = this.openMenu.bind(this);
    this.programNameHandler = this.programNameHandler.bind(this);
    this.programAuthorHandler = this.programAuthorHandler.bind(this);
  }

  componentDidMount() {
    let exercises = this.props.fetchExercises().payload;
    // This is equivalent to: this.setState({ exercises: exercises })
    this.setState({ exercises });
  }

  programNameHandler(e) {
    this.state.program.name = e.target.value;
    this.setState({ program: this.state.program});
  }

  programAuthorHandler(e) {
    this.state.program.author = e.target.value;
    this.setState({ program: this.state.program });
  }

  openMenu(e) {
    let programMenu = document.getElementById('program-menu');

    programMenu.style.left = e.clientX + 'px';
    programMenu.style.top = e.clientY + 'px';
    programMenu.style.display = 'block';

    window.onclick = (event) => {
      if (event.target !== programMenu ) {
        programMenu.style.display = 'none';
      }
    }
  }

  render() {
    if (!this.props.exercises) console.log(this.props.exercises);

    const { program } = this.state;
    console.log('Program', program);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <h2>
              <input
                className="program-mod-input"
                type="text"
                placeholder="Program Name"
                onChange={this.programNameHandler}
                value={program.name}
              />
            </h2>
            <h5>
              <input
                className="program-mod-input"
                type="text"
                placeholder="Author"
                onChange={this.programAuthorHandler}
                value={program.author}
              />
            </h5>
          </div>
          <div className="col-2">
            <div id="program-button-group" className="list-group">
              <ProgramFormModal modalButtonLabel="New" />
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" >
            <ProgramWorkspace openMenuAction={this.openMenu} program={dummyProgram}/>
          </div>
        </div>
        <ProgramMenu />

      </div>
    );
  }
}

ProgramModApp.propTypes = {
  program : PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

ProgramModApp.defaultProps = {
  program : {
    name: "Default Program Name",
    description: "Insert description here!",
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchExercises }, dispatch);
}

function mapStateToProps(state) {
  console.log('mapStateToProps: ', state);
  return {
      exercises: state.exercises
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramModApp);
