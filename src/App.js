import React, { Component } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList";
import "./App.css";

/*
  TODO: Study 1. (React State)
  
  1. import PostModal component,
  create default state (isModalOpen: false), create methods (handleOpenModal, handleCloseModal) for setting a new state.
  display PostModal component only if isModalOpen === true.

  2. create method for updating state with the value from text input (onInputChange),
    set the default state for it (caption: null).

  3. create method for uploading an image and setting it in the state, 
    update the default state (set imageUrl and formData to null)
*/

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
