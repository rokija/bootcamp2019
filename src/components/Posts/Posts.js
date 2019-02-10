import React from "react";
import PostCard from "../PostCard/PostCard";
import imageOne from "../../media/img-1.jpg";
import imageTwo from "../../media/img-2.jpg";
import imageThree from "../../media/img-3.jpg";

/* TODO: Study 4.
  1. connect Posts component to the redux store (by creating PostsContainer)
  2. call getPosts action in componentDidMount lifecycle method
  3. display the Posts from props
*/

const Posts = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <PostCard
          image={imageOne}
          title="First title"
          text="some post description"
        />
      </div>
      <div className="col-12">
        <PostCard image={imageTwo} title="Second title" text="" />
      </div>
      <div className="col-12">
        <PostCard image={imageThree} title="Third title" text="some text" />
      </div>
    </div>
  </div>
);

export default Posts;
