import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

class Logout extends Component {

    componentWillMount(){ 
            localStorage.removeItem('user');
            localStorage.removeItem('auth_token');
    } 

    render(){
        return <Redirect to="/" />
    }
}

export default Logout;