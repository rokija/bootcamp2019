import React from "react";
import "./UserCard.css";

const UserCard = ({ image }) => (
  <div className="UserCard">
    <div className="row">
      <div className="col-md-2">
        <img className="UserCard__image" src={image} alt="something" />
      </div>
      <div className="col-md-10">
        <div className="UserCard__title">name</div>
        <div className="UserCard__description">Desc</div>
      </div>
    </div>
  </div>
);

export default UserCard;
