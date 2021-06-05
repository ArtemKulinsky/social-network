import React from "react";
import User from "./User/User";
import s from "./UsersList.module.css";

const UsersList = (props) => {
   return (
     <div className={s.usersList}>
       {props.users.map((user) => (
         <User onFollowClick={props.changeFollow} user={user} key={user.id} />
       ))}
     </div>
   );
}

export default UsersList;
