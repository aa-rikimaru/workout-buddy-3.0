import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgramMenu from './components/Menus/ProgramMenu.jsx';
import ProgramWorkspace from './containers/ProgramWorkspace.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExercises } from './actions/index';

class ProgramModApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    let exercises = this.props.fetchExercises();
    console.log('Fetching exercises ...' + exercises);
    console.log(this.state);
  }

  openMenu() {
  }

  render() {
    if (!this.props.exercises) console.log(this.props.exercises);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>Program Name: {this.props.program.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12" >
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
  console.log('mapStateToProps: ', state);
  return {
      exercises: state.exercises
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramModApp);
