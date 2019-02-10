import React from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import UserList from "./components/UserList/UserList";
import PostModal from "./components/PostModal/PostModal";
import "./App.css";

const App = ({
  onInputChange,
  onAddImage,
  onSubmitPost,
  isModalOpen,
  toggleModal,
  posts
}) => (
  <div className="App">
    <div className="container">
      <Header handleOpenModal={toggleModal} />
      <div className="row mx-auto">
        <div className="col-8">
          <Posts posts={posts} />
        </div>
        <div className="col-4">
          <UserList />
        </div>
      </div>
      {isModalOpen && (
        <PostModal
          onInputChange={onInputChange}
          onAddImage={onAddImage}
          onClose={toggleModal}
          onSubmitPost={onSubmitPost}
        />
      )}
    </div>
  </div>
);

export default App;
