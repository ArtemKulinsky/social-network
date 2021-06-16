import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { UsersAPI } from "../../../../../api/api";
import FollowButton from "./FollowButton/FollowButton";
import s from "./UserPresent.module.css";

const UserPresent = (props) => {
  return (
    <section className={s.userPresent}>
      <NavLink to={"/profile/" + props.id}>
        <div className={s.userAvatar}>
          <img></img>
        </div>
      </NavLink>
      <FollowButton
        id={props.id}
        followed={props.followed}
        changeFollow={props.changeFollow}
        isFollowingInProgress={props.isFollowingInProgress}
        toggleFollowingInProgress={props.toggleFollowingInProgress}
      />
    </section>
  );
};

export default UserPresent;
