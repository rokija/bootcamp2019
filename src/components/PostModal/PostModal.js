import React from "react";
import "./PostModal.css";

const PostModal = () => (
    <div className="PostModal">
        <div className="PostModal__content">
            <h2>upload image</h2>
            <label>Caption:</label>
            <input type="text" />
            <input type="file" />
            <div className="PostModal__buttons">
                <button className="btn btn-default">cancel</button>
                <button className="btn btn-primary">Upload</button>
            </div>
        </div>
    </div>
)

export default PostModal;
