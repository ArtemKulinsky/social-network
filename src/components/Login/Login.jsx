import { connect } from "react-redux";
import { compose } from "redux";
import { AuthAPI } from "../../api/api";
import s from "./Login.module.css";
import { LoginReduxForm } from "./LoginForm/LoginForm";
import { LoginUser } from "../../Redux/Auth-reducer"

const Login = (props) => {
   const onSubmit = (formData) => {
      props.LoginUser(formData.email, formData.password, formData.remembeMe);
   }

   return (
      <main>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </main>
   );
}

// let mapStateToProps = (state) => ({
// })

export default compose(
   connect( null, {
      LoginUser
   }),
)(Login);