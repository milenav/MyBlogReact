import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header className="bg-dark fixed-top py-2">
                <ul className="nav justify-content-around">
                    <li className="nav-item">
                        <NavLink className="nav-link active text-white" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link text-white">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link disabled text-white" to="#">Disabled</NavLink>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;