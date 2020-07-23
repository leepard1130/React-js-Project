import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPosts: null
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate () {
        this.loadData();
    }

    loadData () {
        //可以把props的資料結構印出來在console以確認id的格式
        //!= 只check value
        if (this.props.match.params.id) {
            if (!this.state.loadedPosts || (this.state.loadedPosts && this.state.loadedPosts.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    // console.log(response);
                    this.setState({loadedPosts:response.data})
                })
            }
        }
    }

    deleteHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
                .then(response => {
                    console.log(response);
                });
    }

    render () {
        let post = <p style = {{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = <p style = {{textAlign:'center'}}>Loading!</p>;
        }
        if(this.state.loadedPosts) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPosts.title}</h1>
                    <p>{this.state.loadedPosts.body}</p>
                    <div className="Edit">
                        <button onClick = {this.deleteHandler} 
                                className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;