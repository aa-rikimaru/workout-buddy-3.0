import React from 'react';
import PropTypes from 'prop-types';
import './css/Menu.css';

const ProgramMenu = (props) => {
  return (
    <ul className="side-menu d-flex flex-column align-items-stretch">
        <li className="menu-item d-flex align-items-center">
          <i className="material-icons">add</i>Create
        </li>
        <li className="menu-item d-flex align-items-center">
          <i className="material-icons">edit</i> Edit
        </li>
        <li className="menu-item d-flex align-items-center">
          <i className="material-icons">clear</i> Clear
        </li>
        <li className="menu-item d-flex align-items-center">
          <i className="material-icons">get_app</i> Export
        </li>
    </ul>
  );
}

export default ProgramMenu;
