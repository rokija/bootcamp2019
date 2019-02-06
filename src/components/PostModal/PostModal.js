import React from "react";
import "./PostModal.css";

const PostModal = ({ onClose }) => (
    <div className="PostModal">
        <div className="PostModal__content">
            <div className="PostModal__content__title">upload image</div>
            <form>
                <div className="form-group">
                    <label>Caption:</label>
                    <input className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <input type="file" className="form-control-file" />
                </div>
            </form>
            <div className="PostModal__buttons">
                <button
                    className="btn btn-light"
                    onClick={onClose}
                >
                    cancel
                </button>
                <button className="btn btn-primary">Upload</button>
            </div>
        </div>
    </div>
)

export default PostModal;
