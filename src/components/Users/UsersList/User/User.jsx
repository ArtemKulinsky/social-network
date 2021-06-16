import React from "react";
import s from "./User.module.css";
import UserInf from "./UserInf/UserInf";
import UserPresent from "./UserPresent/UserPresent";

const User = (props) => {
  return (
    <div className={s.user}>
      <UserPresent
        buttons={props.buttons}
        setButton={props.setButton}
        id={props.user.id}
        followed={props.user.followed}
        changeFollow={props.changeFollow}
        isFollowingInProgress={props.isFollowingInProgress}
        toggleFollowingInProgress={props.toggleFollowingInProgress}
      />
      <UserInf user={props.user} />
    </div>
  );
};

export default User;