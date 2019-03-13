import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Register from './components/register';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
