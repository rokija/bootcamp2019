import React from "react";

const PostCard = ({ image, title, text }) => (
  <div className="card mb-5">
    <img className="card-img-top" alt="some img" src={image} />
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <span className="card-text">{text}</span>
    </div>
  </div>
);

export default PostCard;
