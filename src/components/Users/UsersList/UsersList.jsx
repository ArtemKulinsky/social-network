import axios from "axios";
import React from "react";
import User from "./User/User";
import s from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {

  axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
  }

    return (
      <div className={s.usersList}>
        {props.users.map((user) => (
          <User onFollowClick={props.changeFollow} user={user} key={user.id} />
        ))}
      </div>
    );
}

export default UsersList;
