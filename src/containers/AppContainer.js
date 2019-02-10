import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../App";
import { submitPost, getPosts } from "../actions/posts";

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      caption: null,
      formData: null,
      isModalOpen: false
    };
  }

  componentDidMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;

    this.setState({ isModalOpen: !isModalOpen });
  };

  onInputChange = e => this.setState({ caption: e.target.value });

  onAddImage = e => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    const formData = new FormData();

    formData.append("media", file);

    fileReader.onloadend = () => this.setState({ formData });

    fileReader.readAsDataURL(file);
  };

  onSubmitPost = () => {
    const { formData, caption } = this.state;
    const { submitPost, getPosts } = this.props;

    submitPost(formData, caption).then(() => {
      getPosts();
      this.setState({ isModalOpen: false });
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { posts } = this.props;

    if (!posts || !posts.list) {
      return <div>loading...</div>;
    }

    return (
      <App
        onInputChange={this.onInputChange}
        onAddImage={this.onAddImage}
        onSubmitPost={this.onSubmitPost}
        isModalOpen={isModalOpen}
        toggleModal={this.toggleModal}
        posts={posts.list}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isSubmitted: state.postsReducer.isSubmitted,
    posts: state.postsReducer.posts
  };
};

const mapDispatchToProps = {
  submitPost,
  getPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
