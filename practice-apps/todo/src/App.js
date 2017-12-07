import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoAppComponent from './Todo_Component.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kunal's Todo App</h1>
        </header>
        <TodoAppComponent/>
      </div>
    );
  }
}

export default App;
