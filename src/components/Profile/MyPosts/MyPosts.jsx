import React from 'react';
import { NewPost } from './NewPost/NewPost';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {
  return (
    <section className={s.myPosts}>
      <h2 className={s.myPosts__title}>My posts</h2>
      <NewPost addPost={props.addPost} addNewPostText={props.addNewPostText} newPost={props.myPosts.newPost} />
      <Posts posts={props.myPosts.posts} />
    </section>
  )
}

export default MyPosts;