import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Dropdown from '../FormComponents/Dropdown.jsx';
import Input from '../FormComponents/Input.jsx';
import TextArea from '../FormComponents/TextArea.jsx';
import ActionButton from '../Buttons/ActionButton.jsx';

import ProgramModApp from '../ProgramModApp.jsx'

const FormModal = (props) => {
  const programLevels = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="modal fade" id="createWorkoutModal" tabIndex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Workout</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="workout-form">
              <Input inputId="program-name"
                labelTitle="Program Name"
                inputPlaceHolder="Starting Strength"
                handler={props.nameHandler} />
              <Dropdown
                dropdownId="program-level"
                labelTitle="Program Level"
                items={programLevels}
                handler={props.levelHandler} />
              <TextArea labelTitle="Author's Note"
                handler={props.descriptionHandler} />
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.submitHandler}>Create</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

class ProgramFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programName: '',
      programLevel: 'Beginner',
      programDescription: '',
    }

    this.goProgramModApp = this.goProgramModApp.bind(this);
    this.programNameHandler = this.programNameHandler.bind(this);
    this.programLevelHandler = this.programLevelHandler.bind(this);
    this.programDescriptionHandler = this.programDescriptionHandler.bind(this);
  }

  programNameHandler(event) {
    this.setState({ programName : event.target.value });
  }

  programLevelHandler(event) {
    this.setState({ programLevel : event.target.value });
  }

  programDescriptionHandler(event) {
    this.setState({ programDescription : event.target.value });
  }

  goProgramModApp() {
    alert('Program Name: ' + this.state.programName + '\nProgram Level: ' + this.state.programLevel + '\nProgram Description: ' + this.state.programDescription);

    let programToCreate = {
      name: this.state.programName,
      level: this.state.programLevel,
      description: this.state.programDescription,
    };

    ReactDOM.render(
      <ProgramModApp program={programToCreate} />,
      document.getElementById('root')
    );
  };

  render() {
    return (
        <div>
          <FormModal
            nameHandler={this.programNameHandler}
            levelHandler={this.programLevelHandler}
            descriptionHandler={this.programDescriptionHandler}
            submitHandler={this.goProgramModApp} />
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createWorkoutModal">
            Create Workout
          </button>
        </div>
    );
  }
};

FormModal.propTypes = {
  nameHandler : PropTypes.func,
  levelHandler : PropTypes.func,
  descriptionHandler : PropTypes.func,
  submitHandler : PropTypes.func,
};

FormModal.defaultProps = {
  nameHandler : () => {console.log("NameInput: No event handler given")},
  levelHandler : () => {console.log("LevelDropdown: No event handler given")},
  descriptionHandler : () => {console.log("DescriptionTextArea: No event handler given")},
  submitHandler : () => {console.log("SubmitButton: No event handler given")},
};

export default ProgramFormModal;