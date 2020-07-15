import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
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
                            <li><NavLink to = "/" 
                                exact
                                //不要用default的active
                                activeClassName = "my-active"
                                activeStyle = {{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to = {{
                                //this is absolute path
                                pathname: '/new-post'
                                //this is relative path
                                //pathname: this.props.match.url + '/new-post'
                            }}>New Post</NavLink></li>
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