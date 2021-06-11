import React from "react";
import s from "./UserInf.module.css";

const UserInf = (props) => {
  return (
    <section className={s.userInf}>
      <div className={s.headInf}>
        <p className={s.userFullName}>{props.user.name}</p>
        <p className={s.userStatus}>{props.user.status}</p>
      </div>
      <div className={s.userLocation}>
        <p className={s.userLocationCity}>{"props.userInf.location.city"}</p>
        <p className={s.userLocationCountry}>
          {"props.userInf.location.country"}
        </p>
      </div>
    </section>
  );
};

export default UserInf;
