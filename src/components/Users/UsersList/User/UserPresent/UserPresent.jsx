import React from "react";
import { NavLink } from "react-router-dom";
import s from "./UserPresent.module.css";

const UserPresent = (props) => {
   let changeFollow = () => {
      let id = props.id;
      props.onFollowClick(id);
   }

   let goToProfile = () => {
     debugger
     props.transitionToProfile(props.id)
   }
   
   return (
     <section className={s.userPresent}>
       <NavLink to={"/profile/" + props.id}>
         <div onClick={goToProfile} className={s.userAvatar}>
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
