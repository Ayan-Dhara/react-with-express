import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "../routes";
import Demo from "../routes/demo";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/demo" element={<Demo/>}/>
        {/*other routes*/}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
