import axios from 'axios';
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/Auth-reducer';
import { HeaderAPI } from '../../api/api';

class HeaderContainer extends React.Component {
      componentDidMount() {
            HeaderAPI.isAuth()
                  .then(data => {     
                        let { id, email, login} = data;
                        this.props.setAuthUserData(id, email, login);
            })
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
      setAuthUserData,
})(HeaderContainer);