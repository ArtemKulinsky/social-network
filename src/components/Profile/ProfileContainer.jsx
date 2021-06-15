import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Profile } from './Profile';
import { addPost, setProfileInformation, updateNewPost } from '../../Redux/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { ProfileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    ProfileAPI.setProfile(userId)
      .then((data) => {
          this.props.setProfileInformation(data);
        });
  }
  
  render() {
    return (
      <Profile
        {...this.props  }
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileInformation: state.profileReducer.profileInformation,
    myPosts: state.profileReducer.myPosts,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setProfileInformation,
  addPost,
  updateNewPost,
})(WithUrlDataContainerComponent);