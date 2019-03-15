import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute =({ isLogedIn, ...otherProps }) => {
    if(!isLogedIn){
        return <Redirect to="/login"/>
    }

    return <Route {...otherProps}/>
}
       
export default AuthorizedRoute;

