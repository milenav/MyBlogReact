import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: null,
      isAdmin: false
    }
  }

  handleChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e, data, isSignup) {
    e.preventDefault();
    console.log(data)
    fetch('http://localhost:9999/auth/sign' + (isSignup ? 'up' : 'in'), {
      method: 'post',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }).then(rawData => rawData.json())
      .then(responseBody => {
        if(responseBody.username) {
          this.setState({
            username: responseBody.username, 
            isAdmin: responseBody.isAdmin
          })
        }
      })
  }

  render() {
    return (
      <div>
          <Header isAdmin={this.state.isAdmin} username={this.state.username}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route render={
              () => <Register handleSubmit={this.handleSubmit.bind(this)}
              handleChange={this.handleChange}/>
              } path="/register" />
            <Route render={
              () => <Login handleSubmit={this.handleSubmit.bind(this)}
              handleChange={this.handleChange}/>
              }path="/login"/>
            <Route path="/contact" component={Contact}/>
          </Switch>

            <Footer/>
      </div>
    );
  }
}

export default App;
