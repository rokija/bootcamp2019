import React from "react";
import logo from "../../media/image-placeholder.svg";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <div className="row">
      <div className="col-md-2">
        <img className="Header__image" src={logo} alt="something" />
        <span className="pull-right"> headline </span>
      </div>
      <div className="col-md-10">
        <div className="Header__button">
          <button className="btn btn-primary">create post</button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
