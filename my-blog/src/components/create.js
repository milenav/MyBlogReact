import React, { Component } from 'react';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            image: null,
            content: null
        }
        this.handleChange = props.handleChange.bind(this);
    }

    render () {
        return (
            <form className="form-control-lg" onSubmit={(e) => this.props.handleCreateSubmit(e, this.state)}>

            <div className="form-group-sm">
                <input className="form-control" type="text" onChange={this.handleChange} name="title" placeholder="Title"/>
            </div>
            <div className="form-group-sm">
                <input className="form-control" type="text" onChange={this.handleChange} name="image" placeholder="Image"/>
            </div>
            <div className="form-group-sm">
                <textarea className="form-control" type="text" onChange={this.handleChange} name="content" placeholder="Content"/>
            </div>
            <button className="btn btn-outline-primary" type="submit">Create Post</button>
        </form>
        )
    }
}

export default CreatePost;