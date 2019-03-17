import React, { Component } from 'react';

class EditPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPostIdId: this.props.selectedPostIdId,
            title: null,
            content: null, 
            image: null            
        }

        this.handleChange = this.props.handleChange.bind(this);
    }

    componentDidMount = async () => {
        let data = await fetch('http://localhost:9999/feed/post/' + this.props.match.params.id, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        this.setState({
            selectedPostIdId: data.post,
            title: data.post.title,
            content: data.post.content,
            imageUrl: data.post.image,
        })
        
        console.log(this.state);
      };

    render() {

        return (
            <main id="site-content">
                <section className="basic" id="welcomeAnonymous">
                    <section className="login" id="loginView">
                        <form onSubmit={(event) => this.props.handleEditDeleteSubmit(event, this.state, 'post', 'edit', this.state.selectedPostId._id)} id="formLogin">
                            <p className="field">
                                <label htmlFor="name">Title</label>
                                <span className="input">
                                    <input  onChange={this.handleChange} type="text" name="title" defaultValue={this.state.selectedPostId.title} />
                                    <span className="actions" />
                                </span>
                            </p>
                            <p className="field">
                                <label htmlFor="name">Content</label>
                                <span className="input">
                                    <input onChange={this.handleChange} type="text" name="content" defaultValue={this.state.selectedPostId.content} />
                                    <span className="actions" />
                                </span>
                            </p>
                            <p className="field">
                                <label htmlFor="image">Image</label>
                                <span className="input">
                                    <input onChange={this.handleChange} type="text" name="imageUrl" id="image" defaultValue={this.state.selectedPostId.image} />
                                    <span className="actions" />
                                </span>
                            </p>
                            <input className="button" type="submit" value="Save" />
                        </form>
                    </section>
                </section>
            </main>
        );

    }
}

export default EditPost;