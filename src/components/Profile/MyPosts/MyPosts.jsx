import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import NewPostContainer from './NewPost/NewPostContainer';

const MyPosts = (props) => {
  return (
    <section className={s.myPosts}>
      <h2 className={s.myPosts__title}>My posts</h2>
      <NewPostContainer dispatch={props.dispatch} newPost={props.myPosts.newPost} />
      <Posts posts={props.myPosts.posts} />
    </section>
  )
}

export default MyPosts;