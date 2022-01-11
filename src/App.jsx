import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './layouts/Main';
import SignIn from './layouts/SignIn';
import "./theme/global.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
