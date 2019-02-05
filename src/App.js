import React, { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import UserList from "./components/UserList";
import PostModal from "./components/PostModal";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false
    };
  }

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
          />
          <div className="row mx-auto">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
          <PostModal />
        </div>
      </div>
    );
  }
}

export default App;
