import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatePost = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({posts:updatePost})
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedId:id});
    }

    render () {
        const posts = this.state.posts.map( post => {
            return <Post 
                    key = {post.id} 
                    title = {post.title} 
                    author = {post.author}
                    clicked = {() => this.postSelectedHandler(post.id)}/>
        })
        return (
            <section className = "Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;