import React, { Component } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import '../components/home.css';



class PostDetails extends Component {

    render() {
        return (
            
                <div className="row text-left justify-content-center">
                    <div>
                        <div className="post-details">

                        
                            
                                
                            <header>
                                <h2>{this.props.match.params.id.title}</h2>
                                <h2 className="card-title text-center">{this.props.post ? this.props.post.title : 'Test'}</h2>
                                <h6 className="card-subtitle text-muted">{this.props.post ? this.props.post.subtitle : 'Test'}</h6>
                            </header>                                 
                            <div >
                                <img id="details-only" className="card-img-top" src={this.props.post ? this.props.post.image : 'Test'} alt=""/>
                            </div> 
                            <div className="card-body">                             
                                <p id="content">{this.props.post ? this.props.post.content : 'Test'}</p>
                           
                            <footer>
                            <div className="pull-right btn-group btn-group-justified" role="group">
                                <div className="btn-group" role="group">
                                    <button className="btn btn-default btn-xs" >Rate post &raquo;</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"><FaThumbsUp/></button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-dark"><FaThumbsDown/></button>
                                </div>
                            </div>
                            </footer>                        
                          </div>  
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default PostDetails;