import React from 'react';
//使用這個HOC component 並且將post轉成 functional compoent可以將post放到整個資料結構裡
//import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick = {props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;