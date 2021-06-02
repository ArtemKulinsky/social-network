import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/Profile-reducer';
import { NewPost } from './NewPost';

const NewPostContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let addNewPostText = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  return ( <NewPost addPost={addPost} addNewPostText={addNewPostText} newPost={props.newPost} />)
}

export default NewPostContainer;