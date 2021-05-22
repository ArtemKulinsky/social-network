import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = (e) => {
    e.preventDefault();
    let text = props.newPost.text;

    props.addPost(text);
  }

  let addText = (e) => {
    debugger;
    let text = newPostElement.current.value;
    props.addText(text);
  }

  return (
    <div className={s.newPost}>
      <form className={s.newPostAddNews}>
        <textarea onChange={ addText } ref={ newPostElement } value={props.newPost.text} placeholder="your news..."></textarea>
        <button onClick={ addPost } >Send</button>
      </form>
    </div>
  )
}

export {
  NewPost,
}