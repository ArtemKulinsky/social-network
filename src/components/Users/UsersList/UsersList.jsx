import React from 'react';
import Paginator from '../../common/preloader/Paginator/Paginator';
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
         <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
         />
         {
            props.users.map((user) => (
               <User
                  isFollowingInProgress={props.isFollowingInProgress}
                  toggleFollowingInProgress={props.toggleFollowingInProgress}
                  changeFollow={props.changeFollow}
                  user={user}
                  key={user.id}
               />
            ))
         }
      </div>
   );
}

export default UsersList;