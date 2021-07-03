import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/vallidators/validators";
import { Element } from "../../common/FormsControls/FormsControls";
import s from "./LoginForm.module.css";

const Input = Element("input")

const LoginForm = ({handleSubmit, error, captcha}) => {
   return (
      <div className={s.formContainer}>
         <form onSubmit={handleSubmit} className={s.form}>
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
            {error && (
            <div className={s.formSummaryError}>{error}</div>
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
            {captcha.isNeed &&
               <div className={s.captcha}>
                  <p className={s.captchaDescription}>Пожалуйста, подтвердите, что вы не бот</p>
                  <div className={s.captchaImage}>
                     <img src={captcha.imageURL}></img>
                  </div>
                  <Field
                     type="text"
                     name="captcha"
                     component="input"
                     className={s.inputField}
                  />
               </div>
            }
            <div className={s.submit}>
               <button>Login</button>
            </div>
         </form>
      </div>
   );
};

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);