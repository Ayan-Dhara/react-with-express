import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import Demo from "./Demo";

const App = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("/api/demo")
      .then(res => res.json())
      .then(json => {
        if (json.data)
          setData(json.data)
      })
  }, [])
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
