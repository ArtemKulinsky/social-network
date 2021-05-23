import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileInformation from './ProfileInformation/ProfileInformation';



const Profile = (props) => {
  return (
    <div>
      <ProfileHeader />
      <ProfileInformation />
      <MyPosts dispatch={props.dispatch} myPosts={props.profilePage.myPosts} />
    </div>
  )
}

export {
  Profile,
}