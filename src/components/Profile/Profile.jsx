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
          profileInformation={props.profileInformation}
          updateProfileStatus={props.updateProfileStatus}
        />
        <MyPosts
          addPost={props.addPost}
          updateNewPost={props.updateNewPost}
          myPosts={props.myPosts}
        />
      </div>
    );
}

export {
  Profile,
}