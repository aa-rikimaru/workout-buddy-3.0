import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import WorkoutApp from './WorkoutApp';
import ProgramModApp from './ProgramModApp';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/profile" component={WorkoutApp} />
        <Route path="/program-mod" component={ProgramModApp} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
