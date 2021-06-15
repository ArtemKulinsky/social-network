import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { UsersAPI } from "../../../../../api/api";
import s from "./UserPresent.module.css";

const UserPresent = (props) => {
  let changeFollow = () => {
    if(props.followed) {
      debugger
      UsersAPI.unfollowUser(props.id)
        .then((data) => {
          debugger;
          if (!data.resultCode) {
            let id = props.id;
            props.onFollowClick(id);
          }
        }); 
    } else {
      debugger
      UsersAPI.followUser(props.id)
        .then((data) => {
          debugger;
          if (!data.resultCode) {
            let id = props.id;
            props.onFollowClick(id);
          }
        }); 
    }
  }
  
  return (
    <section className={s.userPresent}>
      <NavLink to={"/profile/" + props.id}>
        <div  className={s.userAvatar}>
          <img></img>
        </div>
      </NavLink>
      <button onClick={changeFollow} className={s.userFollowed}>
        {props.followed ? "folllow" : "unfollow"}
      </button>
    </section>
  );
};

export default UserPresent;
