import React from 'react';
import User from './User/User';
import s from "./UsersList.module.css";

let UsersList = (props) => {
   let pagesCount = Math.min(Math.ceil(props.totalUsersCount / props.pageSize), 10);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   
   return (
         <div className={s.usersList}>
            <div>
               {pages.map((p) => {
                  return <span 
                     className={p === props.currentPage ? s.selectedPage : ""}
                     onClick={() => {props.onPageChanged(p)}}
                     key={p}
                  >
                     {p}
                  </span>;
               })}
            </div>
            {props.users.map((user) => (
               <User
                  transitionToProfile={props.transitionToProfile}
                  onFollowClick={props.changeFollow}
                  user={user}
                  key={user.id}
               />
            ))}
         </div>
      );
}

export default UsersList;