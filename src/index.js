import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import WorkoutApp from './WorkoutApp';
import ProgramModApp from './components/ProgramModApp';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/profile" component={WorkoutApp} />
      <Route path="/program-mod" component={ProgramModApp} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
