import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInformation from './ProfileInformation/ProfileInformation';



const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <ProfileInformation />
      <MyPosts addText={props.addText} addPost={ props.addPost } myPosts={props.profilePage.myPosts} />
    </div>
  )
}

export {
  Profile,
}