import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = (e) => {
    e.preventDefault();

    let action = {
      type: "ADD-POST",
    }

    props.dispatch(action);
    // let text = props.newPost.text;
    // props.addPost(text);
  }

  let addNewPostText = () => {
    debugger;
    let newText = newPostElement.current.value;
    let action = {
      type: "ADD-NEW-POST-TEXT",
      newText: newText,
    }

    props.dispatch(action);
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