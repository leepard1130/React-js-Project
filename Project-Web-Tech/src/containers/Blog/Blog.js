import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

class Blog extends Component {

    render () {

        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to = "/">Home</Link></li>
                            <li><Link to = {{
                                //this is absolute path
                                pathname: '/new-post'
                                //this is relative path
                                //pathname: this.props.match.url + '/new-post'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = "/" render = { ()=><h1>home</h1> } /> */}
                <Route path = "/" exact component = {Posts} />
                <Route path = "/new-post" exact component = {NewPost} />
            </div>
        );
    }
}

export default Blog;