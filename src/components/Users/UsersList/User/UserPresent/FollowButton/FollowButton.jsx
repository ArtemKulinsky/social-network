import React from "react";
import s from "./FollowButton.module.css";

const FollowButton = (props) => {

  let changeFollow = () => {
    props.changeFollow(props.id, props.followed);
    // props.toggleFollowingInProgress(true, props.id);

    // if (props.followed) {
    //   UsersAPI.unfollowUser(props.id).then((data) => {
    //     if (!data.resultCode) {
    //       let id = props.id;
    //       props.onFollowClick(id);

    //       props.toggleFollowingInProgress(false, props.id);
    //     }
    //   });
    // } else {
    //   UsersAPI.followUser(props.id).then((data) => {
    //     if (!data.resultCode) {
    //       let id = props.id;
    //       props.onFollowClick(id);

    //       props.toggleFollowingInProgress(false, props.id);
    //     }
    //   });
    // }
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
