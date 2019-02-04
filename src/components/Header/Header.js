import React from "react";
import logo from "../../media/image-placeholder.svg";
import "./Header.css";

const Header = ({ handleOpenModal }) => (
  <div className="Header">
    <div className="row">
      <div className="col-md-2">
        <img className="Header__image" src={logo} alt="something" />
        <span className="pull-right"> headline </span>
      </div>
      <div className="col-md-10">
        <div className="Header__button">
          <button onClick={handleOpenModal} className="btn btn-primary">
            create post
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
