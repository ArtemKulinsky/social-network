import React from 'react';
import Paginator from '../../common/Paginator/Paginator'
import User from './User/User';
import s from "./UsersList.module.css";

let UsersList = (props) => {
   return (
      <div className={s.usersList}>
         <Paginator
            totalItemsCount={props.totalUsersCount}
            maxPagesToShowCount={props.maxPagesToShowCount}
            maxItemsCount={props.pageSize}
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