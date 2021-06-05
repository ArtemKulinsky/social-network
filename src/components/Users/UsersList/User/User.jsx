import React from "react";
import s from "./User.module.css";
import UserInf from "./UserInf/UserInf";
import UserPresent from "./UserPresent/UserPresent";

const User = (props) => {
   debugger;
   return (
      <div className={s.user}>
         <UserPresent
            id={props.user.id}
            followed={props.user.followed}
            onFollowClick={props.onFollowClick}
         />
         <UserInf userInf={props.user.userInf} />
      </div>
   );
};

export default User;