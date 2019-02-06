import React from "react";
import PostCard from "../PostCard/PostCard";
import imageOne from "../../media/img-1.jpg";
import imageTwo from "../../media/img-2.jpg";
import imageThree from "../../media/img-3.jpg";

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
        <PostCard
          image={imageTwo}
          title="Second title"
          text=""
        />
      </div>
      <div className="col-12">
        <PostCard
          image={imageThree}
          title="Third title"
          text="some text"
        />
      </div>
    </div>
  </div>
);

export default Posts;
