import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

let mapStateToRedirect = (state) => ({
      isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
   
   class RedirectComponent extends React.Component {
      render() {
         if(!this.props.isAuth) return <Redirect to='/login'/>

         return <Component {...this.props} />
      }
   };
////!Соединяем со store, чтобы не делать этого каждый раз в месте вызова HOC`a.
   let connectedRedirectComponent = connect(mapStateToRedirect)(RedirectComponent);
   
   return connectedRedirectComponent;
}