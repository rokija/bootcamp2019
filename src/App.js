import React, { Component } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList";
import PostModal from "./components/PostModal/PostModal";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      caption: null,
      imageUrl: null,
      formData: null,
    };
  }

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  onInputChange = e => this.setState({ caption: e.target.value });

  onAddImage = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    const formData = new FormData();

    formData.append("media", file);

    fileReader.onloadend = () => this.setState({ formData, imageUrl: fileReader.result });

    fileReader.readAsDataURL(file);
  }


  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Header
            handleOpenModal={this.handleOpenModal}
          />
          <div className="row mx-auto">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
          {isModalOpen && (
            <PostModal
              onInputChange={this.onInputChange}
              onAddImage={this.onAddImage}
              onClose={this.handleCloseModal}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
