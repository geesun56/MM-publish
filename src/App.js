import React, { Component } from 'react';
import './App.css';
import Header from "./mm_header"
import Content from "./mm_content"

const user_profile = [
  "Geesun Jang"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
