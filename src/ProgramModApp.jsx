import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExercises } from './actions/index';

class ProgramModApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchExercises();
    console.log('componentDidMount(): ' + this.state.exercises);
  }

  render() {
    console.log('render(): ' + this.state.exercises);

    return (
      <div className="container-fluid">
        <div className="row">
          <h2>Program Name: {this.props.program.name}</h2>
        </div>
        <div className="row">
          <div className="col-3 toolbar" >
          </div>
          <div className="col-9 program-mod-content" >
            <p>{this.props.program.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

ProgramModApp.propTypes = {
  program : {
    name: PropTypes.string,
    description: PropTypes.string,
  }
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
    exercises: state.exercises
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramModApp);
