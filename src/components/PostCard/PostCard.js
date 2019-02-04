import React from "react";
import placeholderImage from "../../media/image-placeholder.svg"

const PostCard = () => (
    <div className="card">
        <img className="card-img-top" alt="some img" src={placeholderImage}/>
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