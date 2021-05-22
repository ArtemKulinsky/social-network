import React from 'react';
import s from './ProfileInformation.module.css';

const ProfileInformation = () => {
   return (
      <section className={s.profileInformation}>
        <div className={s.profileInformation__photo}>
          <img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"></img>
        </div>
        <div className={`${s.profileInformation__text} ${s.text}`}>
          <p className={s.text__name}>Artem Kulinskiy</p>
          <p>Date of birthday: 24 May</p>
          <p>City: Krasnodar</p>
          <p>Education: KubSU'21</p>
          <p>Web-site: https://vk.com/a.temik</p>
        </div>
      </section>
  )
}

export default ProfileInformation;