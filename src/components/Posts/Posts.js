import React from "react";
import placeholderImage from "../../media/image-placeholder.svg";

/* TODO: Study 1.
  refactor the component exctracting PostCard to a separate component
  and pass image and title through props to it
*/

const Posts = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="card mb-5">
          <img className="card-img-top" alt="some img" src={placeholderImage} />
          <div className="card-body">
            <h2 className="card-title">React app post</h2>
            <span className="card-text">some text</span>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card mb-5">
          <img className="card-img-top" alt="some img" src={placeholderImage} />
          <div className="card-body">
            <h2 className="card-title">Other Title</h2>
            <span className="card-text">some other text</span>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card mb-5">
          <img className="card-img-top" alt="some img" src={placeholderImage} />
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <span className="card-text">some text</span>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="card mb-5">
          <img className="card-img-top" alt="some img" src={placeholderImage} />
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <span className="card-text">some text</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Posts;
