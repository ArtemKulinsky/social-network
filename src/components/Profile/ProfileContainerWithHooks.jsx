import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import {
  addPost,
  setProfile,
  updateProfileStatus,
} from "../../Redux/Profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


const ProfileContainerWithHooks = (props) => {
  // componentDidMount() {
  //   let userId = this.props.match.params.userId; ////!Из данных, передаваемых с WithRouter
  //   if(userId) {
  //     this.props.setProfile(userId);
  //   } else {
  //     this.props.setProfile(this.props.myId);
  //   }
  // }
  let userId = props.match.params.userId; ////!Из данных, передаваемых с WithRouter

  useEffect(() => {
    userId
      ? props.setProfile(userId)
      : props.setProfile(props.myId);
  }, [userId]);

  return <Profile {...props} />;
};

let mapStateToProps = (state) => {
  return {
    profileInformation: state.profileReducer.profileInformation,
    myPosts: state.profileReducer.myPosts,
    status: state.profileReducer.profileInformation.status,
    myId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfile,
    addPost,
    updateProfileStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainerWithHooks);