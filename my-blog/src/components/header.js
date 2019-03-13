import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="bg-dark fixed-top py-2">
                <ul className="nav justify-content-around">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled text-white" to="#">Disabled</Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;