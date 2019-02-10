import React from "react";
import "./PostModal.css";

const PostModal = ({ onClose, onInputChange, onAddImage, onSubmitPost }) => (
  <div className="PostModal">
    <div className="PostModal__content">
      <div className="PostModal__content__title">upload image</div>
      <form>
        <div className="form-group">
          <label>Caption:</label>
          <input
            className="form-control"
            type="text"
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            onChange={onAddImage}
          />
        </div>
      </form>
      <div className="PostModal__buttons">
        <button className="btn btn-light" onClick={onClose}>
          cancel
        </button>
        <button className="btn btn-primary" onClick={onSubmitPost}>
          Upload
        </button>
      </div>
    </div>
  </div>
);

export default PostModal;
