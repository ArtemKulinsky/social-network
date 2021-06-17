import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { AuthMe } from "../../Redux/Auth-reducer";

class HeaderContainer extends React.Component {
      componentDidMount() {
            this.props.AuthMe();
      }

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

export default connect(mapStateToProps, {
      AuthMe,
})(HeaderContainer);