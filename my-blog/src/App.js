import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import Logout from './components/logout';
import Contact from './components/contact';
import CreatePost from './components/create';

import PostDetails from './components/details';
import AuthorizedRoute from './components/authorized-route';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: null,
      isAdmin: false,
      posts: [],
      selectedPostId: 0
    }
  }


  componentWillMount () {
    const isAdmin = localStorage.getItem('isAdmin') === true;
    console.log(isAdmin)

    if(localStorage.getItem('username')){
      this.setState({
        username: localStorage.getItem('username'),
        isAdmin: isAdmin
      })
    }
    fetch('http://localhost:9999/feed/posts')
    .then(rawData => rawData.json())
    .then(body => this.setState({
      posts: body.posts
    }))
  }

  handleChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleCreateSubmit(e, data) {
    e.preventDefault();
    console.log(data)
    fetch('http://localhost:9999/feed/post/create', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }).then(rawData => rawData.json())
    .then(body => console.log(body))
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
          localStorage.setItem('username', responseBody.username);
          localStorage.setItem('isAdmin', responseBody.isAdmin);
        }
      })
  }

  onLogout(data) {
    localStorage.clear();
    data.auth().signOut()
      .then(() => {
        this.setState({
          username: false,
          isAdmin:false
        });
      });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
          <Header isAdmin={this.state.isAdmin} username={this.state.username} onLogout={this.onLogout}/>
          <Switch>
          <Route render={
              (props) => <PostDetails {...props} 
              post={this.state.posts[this.state.selectedPostId]} />
              } path="/post/:id" />
            
            <Route exact render={
              (props) => <Home {...props} posts={this.state.posts}/>
              } path="/" />
            
            <Route render={
              (props) => 
              this.state.isAdmin ?
              <CreatePost {...props}
              handleCreateSubmit={this.handleCreateSubmit.bind(this)}
              handleChange={this.handleChange}/> :
              <Redirect to={{pathname: "/login"}} />
              } path="/create" />
            
            <Route render={
              (props) => <Register {...props}
              handleSubmit={this.handleSubmit.bind(this)}
              handleChange={this.handleChange}/>
              } path="/register" />
            
            <Route render={
              () => <Login handleSubmit={this.handleSubmit.bind(this)}
              handleChange={this.handleChange}/>
              }path="/login"/>
            
            <AuthorizedRoute path="/logout" component={Logout}/>
            <Route path="/contact" component={Contact}/>
            
          </Switch>

            <Footer/>
      </div>
    );
  }
}

export default App;
