import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import Overview from "./components/overview"
import Table_sample from "./components/tr_table"
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Account_info from "./components/account_info"
const user_profile = [
  "Geesun Jang"
];




class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Header/>
          <Switch>
              <Route path="/" component={Overview} exact/>
              <Route path="/OVERVIEW" component={Overview}/>
              <Route path="/ACC_INFO" component={Account_info}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
     );
  
}
}

export default App;
