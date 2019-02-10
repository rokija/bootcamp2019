import React from "react";
import PostCard from "../PostCard/PostCard";

const Posts = ({ posts }) => (
  <div className="container">
    <div className="row">
      {posts.map(post => (
        <div key={post._id} className="col-12">
          <PostCard
            image={`http://localhost:3000${post.media.path}`}
            title={post.title}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Posts;
