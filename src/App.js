import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import {Header, Footer} from './layout';
import Home from './pages/Home';
import SingleNote from './pages/SingleNote/';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {

  };
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <div className="containerApp">
            <Header/>
            <Switch>
              <Route exact path="/"> <Home/> </Route>
              <Route exact path="/new"
                render={() => {
                  let id;
                  do{
                      id = uuidv4().substr(0,8);
                  }while(localStorage[id]);
                  let overview = JSON.parse(localStorage.getItem("overview",));
                  localStorage.setItem("overview", JSON.stringify([...overview, id]));
                  return <Redirect to={`/note/${id}`} />;
                }} />
              <Route path="/note/:id"> <SingleNote/> </Route>
              <Redirect to="/"/>
            </Switch>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
