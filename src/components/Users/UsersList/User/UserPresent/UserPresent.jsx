import React from "react";
import s from "./UserPresent.module.css";

const UserPresent = (props) => {
   let changeFollow = () => {
      let id = props.id;
      props.onFollowClick(id);
   }
   
   return (
      <section className={s.userPresent}>
         <div className={s.userAvatar}>
            <img></img>
         </div>
         <button onClick={changeFollow} className={s.userFollowed}>{(props.followed? "folllow": "unfollow")}</button>
      </section>
   );
};

export default UserPresent;
