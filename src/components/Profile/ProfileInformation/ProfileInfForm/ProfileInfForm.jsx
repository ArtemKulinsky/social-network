import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import Checkboxes from './Checkboxes/Checkboxes';
import s from "./ProfileInfForm.module.css";


const ProfileInfForm = (props) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <form
      onSubmit={props.handleSubmit}
      className={`${s.profileInformation__text} ${s.text}`}
    >
      <div className={s.text__name + " " + s.text_item}>
        {
          props.profileInformation.fullName
            ? props.profileInformation.fullName
            : "Noname"
        }
        {editMode && <Field name="fullName" component="input" />}
      </div>
      <div className={s.text_item}>
        About me: 
        {
          editMode
            ? <Field name="aboutMe" component="input" />
            : props.profileInformation.aboutMe
        }
      </div>
      <div className={s.text_item}>
        Looking for a job:
        {
          editMode 
            ? (<Field 
                name="lookingForAJob" 
                change={props.change} 
                component={Checkboxes} 
                LookingForAJobFormValue={props.LookingForAJobFormValue}
              />)
            : (props.profileInformation.lookingForAJob ? "Yes" : "No")
        }
      </div>
      <div className={s.text_item}>
        Professional skills:
        { editMode 
            ? <Field name="lookingForAJobDescription" component="input" />
            : props.profileInformation.lookingForAJobDescription
        }
      </div>
      <div>
        Contacts:
        {
          Object.entries(props.profileInformation.contacts).map(
            (item, index) => (
              <Contact
                contactTitlle={item[0]}
                contactValue={item[1]}
                editMode={editMode}
                key={index}
              />
            )
          )
        }
      </div>
      {
        editMode 
        ? <button onClick={() => setEditMode(false)} type="submit">Update information</button>
        : <button onClick={(e) => {e.preventDefault(); setEditMode(true)}}>
          Change information
          </button>
      }
    </form>
  );
};

const Contact = (props) => {
  return (
    <div>
      {props.contactTitlle}: 
      {
        props.editMode 
          ? <Field name={props.contactTitlle} component="input"/> 
          : props.contactValue
      }
    </div>
  )
}

const selector = formValueSelector("profileInformation")

const mapStateToProps = (state) => {
  const LookingForAJobFormValue = selector(state, 'lookingForAJob')

  return {
    LookingForAJobFormValue,
    initialValues: {
      fullName: state.profileReducer.profileInformation.fullName,
      aboutMe: state.profileReducer.profileInformation.aboutMe,
      lookingForAJob: state.profileReducer.profileInformation.lookingForAJob,
      lookingForAJobDescription: state.profileReducer.profileInformation.lookingForAJobDescription,
      github: state.profileReducer.profileInformation.contacts.github,
      vk: state.profileReducer.profileInformation.contacts.vk,
      facebook: state.profileReducer.profileInformation.contacts.facebook,
      instagram: state.profileReducer.profileInformation.contacts.instagram,
      twitter: state.profileReducer.profileInformation.contacts.twitter,
      website: state.profileReducer.profileInformation.contacts.website,
      youtube: state.profileReducer.profileInformation.contacts.youtube,
      mainLink: state.profileReducer.profileInformation.contacts.mainLink,
    },
    enableReinitialize: true,
  };
}

export default compose(
  connect(mapStateToProps, null),
  reduxForm({form: "profileInformation"})
)(ProfileInfForm);

// export const ProfileInfReduxForm = reduxForm({
//   form: "profileInf",
// })(ProfileInfForm);