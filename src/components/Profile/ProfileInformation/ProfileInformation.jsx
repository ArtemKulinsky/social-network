import React from 'react';
import s from './ProfileInformation.module.css';

const ProfileInformation = (props) => {
  debugger
  return (
    <section className={s.profileInformation}>
      <div className={s.profileInformation__photo}>
        <img
          src={
            props.profileInformation.photo
            ? props.profileInformation.photo
            : "https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg"
          }
        ></img>
      </div>
      <div className={`${s.profileInformation__text} ${s.text}`}>
        <p className={s.text__name}>{props.profileInformation.fullName ? props.profileInformation.fullName : "Noname"}</p>
        <p>Date of birthday: 24 May</p>
        <p>City: Krasnodar</p>
        <p>Education: KubSU'21</p>
        <p>Web-site: https://vk.com/a.temik</p>
      </div>
    </section>
  );
}

export default ProfileInformation;