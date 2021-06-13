import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Profile } from './Profile';
import { addPost, setProfileInformation, updateNewPost } from '../../Redux/Profile-reducer';


class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.profileInformation.id}`
      ).then((response) => {
        this.props.setProfileInformation(response.data);
      });
  }
  
  render() {
    return (
      <Profile
        {...this.props}
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

export default connect(mapStateToProps, {
  setProfileInformation,
  addPost,
  updateNewPost,
})(ProfileContainer);