import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgramMenu from '../components/Menus/ProgramMenu.jsx';
import ProgramWorkspace from './ProgramWorkspace/ProgramWorkspace.jsx';
import ProgramFormModal from './Modals/ProgramFormModal.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExercises } from '../actions/index';

import dummyProgram from '../sample_data/StartingStrength';

class ProgramModApp extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    this.props.fetchExercises();
  }

  openMenu(e) {
    let programMenu = document.getElementById('program-menu');

    console.log(this.props.program);

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

    const { program } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <h2>
              <input
                className="program-mod-input"
                type="text"
                placeholder="Program Name"
                value={program.name}
              />
            </h2>
            <h5>
              <input
                className="program-mod-input"
                type="text"
                placeholder="Author"
                value={program.author}
              />
            </h5>
          </div>
          <div className="col-2">
            <div id="program-button-group" className="list-group">
              <ProgramFormModal
                modalButtonLabel="New"
              />
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" id="program-workspace-container">
            <ProgramWorkspace openMenuAction={this.openMenu}/>
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
  return {
      exercises: state.exercises,
      program: state.program
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramModApp);
