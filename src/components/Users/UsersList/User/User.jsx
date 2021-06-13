import React from "react";
import s from "./User.module.css";
import UserInf from "./UserInf/UserInf";
import UserPresent from "./UserPresent/UserPresent";

const User = (props) => {
   return (
     <div className={s.user}>
       <UserPresent
         transitionToProfile={props.transitionToProfile}
         id={props.user.id}
         followed={props.user.followed}
         onFollowClick={props.onFollowClick}
       />
       <UserInf user={props.user} />
     </div>
   );
};

export default User;