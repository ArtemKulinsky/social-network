import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/vallidators/validators';
import { Element } from '../../../common/FormsControls/FormsControls';
import s from './NewPost.module.css';

const maxLength50 = maxLengthCreator(50);

const TextArea = Element("textarea")

const NewPostForm = (props) => {
  return (
    <div className={s.newPost}>
      <form onSubmit={props.handleSubmit} className={s.newPostAddNews}>
        <Field
          name="newPost"
          placeholder="your news..."
          validate={[required, maxLength50]}
          component={TextArea}
        ></Field>
        <button>Send</button>
      </form>
    </div>
  );
}

export const NewPostReduxForm = reduxForm({
  form: "newPost",
})(NewPostForm);