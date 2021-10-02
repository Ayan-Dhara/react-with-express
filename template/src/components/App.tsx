import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import Demo from "./Demo";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/demo" component={Demo}/>
        <Route path="/">
          Not Found
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
