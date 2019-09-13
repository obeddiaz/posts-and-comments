import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Posts from './containers/Posts';
import Comments from './containers/Comments';
import configureStore from './store';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/posts/:id" component={Comments}/>
            <Route exact path="/posts" component={Posts}/>
            <Redirect to='/posts' />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
