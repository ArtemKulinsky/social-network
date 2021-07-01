import React from 'react';
import s from './ProfileInformation.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import Preloader from '../../common/Preloader/Preloader'
import ProfileInfReduxForm from './ProfileInfForm/ProfileInfForm';

const ProfileInformation = (props) => {
  const onAvatarChange = (e) => {
    if (e.target.files.length) {
      let image = e.target.files[0];
      props.updateProfilePhotos(image);
    }
  };

  const onSubmit = (formData) => {
    let newProfileInformation = {
      userId: props.myId,
      aboutMe: formData.aboutMe,
      photos: {
        large: props.profileInformation.photos.large,
        small: props.profileInformation.photos.small,
      },
      lookingForAJob: formData.lookingForAJob,
      lookingForAJobDescription: formData.lookingForAJobDescription,
      fullName: formData.fullName,
      contacts: {
        github: formData.github,
        vk: formData.vk,
        facebook: formData.facebook,
        instagram: formData.instagram,
        twitter: formData.twitter,
        website: formData.website,
        youtube: formData.youtube,
        mainLink: formData.mainLink,
      },
    };

    props.updateProfileInf(newProfileInformation);
  }

  return (
    <section className={s.profileInformation}>
      <div className={s.avatar_field}>
        <div className={s.avatar_photo}>
          {props.profilePhotoIsFetching ? (
            <Preloader />
          ) : (
            <UserAvatar
              photos={props.profileInformation.photos}
              toggleProfilePhotoIsFetching={props.toggleProfilePhotoIsFetching}
            />
          )}
        </div>
        {props.isOwner && (
          <div className={s.avatar_settings}>
            <form className={s.avatar_changePhoto}>
              <input type="file" onChange={onAvatarChange}></input>
            </form>
          </div>
        )}
      </div>
      <ProfileInfReduxForm
        onSubmit={onSubmit}
        profileInformation={props.profileInformation}
      />
      <ProfileStatusWithHooks
        myId={props.myId}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
      />
    </section>
  );
}

const Contact = (props) => {
  return (
    <p>{props.contactTitlle}: {props.contactValue}</p>
  )
}

const UserAvatar = (props) => {
//!!!! photo.large - ссылка, она true, когда картинка еще не загрузилась. Видимо,
//!!!! нужно в src делать проверку????
  return (
    <img
      src={
        props.photos.large
          ? props.photos.large
          : "https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg"
      }
    ></img>
  );
}

export default ProfileInformation;