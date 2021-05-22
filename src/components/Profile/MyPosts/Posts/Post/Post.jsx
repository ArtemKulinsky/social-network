import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.item}>
        <img src="http://lamcdn.net/furfurmag.ru/post_image-image/UVXRb-V4bbqu3mypKBCfgg-article.jpg" />
        <div className="itemText">{ props.message }</div>
        <div>Likes: { props.likesCount }</div>
        </div>
  )
}

export default Post;