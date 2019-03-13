import React, { Component } from 'react';
import './register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            username: null,
            password: null
        }
        this.handleChange = props.handleChange.bind(this);
    }

    render() {
        return (
            <form className="form-control-sm" onSubmit={(e) => this.props.handleSubmit(e, this.state, true)}>
                <h1>Register</h1>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input className="form-control" type="email" onChange={this.handleChange} name="email" placeholder="Email"/>
                    <small>We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" type="text" onChange={this.handleChange} name="username" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" onChange={this.handleChange} name="password" placeholder="Password"/>
                    <small>We'll never share your rassword with anyone else.</small>
                </div>
                <button className="btn btn-outline-secondary" type="submit">Register</button>
            </form>
        )
    }
}

export default Register;