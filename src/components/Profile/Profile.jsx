import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInformation from './ProfileInformation/ProfileInformation';

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <ProfileInformation profileInformation={props.profileInformation} />
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