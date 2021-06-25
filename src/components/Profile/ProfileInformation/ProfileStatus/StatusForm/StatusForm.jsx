import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from "./StatusForm.module.css";

const StatusForm = (props) => {
  // props.autofill("status", props.status);

  return (
    <form
      onSubmit={props.handleSubmit}
      className={s.statusForm}
    >
      <Field
        autoFocus={true}
        type="text"
        name="status"
        id=""
        component={"input"}
      />
      <button type="submit">UpdateStatus</button>
    </form>
  );
}

export const StatusReduxForm = reduxForm({
  form: "status",
  // initialValues: {
  //   status: 'adwwa'
  // },
})(StatusForm);