
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {TodoApp} from './components/presentational/todoApp';

import {BrowserRouter as Router,Route} from 'react-router-dom';

const store=configureStore();
ReactDOM.render(
      <Provider store = {store}>
      <Router>
      <Route path='/:filter?' render={({match})=><TodoApp filter={match.params.filter} />} />
      </Router>
      </Provider>, document.getElementById('root')
  );