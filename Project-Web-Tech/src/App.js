import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //basename 可以為所有位置添加一個基準的url 例如這邊就是localhost: /my-app
      // <BrowserRouter basename = "/my-app" />
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
