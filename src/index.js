import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ReduxPromise from 'redux-promise';
import Logger from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import WorkoutApp from './containers/WorkoutApp';
import ProgramModApp from './containers/ProgramModApp';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise, Logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/profile" component={WorkoutApp} />
          <Route path="/program-mod" component={ProgramModApp} />
          <Route path="/" component={WorkoutApp} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
