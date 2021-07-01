import React from 'react';
import { Redirect } from 'react-router-dom';
import MyPosts from './MyPosts/MyPosts';
import ProfileInformation from './ProfileInformation/ProfileInformation';

const Profile = (props) => {
  
  if (!props.isAuth) return <Redirect to='/login'/>

    return (
      <div>
        {/* <ProfileHeader /> */}
        <ProfileInformation
          myId={props.myId}
          status={props.status}
          profileInformation={props.profileInformation}
          updateProfileStatus={props.updateProfileStatus}
          updateProfilePhotos={props.updateProfilePhotos}
          updateProfileInf={props.updateProfileInf}
          profilePhotoIsFetching={props.profilePhotoIsFetching}
          toggleProfilePhotoIsFetching={props.toggleProfilePhotoIsFetching}
          isOwner={props.isOwner}
        />
        <MyPosts
          addPost={props.addPost}
          updateNewPost={props.updateNewPost}
          myPosts={props.myPosts}
          isOwner={props.isOwner}
        />
      </div>
    );
}

export {
  Profile,
}