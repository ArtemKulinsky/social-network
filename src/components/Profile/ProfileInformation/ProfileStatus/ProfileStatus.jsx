import React from 'react';
import s from './ProfileStatus.module.css'
import { StatusReduxForm } from './StatusForm/StatusForm';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: "",
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactiveEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  onSubmit = (formData) => {
    this.setState({
      status: formData.status
    });
    this.props.updateProfileStatus(formData.status, this.props.myId);
    this.deactiveEditMode();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode}>
              Status: {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <StatusReduxForm
            status={this.state.status}
            deactiveEditMode={this.deactiveEditMode}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;