import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './assets/css/App.css';

import Verbs from './views/verbs';

class App extends Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path='/verbs' element={<Verbs />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
