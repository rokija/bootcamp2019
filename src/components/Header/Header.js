import React from "react";
import logo from "../../media/image-placeholder.svg";
import "./Header.css";

const Header = () => (
    <div className="Header">
        <div className="Header__title">
            <img className="Header__title__logo" src={logo} alt="title logo" />
            <span className="Header__title__headline"> Bootcamp App </span>
        </div>
        <div className="Header__button">
            <button className="btn btn-primary">create post</button>
        </div>
    </div>
);

export default Header;
