import React from "react";
import PostCard from "../PostCard";
import "./Posts.css";

const Posts = () => (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <PostCard />     
            </div>
            <div className="col-4">
                <PostCard />     
            </div>
            <div className="col-4">
                <PostCard />         
            </div>
        </div>
    </div>
)

export default Posts;