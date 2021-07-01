import React from 'react';
import { Field } from 'redux-form';
import s from "./Checkboxes.module.css";

const Checkboxes = (props) => {
  return (
    <fieldset>
      <label>
        <span>Yes</span>
        <input
          name="loogingForaJoB"
          value="Yes"
          type="radio"
          checked={props.LookingForAJobFormValue}
          onClick={() => props.change("lookingForAJob", true )}
        />
      </label>
      <label>
        <span>No</span>
        <input
          name="loogingForaJoB"
          value="No"
          type="radio"
          checked={!props.LookingForAJobFormValue}
          onClick={() => props.change("lookingForAJob", false )}
        />
      </label>
    </fieldset>
  );
}

export default Checkboxes;