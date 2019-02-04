import React, { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import UserList from "./components/UserList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="row mx-auto">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
