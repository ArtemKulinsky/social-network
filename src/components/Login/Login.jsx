import { connect } from "react-redux";
import { compose } from "redux";
import s from "./Login.module.css";
import { LoginReduxForm } from "./LoginForm/LoginForm";
import { LoginUser } from "../../Redux/Auth-reducer"
import { Redirect } from "react-router-dom";

const Login = (props) => {
   const onSubmit = (formData) => {
      props.LoginUser(formData.email, formData.password, formData.remembeMe, formData.captcha);
   }

      if (props.isAuth) {
         return <Redirect to={"/profile"} />;
      }

   return (
      <main>
         <h1>Login</h1>
         <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit}/>
      </main>
   );
}

let mapStateToProps = (state) => {
   return {
   isAuth: state.auth.isAuth,
   captcha: state.auth.captcha,
   };
};

export default compose(
   connect( mapStateToProps, {
      LoginUser
   }),
)(Login);