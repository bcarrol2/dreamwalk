import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Access from './components/Access';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/access" exact component={Access} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
