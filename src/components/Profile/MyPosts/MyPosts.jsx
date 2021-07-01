import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import { NewPostReduxForm } from './NewPost/NewPost';
import React from 'react';

const MyPosts = React.memo((props) => {
  let addPost = (formData) => {
    props.addPost(formData.newPost);
  };

  return (
    <section className={s.myPosts}>
      <h2 className={s.myPosts__title}>{props.isOwner
          ? "My posts"
          : "Posts"
        }
      </h2>
      {props.isOwner && (
        <NewPostReduxForm
          onSubmit={addPost.bind(this)}
          submitted={props.submitted}
        />
      )}
      <Posts isOwner={props.isOwner} posts={props.myPosts.posts} />
    </section>
  );
})

export default MyPosts;