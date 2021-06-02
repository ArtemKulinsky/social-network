import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let addPost = (e) => {
    e.preventDefault();
    props.addPost();
  }

  let addNewPostText = (e) => {
    let text = e.target.value;
    props.addNewPostText(text);
  }

  return (
    <div className={s.newPost}>
      <form className={s.newPostAddNews}>
        <textarea onChange={ addNewPostText }
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