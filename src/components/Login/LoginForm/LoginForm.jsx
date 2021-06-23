import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/vallidators/validators";
import { Element } from "../../common/preloader/FormsControls/FormsControls";
import s from "./LoginForm.module.css";

// const RemembeMe = (props) => {
//    return (
//       <>
//          <input type="checkbox" name="rememberMe" id="" />
//          <span>Remember me</span>
//       </>
//    );
// }

// const TextArea = Element("input")

const LoginForm = (props) => {
   return (
      <div className={s.formContainer}>
         <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.login + " " + s.inputField}>
            <Field
               validate={[required]}
               placeholder="email"
               name={"email"}
               component={Element("input")}
            />
            </div>
            <div className={s.password + " " + s.inputField}>
            <Field
               validate={[required]}
               placeholder="password"
               name={"password"}
               component={Element("input")}
            />
            </div>
            <label className={s.remember}>
            <Field
               type="checkbox"
               name={"rememberMe"}
               id=""
               component={"input"}
            />
            <span>Remember me</span>
            </label>
            <div className={s.submit}>
            <button>Login</button>
            </div>
         </form>
      </div>
   );
};

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);