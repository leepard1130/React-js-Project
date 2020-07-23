import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
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
                            <li><NavLink to = "/posts/" 
                                exact
                                //不要用default的active
                                activeClassName = "my-active"
                                activeStyle = {{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
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
                {/* // 使用SWITCH可以只LOADING其中一個但是在這個案例中new-post跟id的順序不能對調 不然會沒辦法loadingnew-post */}
                <Switch>
                    <Route path = "/new-post" component = {NewPost} />    
                    <Route path = "/posts" component = {Posts} />
                </Switch>

            </div>
        );
    }
}

export default Blog;