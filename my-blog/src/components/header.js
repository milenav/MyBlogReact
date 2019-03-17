import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBraille } from 'react-icons/fa';


class Header extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><FaBraille/>      MyBlog</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">

                            {
                                this.props.username ? 
                            (<li className="nav-item">
                                <NavLink to="/" className="nav-link text-white">Welcome {this.props.username}!</NavLink>
                            </li>)
                            :
                            (<li className="nav-item active">
                            <NavLink className="nav-link active text-white" to="/">Home</NavLink>
                        </li>)
           
                            }  
                            {
                                this.props.username ? 
                            (<li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/blog">Blog</NavLink>
                            </li>)   
                            :
                            (<li className="nav-item">
                            <NavLink to="/register" className="nav-link text-white">Register</NavLink>
                        </li>)
                            }   
                            {
                                this.props.isAdmin ?
                            (<li className="nav-item">
                            <NavLink className="nav-link text-white" to="/create">Create</NavLink>
                            </li>) 
                            : null

                            }  
                            {
                                 this.props.username ? 
                            (<li className="nav-item">
                                 <NavLink className="nav-link text-white" to="/" onClick={this.props.onLogout}>Logout</NavLink>
                             </li>)
                            :
                            (<li className="nav-item">
                            <NavLink className="nav-link text-white" to="/login">Login</NavLink>
                            </li>)
                            }
                            <li className="nav-item">
                            <NavLink className="nav-link active text-white" to="/contact">Default</NavLink>
                            </li>   
                 
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;