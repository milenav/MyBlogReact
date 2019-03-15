import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import '../components/home.css';

class PostDetails extends Component {
    render() {
        return (
            <main>
                <div className="bloger-content">
                    <div className="bloger-grid">
                        <div className="col-md-6">

                        
                            <article>
                            <header>
                                <h2>{this.props.match.params.id}</h2>
                                
                            </header>                                 
                            <div >
                                <img src={this.props.match.params.id} alt=""/>
                            </div>                               
                                <p id="content">{this.props.match.params.id}</p>
                            <small className="author">
                                <p>|</p>
                            </small>
                            <footer>
                            <div className="pull-right btn-group btn-group-justified" role="group">
                                <div className="btn-group" role="group">
                                    <Link className="btn btn-default btn-xs" to="#">Read more&raquo;</Link>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"><FaThumbsUp/></button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-dark"><FaThumbsDown/></button>
                                </div>
                            </div>
                            </footer>                        
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default PostDetails;