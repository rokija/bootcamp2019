import React from "react";
import "./PostModal.css";

const PostModal = ({
    onInputChange,
    onAddImage,
    onClose,
}) => (
        <div className="PostModal">
            <div className="PostModal__content">
                <h2>upload image</h2>
                <label>Caption:</label>
                <input className="mb-1" type="text" onChange={onInputChange} />
                <input className="mb-1" type="file" onChange={onAddImage} />
                <div className="PostModal__buttons">
                    <button
                        onClick={onClose}
                        className="btn btn-default"
                    >
                        cancel
                </button>
                    <button className="btn btn-primary">
                        Upload
                </button>
                </div>
            </div>
        </div>
    )

export default PostModal;
