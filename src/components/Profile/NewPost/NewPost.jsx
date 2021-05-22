import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = (e) => {
    e.preventDefault();
    let text = newPostElement.current.value;
    props.addPost(text);

    newPostElement.current.value = ""
  }

  let addText = (e) => {
    if(e.code !== 'Enter'  && e.code !== 'Backspace'&& e.code !== 'Tab') {
      props.addText(e.key);
      e.preventDefault();
      return
    }
  }

  return (
    <div className={s.newPost}>
      <form className={s.newPostAddNews}>
        <textarea onKeyDown={ addText } ref={ newPostElement } value={props.newPost.text} placeholder="your news..."></textarea>
        <button onClick={ addPost } >Send</button>
      </form>
    </div>
  )
}

export {
  NewPost,
}