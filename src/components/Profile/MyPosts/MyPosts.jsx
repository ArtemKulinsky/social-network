import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {
  return (
    <section className={s.myPosts}>
      <h2 className={s.myPosts__title}>My posts</h2>
      <NewPost
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
        newPost={props.myPosts.newPost}
      ></NewPost>
      <Posts posts={props.myPosts.posts} />
    </section>
  );
}

export default MyPosts;