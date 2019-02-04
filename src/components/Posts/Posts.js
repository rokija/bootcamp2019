import React from "react";
import PostCard from "../PostCard";
import placeholderImage from "../../media/image-placeholder.svg"
import "./Posts.css";

const Posts = () => (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <PostCard image={placeholderImage} />     
            </div>
            <div className="col-4">
                <PostCard image={placeholderImage} />     
            </div>
            <div className="col-4">
                <PostCard image={placeholderImage} />         
            </div>
        </div>
    </div>
)

export default Posts;