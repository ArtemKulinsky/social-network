import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import {
  addPost,
  getProfile,
  updateNewPost,
} from "../../Redux/Profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId; ////!Из данных, передаваемых с WithRouter
    this.props.getProfile(userId);
  }
  
  render() {
    return (
      <Profile
        {...this.props  }
      />
    );
  }
}

let withAuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profileInformation: state.profileReducer.profileInformation,
    myPosts: state.profileReducer.myPosts,
  };
};

let withUrlDataContainerComponent = withRouter(withAuthRedirectComponent);

export default connect(mapStateToProps, {
  getProfile,
  addPost,
  updateNewPost,
})(withUrlDataContainerComponent);