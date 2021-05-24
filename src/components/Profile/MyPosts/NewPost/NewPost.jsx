import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/state';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = (e) => {
    e.preventDefault();
    props.dispatch(addPostActionCreator());
  }

  let addNewPostText = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.newPost}>
      <form className={s.newPostAddNews}>
        <textarea onChange={ addNewPostText }
                  ref={ newPostElement } 
                  value={props.newPost.text} 
                  placeholder="your news..."></textarea>
        <button onClick={ addPost } >Send</button>
      </form>
    </div>
  )
}

export {
  NewPost,
}