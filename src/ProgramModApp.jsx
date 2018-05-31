import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgramModApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

export default ProgramModApp;
