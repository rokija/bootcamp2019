import React from "react";
import UserCard from "../UserCard";
import placeholderImage from "../../media/image-placeholder.svg";

const UserList = () => (
  <div>
    <UserCard image={placeholderImage} />
    <UserCard image={placeholderImage} />
    <UserCard image={placeholderImage} />
    <UserCard image={placeholderImage} />
    <UserCard image={placeholderImage} />
  </div>
);

export default UserList;
