import React, { useEffect } from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import { NewPostReduxForm } from './NewPost/NewPost';
import { useState } from 'react';

const MyPosts = (props) => {
  
  const addPost = (formData) => {
    props.addPost(formData.newPost);
  };

  return (
    <section className={s.myPosts}>
      <h2 className={s.myPosts__title}>My posts</h2>
      <NewPostReduxForm onSubmit={addPost} submitted={props.submitted} />
      <Posts posts={props.myPosts.posts} />
    </section>
  );
}

export default MyPosts;