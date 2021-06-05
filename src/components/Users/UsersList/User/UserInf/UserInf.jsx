import React from "react";
import s from "./UserInf.module.css";

const UserInf = (props) => {
  return (
    <section className={s.userInf}>
      <div className={s.headInf}>
        <div className={s.userFullName}>{props.userInf.fullName}</div>
        <p className={s.userStatus}>{props.userInf.status}</p>
      </div>
      <div className={s.userLocation}>
        <div className={s.userLocationCity}>{props.userInf.location.city}</div>
        <div className={s.userLocationCountry}>
          {props.userInf.location.country}
        </div>
      </div>
    </section>
  );
};

export default UserInf;
