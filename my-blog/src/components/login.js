import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
        this.handleChange = props.handleChange.bind(this);
    }

    render() {
        return (
            <form className="form-control-sm" onSubmit={(e) => this.props.handleSubmit(e, this.state, false)}>

                <div className="form-group-sm">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" type="text" onChange={this.handleChange} name="username" placeholder="Username"/>
                </div>
                <div className="form-group-sm">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" onChange={this.handleChange} name="password" placeholder="******"/>
                    <small>We'll never share your rassword with anyone else.</small>
                </div>
                <button className="btn btn-outline-primary" type="submit">Login</button>
            </form>
        )
    }
}

export default Login;