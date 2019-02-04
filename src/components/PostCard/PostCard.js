import React from "react";

const PostCard = ({image}) => (
    <div className="card">
        <img className="card-img-top" alt="some img" src={image}/>
        <div className="card-body">
            <h2 className="card-title">
                Title
            </h2>
            <span className="card-text">
                some text
            </span>
        </div>
    </div>    
)

export default PostCard;