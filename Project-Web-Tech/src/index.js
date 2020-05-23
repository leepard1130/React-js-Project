import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    //有需要的話可以在return之前先編輯request
    //用interceptor一定要有return statement
    return quest;
},error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(respsonse => {
    console.log(response);
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
