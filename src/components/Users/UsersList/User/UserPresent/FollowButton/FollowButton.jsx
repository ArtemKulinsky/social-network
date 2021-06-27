import React from "react";
import s from "./FollowButton.module.css";

const FollowButton = (props) => {

  let changeFollow = () => {
  props.changeFollow(props.id, props.followed);
  };

  return (
    <button
      disabled={props.isFollowingInProgress.some(id => id === props.id)}
      onClick={changeFollow}
      className={s.userFollowed}
    >
      {props.followed ? "folllow" : "unfollow"}
    </button>
  );
};

export default FollowButton;
