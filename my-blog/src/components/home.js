import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components/home.css';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="row text-left">
                    <div>
                    {this.props.posts.map (post => 
                        (<div className="post" key={post._id}>

                        
                            <div className="card-title">
                                <h2>{post.title}</h2>
                                <h6 className="card-subtitle text-muted">{post.subtitle}</h6>
                            </div>                                 
                            <div className="img-top">
                                <img src={post.image} alt=""/>
                            </div>
                            
                            <div className="card-body">                              
                                <p id="content">{post.content.slice(0,260)} ...</p>
                            
                            <footer>
                            <div className="pull-right btn-group btn-group-justified" role="group">
                                <div className="btn-group" role="group">
                                    <Link className="btn btn-default btn-xs" to={{ pathname: "/register" }}>Read more &raquo;</Link>
                                </div>

                            </div>
                            </footer>
                                                 
                            </div> 
                        </div>)
                        )}
                        
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;