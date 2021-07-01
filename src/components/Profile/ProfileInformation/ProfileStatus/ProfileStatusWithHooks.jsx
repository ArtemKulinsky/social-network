import React, { useState } from 'react';
import s from './ProfileStatus.module.css'
import StatusReduxForm from './StatusForm/StatusForm'

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  
  const onSubmit = (formData) => {
    props.updateProfileStatus(formData.status, props.myId);

    setEditMode(false);
  };

  return (
    <div onDoubleClick={() => setEditMode(true)}>
      <span>
        Status:
        {editMode 
          ? <StatusReduxForm
              status={props.status}
              setEditMode={setEditMode}
              onSubmit={onSubmit}
            />
          : props.status
        }
      </span>
      {/* {!editMode && (
        <div>
          <span onDoubleClick={() => setEditMode(true)}>
            Status: {props.status}
          </span>
        </div>
      )}
      {editMode && (
        <StatusReduxForm
          status={props.status}
          setEditMode={setEditMode}
          onSubmit={onSubmit}
        />
      )} */}
    </div>
  );
}

export default ProfileStatusWithHooks;