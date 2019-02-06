import React from "react";
import "./UserCard.css";

const UserCard = ({ image, title, text }) => (
  <div className="UserCard">
    <div className="UserCard__image">
      <img className="UserCard__image__img" src={image} alt="something" />
    </div>
    <div className="UserCard__content">
      <div className="UserCard__content__title">{title}</div>
      <div className="UserCard__content__description">{text}</div>
    </div>
  </div>
);

export default UserCard;
