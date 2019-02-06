import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              {/* UserList here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
