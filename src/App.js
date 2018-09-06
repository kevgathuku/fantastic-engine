import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  removeLocationHash,
  setLocationHash,
  windowRedirect
} from "./operations";

class App extends Component {
  onClickAddHash() {
    setLocationHash("#it-works!");
  }

  onClickRemoveHash() {
    removeLocationHash();
  }

  onClickRedirect() {
    windowRedirect();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testing URL changes in React</h1>
        </header>
        <div className="large-text">
          <p> Use the buttons below and notice the change in the URL hash </p>
          <button onClick={this.onClickAddHash}>Add hash</button>
          <button onClick={this.onClickRemoveHash}>Remove hash</button>
        </div>
        <div className="large-text">
          <p> Click below to redirect to the Jest website </p>
          <button onClick={this.onClickRedirect}>Let's go</button>
        </div>
      </div>
    );
  }
}

export default App;
