import logo from "./logo.svg";
import "./App.css";
import React, { Component } from 'react';
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostFrom from "./components/PostForm";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <h1 className="App-tite">Welcome to React..</h1>
              <p>by Serious</p>
            </p>
        
          </header>
          <PostFrom />
          <hr></hr>
          <Posts />
        </div>
      </Provider>
    
    );
  }
}

export default App;
