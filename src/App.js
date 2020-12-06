import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header, Footer} from './layout';
import Home from './pages/Home';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {

  };
  render() {
    return ( 
      <Router>
        <div className="App">
          <div className="containerApp">
            <Header/>
            <Route exact path="/"> <Home/> </Route>

            <Footer/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
