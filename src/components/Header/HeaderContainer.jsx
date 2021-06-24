import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { LoginUser, LogoutUser } from "../../Redux/Auth-reducer";
import { compose } from 'redux';

class HeaderContainer extends React.Component {
      render() {
            return ( <Header {...this.props} ></Header>)
      }
};

const mapStateToProps = (state) => ({
      userId: state.auth.userId,
      email: state.auth.email,
      login: state.auth.login,
      isAuth: state.auth.isAuth,
});

export default compose(
      connect(mapStateToProps, {
      LoginUser,
      LogoutUser,
      })
)(HeaderContainer);