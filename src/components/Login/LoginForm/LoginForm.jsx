import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/vallidators/validators";
import { Element } from "../../common/preloader/FormsControls/FormsControls";
import s from "./LoginForm.module.css";

const Input = Element("input")

const LoginForm = (props) => {
   return (
      <div className={s.formContainer}>
         <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.login + " " + s.inputField}>
               <Field
                  validate={[required]}
                  placeholder="email"
                  name={"email"}
                  component={Input}
               />
            </div>
            <div className={s.password + " " + s.inputField}>
               <Field
                  validate={[required]}
                  placeholder="password"
                  name={"password"}
                  type="password"
                  component={Input}
               />
            </div>
            {props.error && (
            <div className={s.formSummaryError}>{props.error}</div>
            )}
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