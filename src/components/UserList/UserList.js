import React from "react";
import UserCard from "../UserCard/UserCard";
import placeholderImage from "../../media/image-placeholder.svg";
import "./UserList.css";

const UserList = () => (
  <div className="UserList">
    <UserCard
      image={placeholderImage}
      title="name"
      text="description"
    />
    <UserCard
      image={placeholderImage}
      title="John"
      text="carpenter"
    />
    <UserCard
      image={placeholderImage}
      title="Jane"
      text="very cool"
    />
  </div>
);

export default UserList;
