import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="App" className ='paragragh'>
        <navigator>Hello </navigator>
        <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good Night</h1>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    );
  } 
}

export default App;
