import React from 'react';
import PropTypes from 'prop-types';
import './css/Menu.css';

const ProgramMenu = (props) => {
  return (
    <ul class="side-menu d-flex flex-column align-items-stretch">
        <li class="menu-item d-flex align-items-center">
          <i class="material-icons">add</i>Create
        </li>
        <li class="menu-item d-flex align-items-center">
          <i class="material-icons">edit</i> Edit
        </li>
        <li class="menu-item d-flex align-items-center">
          <i class="material-icons">clear</i> Clear
        </li>
        <li class="menu-item d-flex align-items-center">
          <i class="material-icons">get_app</i> Export
        </li>
    </ul>
  );
}

export default ProgramMenu;
