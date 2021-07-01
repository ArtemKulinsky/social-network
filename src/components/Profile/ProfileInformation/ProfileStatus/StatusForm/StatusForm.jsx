import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import s from "./StatusForm.module.css";

const StatusForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className={s.statusForm}
    >
      <Field
        autoFocus="true"
        type="text"
        name="status"
        id=""
        component="input"
      />
      <button type="submit">UpdateStatus</button>
    </form>
  );
}

let mapStateToProps = (state) => ({
  initialValues: {
    status: state.profileReducer.status 
  },
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps, null),
  reduxForm({form: "status"})
)(StatusForm)