import React from "react";
import placeholderImage from "../../media/image-placeholder.svg"
import "./Posts.css";

const Posts = () => (
    <div className="col-6">
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
    </div>
)

export default Posts;