import React from "react";
import s from "./Users.module.css";
import UsersListContainer from "./UsersList/UsersListContainer"

const Users = (props) => {
   return (
      <section className={s.users}>
         <div className={s.usersTitle}>Users</div>
         <div className={s.usersBody}>
            <UsersListContainer/>
         </div>
      </section>
   )
}

export default Users;
